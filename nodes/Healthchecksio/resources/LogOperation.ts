import { INodeProperties, INodePropertyOptions } from "n8n-workflow";

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
      body: '={{$parameter.requestBody || $parameter.logMessage || undefined}}',
    },
  },
};

export const logFields: INodeProperties[] = [
  {
    displayName: 'Log Message',
    name: 'logMessage',
    default: '',
    displayOptions: {
      show: {
        resource: ['by_uuid', 'by_slug'],
        operation: ['log'],
      },
    },
    type: 'string',
  },
];
