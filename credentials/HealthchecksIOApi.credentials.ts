import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HealthchecksIOApi implements ICredentialType {
	name = 'healthchecksIOApi';
	displayName = 'HealthchecksIO API';
	icon = "file:logo.png";
	documentationUrl = 'https://healthchecks.io/docs/';
	properties: INodeProperties[] = [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://healthchecks.io',
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
