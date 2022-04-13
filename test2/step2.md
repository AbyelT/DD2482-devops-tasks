## Arkade

Arkade is a portable marketplace for downloading CLIs and installing helm charts (a collection of files related to kubernetes), we will use it for downloading OpenFaas and other neccessary tools.

Install Arkade: `curl -sLS https://get.arkade.dev | sudo sh`{{execute}}. 
More details about Arkade: `arkade --help`{{execute}}.

## OpenFaas

With Arkade, we can install openfaas: 
`arkade install openfaas`{{execute}}. 
We did not have Helm3 installed so it has been installed automatically.


Installing OpenFaas will print a set of valuable commands to us. We have to run these commands to log in and access the OpenFaaS Gateway service in Kubernetes. The first two commands will forward the Gateway of OpenFaaS service to your machine, in this case the katacoda environment: 
- `kubectl rollout status -n openfaas deploy/gateway`{{execute}}

- `kubectl port-forward -n openfaas svc/gateway 8080:8080 &`{{execute}}

You can check all deployments related to OpenFaas with the command: `kubectl get deploy --namespace openfaas`{{execute}}. You should be able to see components such as *Prometheus* and *Nats* being deployed.





