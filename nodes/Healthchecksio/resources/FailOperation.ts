import { INodePropertyOptions } from "n8n-workflow";

export const failOperation: INodePropertyOptions = {
  name: 'Fail',
  value: 'fail',
  action: 'Fail',
  description: 'Signals to Healthchecks.io that the job has failed',
  routing: {
    request: {
      url: '=/ping/{{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/fail',
      method: 'POST',
      qs: {
        'create': '={{$parameter.resource === "by_slug" && $parameter.createIfNotExists ? 1 : undefined}}',
        'rid': '={{$parameter.runId || undefined}}',
      },
      body: '={{$parameter.requestBody || undefined}}',
    },
  },
};
