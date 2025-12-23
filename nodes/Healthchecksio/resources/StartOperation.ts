import { INodePropertyOptions } from "n8n-workflow";

export const startOperation: INodePropertyOptions = {
  name: 'Start',
  value: 'start',
  action: 'Start',
  description: 'Signals to Healthchecks.io that the job has started',
  routing: {
    request: {
      url: '={{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/start',
      method: '={{$parameter.requestBody ? "POST" : "GET"}}',
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
