import { INodeProperties, INodePropertyOptions } from "n8n-workflow";

export const exitStatusOperation: INodePropertyOptions = {
  name: 'Exit Status',
  value: 'exitStatus',
  action: 'Exit status',
  description: 'Sends a success or failure signal depending on the exit status',
  routing: {
    request: {
      url: '={{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/{{$parameter.exitCode}}',
      method: 'GET',
      qs: {
        'create': '={{$parameter.createIfNotExists ? 1 : 0}}',
        'rid': '={{$parameter.runId}}',
      },
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