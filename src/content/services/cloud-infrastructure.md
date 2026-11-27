---
title: Cloud Infrastructure
summary: Secure, reliable, and durable deployments with predictable costs.
description: Cloud infrastructure and DevOps in Bonners Ferry, Idaho — CI/CD, containers, and hosting by Gilbert Yoder.
order: 2
icon: cloud
---

Infrastructure is where your software runs: databases, servers, load balancers, CDNs, and so on. I set it up so your software stays online while keeping costs low and predictable.

Often the simplest option is a managed platform, where the provider handles most of the complexity. DigitalOcean App Platform and Managed Databases are good examples. When that isn't the right fit, the workload can run on individual virtual servers. Other times the backend can be entirely serverless, running on Functions (or Lambda), Spaces, and similar services.

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

DigitalOcean, Docker, AWS, Terraform, Ansible, Linux, Cloudflare
