---
title: Cloud Infrastructure
cmd: infra
summary: Secure, reliable, and durable deployments with predictable costs.
description: Cloud infrastructure and DevOps in Bonners Ferry, Idaho — CI/CD, containers, and hosting by Gilbert Yoder.
order: 3
icon: cloud
---

Infrastructure is where your backend logic runs. Infrastructure includes databases, servers, load balancers, CDNs, etc. I set up the infrastructure to run your software while keeping costs low and predictable.

Typically infra can consist of a managed workflow where all infrasture complexity is offloaded to the provider. This includes solutions like DigitalOcean App Platform and DigitalOcean Managed Databases. When App Platform isn't the right fit, individual virtual servers can be spun up to run the workload. Other times the backend can be entirely serverless, running on Functions (or Lambda), Spaces, etc.

A simple cloud provider like DigitalOcean is typically more than enough for the vast majority of applications. AWS only makes sense for specific scenarios, due to increased complexity and often higher costs.

## What I build

- Containerized apps that run the same in production as they do in dev
- Cloud environments on DigitalOcean, or AWS if it makes sense
- Monitoring, alerting, and backups
- Moves off aging servers or overpriced hosting
- Continuous integration and delivery pipelines that test and deploy changes automatically

## How I work

- **Boring deploys.** Push a change, tests run, it ships. This eliminates manual steps and sketchy server commands.
- **Simple as possible.** Kubernetes is fun, but most software runs great on one well-configured server or a managed platform. This is cheaper and reduces complexity.
- **Infrastructure as code.** Infrastructure defined in version control can be reviewed, recreated, and rolled back.
- **Low and predictable costs.** Correctly-sized resources and only the required capacity.
- **Plan for things to break.** Tested backups, health checks, and alerts.

## Tools I use

Docker, AWS, Terraform, Ansible, Linux, Cloudflare
