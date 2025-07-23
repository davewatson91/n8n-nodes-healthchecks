# n8n-nodes-healthchecksio

***

This is a fork of opa-oz/n8n-nodes-healthchecks
------
Due to inactivity on the upstream repo, I made this fork with the intent on implementing the ability to include log statements with each step etc. Basically I just want to mimic the API capabilities. 

***

This is an n8n community node. It lets you use [Healthchecks.io](https://healthchecks.io) in your n8n workflows.
[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

### Table of content

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community
nodes documentation.

## Operations

![Operation image](https://raw.githubusercontent.com/opa-oz/n8n-nodes-healthchecks/master/docs/operation.png)

Use simple "HealthchecksIO" operation to:
- Ping
- Log
- Start
- Fail

your job.

You can specify:

- `UUID/Slug`
- HTTP Method (HEAD, GET or POST)
- Optional request body when using POST
- Optional Ping-Body-Limit header to limit stored log size
- Script exit status to report with the ping

## Credentials

![Credentials image](https://raw.githubusercontent.com/opa-oz/n8n-nodes-healthchecks/master/docs/credentials.png)

You can have different set of credentials for Healthchecks.io.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Healthchecks.io docs](https://healthchecks.io/docs/)


