import { INodePropertyOptions } from "n8n-workflow";

export const successPingOperation: INodePropertyOptions = {
  name: 'Success Ping',
  value: 'ping',
  action: 'Ping',
  description: 'Signals to Healthchecks.io that the job is successful',
  routing: {
    request: {
      url: '={{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}',
      method: 'GET',
      qs: {
        'create': '={{$parameter.createIfNotExists ? 1 : 0}}',
        'rid': '={{$parameter.runId}}',
      },
    },
  },
};
