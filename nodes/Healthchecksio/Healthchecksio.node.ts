import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { commonFields } from './CommonFields';
import { exitStatusFields, exitStatusOperation } from './resources/ExitStatusOperation';
import { failOperation } from './resources/FailOperation';
import { logFields, logOperation } from './resources/LogOperation';
import { startOperation } from './resources/StartOperation';
import { successPingOperation } from './resources/SuccessPingOperation';

export class Healthchecksio implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Healthchecks.io',
		name: 'healthchecksio',
		icon: 'file:healthchecks.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Ping Healthchecks.io endpoint',
		defaults: {
			name: 'HealthchecksIO',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'healthchecksIOApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.domain}}',
			url: '',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'By UUID',
						value: 'by_uuid',
					},
					{
						name: 'By Slug',
						value: 'by_slug',
					},
				],
				default: 'by_uuid',
			},

			// Operation
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,

				displayOptions: {
					show: {
						resource: ['by_uuid', 'by_slug'],
					},
				},
				options: [
					successPingOperation,
					startOperation,
					failOperation,
					logOperation,
					exitStatusOperation,
				],
				default: '',
			},

			...commonFields,
			...logFields,
			...exitStatusFields,

		],
	};
}
