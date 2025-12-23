import { INodeProperties } from "n8n-workflow";

export const commonFields: INodeProperties[] = [
  {
    displayName: 'Check UUID',
    name: 'uuid',
    default: '',
    hint: 'The unique identifier for your Healthchecks.io check.',
    displayOptions: {
      show: {
        resource: ['by_uuid'],
      },
    },
    type: 'string',
    required: true,
  },
  {
    displayName: 'Ping Key',
    name: 'pingKey',
    default: '',
    hint: 'The ping key for your Healthchecks.io project.',
    displayOptions: {
      show: {
        resource: ['by_slug'],
      },
    },
    typeOptions: {
      password: true,
    },
    type: 'string',
    required: true,
  },
  {
    displayName: 'Check Slug',
    name: 'slug',
    default: '',
    hint: 'The unique slug for your Healthchecks.io check.',
    displayOptions: {
      show: {
        resource: ['by_slug'],
      },
    },
    type: 'string',
    required: true,
  },
  {
    displayName: 'Create Check if Not Exist',
    name: 'createIfNotExists',
    default: false,
    hint: 'If enabled, a new check will be created if it does not already exist.',
    displayOptions: {
      show: {
        resource: ['by_slug'],
      },
    },
    type: 'boolean',
  },
  {
    displayName: 'Run ID',
    name: 'runId',
    default: '',
    hint: 'An optional unique identifier (UUID) for this run of the check. Used to correlate start and end pings.',
    displayOptions: {
      show: {
        resource: ['by_uuid', 'by_slug'],
      },
    },
    type: 'string',
  },
];
