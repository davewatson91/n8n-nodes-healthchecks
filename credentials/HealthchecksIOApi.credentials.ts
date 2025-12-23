import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HealthchecksIOApi implements ICredentialType {
	name = 'healthchecksIOApi';
	displayName = 'HealthchecksIO API';
	icon = "file:healthchecks.svg";
	documentationUrl = 'https://healthchecks.io/docs/';
	properties: INodeProperties[] = [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://hc-ping.com/',
			description: 'The base URL used for requests. Usually hc-ping.com (default) or hchk.io if you are using the cloud version, or your own domain if self-hosted.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
                        headers: {
                                'X-Custom-Header': 'n8n-nodes-healthchecksio'
                        },
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/',
		},
	};
}
