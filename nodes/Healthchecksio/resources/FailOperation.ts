import { INodePropertyOptions } from "n8n-workflow";

export const failOperation: INodePropertyOptions = {
  name: 'Fail',
  value: 'fail',
  action: 'Fail',
  description: 'Signals to Healthchecks.io that the job has failed',
  routing: {
    request: {
      url: '={{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/fail',
      method: 'POST',
      qs: {
        'create': '={{$parameter.createIfNotExists ? 1 : 0}}',
        'rid': '={{$parameter.runId}}',
      },
      headers: {
        'Content-Type': '={{$parameter.requestBody ? $parameter.contentType : undefined}}',
      },
      body: '={{$parameter.requestBody}}',
    },
  },
};
