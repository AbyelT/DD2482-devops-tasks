With all tools and Cli prepared, we can begin the setup of OpenFaas on the kubernetes cluster. In the previous step we received a set of commands that were useful. These commands can be accessed anytime with: `arkade info openfaas`{{execute}}

The following commands will forward the Gateway of OpenFaaS service to your machine, in this case the katacoda environment
- `kubectl rollout status -n openfaas deploy/gateway`{{execute}}
- `kubectl port-forward -n openfaas svc/gateway 8080:8080 &`{{execute}}

You can check all deployments related to OpenFaas with the command: `kubectl get deploy --namespace openfaas`{{execute}}
