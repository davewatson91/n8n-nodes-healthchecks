import { INodePropertyOptions } from "n8n-workflow";

export const successPingOperation: INodePropertyOptions = {
  name: 'Success Ping',
  value: 'ping',
  action: 'Ping',
  description: 'Signals to Healthchecks.io that the job is successful',
  routing: {
    request: {
      url: '=/ping/{{$parameter.uuid ?? ($parameter.pingKey + "/" + $parameter.slug)}}',
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
