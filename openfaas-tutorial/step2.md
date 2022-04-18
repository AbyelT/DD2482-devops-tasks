## Arkade

Arkade is a portable marketplace for downloading CLIs and installing helm charts (a collection of files related to kubernetes), we will use it for downloading OpenFaas and other neccessary tools.

Install Arkade: `curl -sLS https://get.arkade.dev | sudo sh`{{execute}}. 

More details about Arkade: `arkade --help`{{execute}}.

## OpenFaas

With Arkade, we can install openfaas: 
`arkade install openfaas`{{execute}}. 
We did not have Helm3 installed so it has been installed automatically.

Installing OpenFaas will print a set of valuable commands. The first two commands will forward the Gateway of OpenFaaS service to your machine: 
- `kubectl rollout status -n openfaas deploy/gateway`{{execute}}

- `kubectl port-forward -n openfaas svc/gateway 8080:8080 &`{{execute}}

You can check all deployments related to OpenFaas with the command: `kubectl get deploy --namespace openfaas`{{execute}}. You should be able to see the PLONK stack components being deployed. PLONK is a Cloud Native stack for building applications which stands for:

- Prometheus - metrics and time-series
- Linux/Linkerd* - OS or service mesh (Linkerd is optional)
- OpenFaaS - management and auto-scaling of compute - PaaS/FaaS, a developer-friendly abstraction on top of Kubernetes. Each function or microservice is built as an immutable Docker container or OCI-format image.
- NATS - asynchronous message bus / queue
- Kubernetes - declarative, extensible, scale-out, self-healing clustering

<!-- TODO: plok stack image -->




