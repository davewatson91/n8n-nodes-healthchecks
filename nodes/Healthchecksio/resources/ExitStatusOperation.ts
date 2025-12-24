import { IExecuteSingleFunctions } from "n8n-core";
import { IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";

export const exitStatusOperation: INodePropertyOptions = {
  name: 'Exit Status',
  value: 'exitStatus',
  action: 'Exit status',
  description: 'Sends a success or failure signal depending on the exit status',
  routing: {
    request: {
      url: '=/ping/{{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/{{$parameter.exitCode}}',
      method: 'POST',
      qs: {
        'create': '={{$parameter.resource === "by_slug" && $parameter.createIfNotExists ? 1 : undefined}}',
        'rid': '={{$parameter.runId || undefined}}',
      },
      body: '={{$parameter.requestBody || undefined}}',
    },
    send: {
      preSend: [
        async function (this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions) {
          if (requestOptions.body !== undefined) {
            requestOptions.json = false;
          }
          const itemIndex = (requestOptions as { context?: { itemIndex?: number } }).context?.itemIndex ?? 0;
          const debugRequest = this.getNodeParameter('debugRequest', itemIndex) as boolean;

          if (debugRequest) {
            this.logger.info('Healthchecks.io outgoing request', {
              method: requestOptions.method,
              baseURL: requestOptions.baseURL,
              url: requestOptions.url,
              qs: requestOptions.qs,
              headers: requestOptions.headers,
              body: requestOptions.body,
            });
          }
          return requestOptions;
        },
      ],
    },
  },
};

export const exitStatusFields: INodeProperties[] = [
  {
    displayName: 'Exit Status',
    name: 'exitCode',
    default: 0,
    hint: 'The exit status code to send. Integer value between 0 and 255, where 0 is success and anything else is failure.',
    displayOptions: {
      show: {
        resource: ['by_uuid', 'by_slug'],
        operation: ['exitStatus'],
      },
    },
    type: 'number',
    required: true,
  },
];
