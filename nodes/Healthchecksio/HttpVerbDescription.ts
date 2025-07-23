import {INodeProperties} from 'n8n-workflow';

// When the resource `ping` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['by_uuid'],
			},
		},
		options: [
			{
				name: 'Ping',
				value: 'ping',
				action: 'Ping',
				routing: {
                                        request: {
                                                method: '={{$parameter.method}}',
                                                url: '=/ping/{{$parameter.uuid}}',
                                                body: '={{$parameter.body}}',
                                                headers: {
                                                        'Ping-Body-Limit': '={{$parameter.additionalFields.pingBodyLimit || undefined}}',
                                                },
                                                qs: {
                                                        exitstatus: '={{$parameter.exitStatus || undefined}}',
                                                },
                                        },
                                },
                        },
			{
				name: 'Start',
				value: 'start',
				action: 'Start',
				routing: {
                                        request: {
                                                method: '={{$parameter.method}}',
                                                url: '=/ping/{{$parameter.uuid}}/start',
                                                body: '={{$parameter.body}}',
                                                headers: {
                                                        'Ping-Body-Limit': '={{$parameter.additionalFields.pingBodyLimit || undefined}}',
                                                },
                                                qs: {
                                                        exitstatus: '={{$parameter.exitStatus || undefined}}',
                                                },
                                        },
                                },
                        },
			{
				name: 'Fail',
				value: 'fail',
				action: 'Fail',
				routing: {
                                        request: {
                                                method: '={{$parameter.method}}',
                                                url: '=/ping/{{$parameter.uuid}}/fail',
                                                body: '={{$parameter.body}}',
                                                headers: {
                                                        'Ping-Body-Limit': '={{$parameter.additionalFields.pingBodyLimit || undefined}}',
                                                },
                                                qs: {
                                                        exitstatus: '={{$parameter.exitStatus || undefined}}',
                                                },
                                        },
                                },
                        },
			{
				name: 'Log',
				value: 'log',
				action: 'Log',
				routing: {
                                        request: {
                                                method: '={{$parameter.method}}',
                                                url: '=/ping/{{$parameter.uuid}}/log',
                                                body: '={{$parameter.body}}',
                                                headers: {
                                                        'Ping-Body-Limit': '={{$parameter.additionalFields.pingBodyLimit || undefined}}',
                                                },
                                                qs: {
                                                        exitstatus: '={{$parameter.exitStatus || undefined}}',
                                                },
                                        },
                                },
                        },
		],
		default: 'ping',
	},
];

const pingOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['ping'],
			},
		},
		type: 'string',
		required: true,
	},
];
const startOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;/start',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['start'],
			},
		},
		type: 'string',
		required: true,
	},
];
const failOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;/fail',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['fail'],
			},
		},
		type: 'string',
		required: true,
	},
];
const logOperation: INodeProperties[] = [
        {
                displayName: 'UUID',
                name: 'uuid',
                default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;/log',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['log'],
			},
		},
		type: 'string',
		required: true,
        },
];

const methodField: INodeProperties[] = [
       {
               displayName: 'HTTP Method',
               name: 'method',
               type: 'options',
               options: [
                       { name: 'GET', value: 'GET' },
                       { name: 'POST', value: 'POST' },
                       { name: 'HEAD', value: 'HEAD' },
               ],
               default: 'GET',
               description: 'The HTTP method to use',
       },
];

const bodyField: INodeProperties[] = [
       {
               displayName: 'Body',
               name: 'body',
               type: 'string',
               default: '',
               displayOptions: {
                       show: {
                               method: ['POST'],
                       },
               },
               description: 'Optional body to send with the request',
       },
];

const exitStatusField: INodeProperties[] = [
       {
               displayName: 'Exit Status',
               name: 'exitStatus',
               type: 'number',
               default: NaN,
               description: 'Script exit status to report',
       },
];

const additionalFields: INodeProperties[] = [
       {
               displayName: 'Additional Fields',
               name: 'additionalFields',
               type: 'collection',
               placeholder: 'Add Field',
               default: {},
               options: [
                       {
                               displayName: 'Ping Body Limit',
                               name: 'pingBodyLimit',
                               type: 'number',
                               default: NaN,
                               description: 'Value for the Ping-Body-Limit header',
                       },
               ],
       },
];


export const httpVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                httpVerb:get                                */
	/* -------------------------------------------------------------------------- */
        ...pingOperation,
        ...startOperation,
        ...failOperation,
        ...logOperation,
        ...methodField,
        ...bodyField,
        ...exitStatusField,
        ...additionalFields,
];
