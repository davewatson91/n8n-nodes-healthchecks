import { IExecuteSingleFunctions } from "n8n-core";
import { IHttpRequestOptions, INodePropertyOptions } from "n8n-workflow";

export const logOperation: INodePropertyOptions = {
  name: 'Log',
  value: 'log',
  action: 'Log',
  description: 'Sends logging information to Healthchecks.io without signaling success or failure',
  routing: {
    request: {
      url: '=/ping/{{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/log',
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
