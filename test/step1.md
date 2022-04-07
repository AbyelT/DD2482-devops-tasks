Clone the example repository with the command 

`kubectl version`{{execute}}

blah blah

`minikube version`{{execute}}

`minikube start --wait=false`{{execute}}

`kubectl cluster-info`{{execute}}

`kubectl get nodes`{{execute}}


Install arkade:
`curl -sLS https://get.arkade.dev | sudo sh`{{execute}}

arkade --help

Install openfaas:

`curl -SLsf https://cli.openfaas.com | sudo sh`{{execute}}


`kubectl rollout status -n openfaas deploy/gateway`{{execute}}

`kubectl port-forward -n openfaas svc/gateway 8080:8080 --wait=false`{{execute}}