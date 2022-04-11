Welcome to this tutorial on how to *deploy serverless functions using OpenFaas*! In this tutorial you will learn how:
- To install and setup OpenFaas
- To interact with OpenFaas using the OpenFaas CLI (Faas-cli)
- To inspect functions from the OpenFaas CLI alternatively UI
- Functions are Built, deployed and invoked
- OpenFaas handles auto-scaling of functions based on load
## What is OpenFaas?
OpenFaas is an open-source framework for deploying event-driven functions and microservices to Kubernetes. You can deploy Serverless functions (server-side functions that run on third-party vendors) on any cloud without being locked to a single cloud-service provider e.g. AWS, Google cloud, Azure.

## What prior experience & tools is required?
This tutorial is intended for beginners new to serverless functions. Experience with docker and kubernetes are not required but is a bonus. The CLI and steps used here are based on the [OpenFaas documentation](https://docs.openfaas.com/).