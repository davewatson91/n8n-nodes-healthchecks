import { INodePropertyOptions } from "n8n-workflow";

export const startOperation: INodePropertyOptions = {
  name: 'Start',
  value: 'start',
  action: 'Start',
  description: 'Signals to Healthchecks.io that the job has started',
  routing: {
    request: {
      url: '=/ping/{{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}/start',
      method: 'POST',
      qs: {
        'create': '={{$parameter.resource === "by_slug" && $parameter.createIfNotExists ? 1 : undefined}}',
        'rid': '={{$parameter.runId || undefined}}',
      },
      headers: {
        'Content-Type': '={{$parameter.requestBody ? $parameter.contentType : undefined}}',
      },
      body: '={{$parameter.requestBody}}',
    },
  },
};
