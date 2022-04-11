## Arkade

Arcade is a portable marketplace for downloading CLIs and installing helm charts, we will use this for downloading OpenFaas and other necessary tools.

Install arkade: `curl -sLS https://get.arkade.dev | sudo sh`{{execute}}. For more details about arkade: `arkade --help`{{execute}}

## OpenFaas

With arkade, we can install openfaas: `arkade install openfaas`{{execute}}. Installing OpenFaas gives a set of commands valuable to us. The following commands will forward the Gateway of OpenFaaS service to your machine, in this case the katacoda environment
- `kubectl rollout status -n openfaas deploy/gateway`{{execute}}
- `kubectl port-forward -n openfaas svc/gateway 8080:8080 &`{{execute}}

You can check all deployments related to OpenFaas with the command: `kubectl get deploy --namespace openfaas`{{execute}}

