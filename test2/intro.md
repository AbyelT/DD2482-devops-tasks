Welcome to this tutorial on how to *deploy serverless functions using OpenFaas*! In this tutorial you will learn how:
- To install and setup OpenFaas
- To interact with OpenFaas using the OpenFaas UI and CLI (faas-cli)
- To inspect functions from the OpenFaas UI and CLI
- To create your own Serverless function
- Functions are built, deployed and invoked
- OpenFaas handles auto-scaling of functions based on the load
- Scale to Zero 
<!-- TODO: see if we will do the last one -->

## What is OpenFaas?
OpenFaas is an open-source framework for deploying event-driven functions and microservices to Kubernetes. The benefits with using this framework include:

* Deploy Serverless functions in containers, on any cloud-service provider without being locked to a single e.g. AWS, Google cloud.
* Automatic scalability:  handles spikes in traffic and scales down when idle
* Write code in any language, package them all in the same Docker containers.

With OpenFaas, developers can automate maintenance and scaling. The time saved from this can be put on developing and deploying high-quality code faster, something that DevOps teams can benefit from.

## What are Serverless Functions?
Serverless Functions are server-side functions that is hosted and run by a third-party vendor e.g. Google cloud, AWS. The vendors takes care of infrastructure configuration, maintenance and scaling of the functions. 

## What prior experience & tools is required?
This tutorial is intended for beginners new to serverless functions. Experience with docker and Kubernetes are not required but is a bonus. The steps used are based on the [OpenFaas documentation](https://docs.openfaas.com/).

By [Abyel Tesfay](https://github.com/AbyelT) & [Chrysa Dikonimaki](https://github.com/xrisaD)