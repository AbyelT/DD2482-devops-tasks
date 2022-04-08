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
`arkade install openfaas`{{execute}}
Show on the screen after installation:
`curl -SLsf https://cli.openfaas.com | sudo sh`{{execute}}
`kubectl rollout status -n openfaas deploy/gateway`{{execute}}

`kubectl port-forward -n openfaas svc/gateway 8080:8080 &`{{execute}}

`kubectl get deploy --namespace openfaas`{{execute}}

OpenFass UI (Optional):

`arkade info openfaas`{{execute}}

`PASSWORD=$(kubectl get secret -n openfaas basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode; echo)`{{execute}}
`echo $PASSWORD`{{execute}}

(port:31112,This is the Kubernetes NodePort of the external-gateway OpenFaaS service)
name: admin
passowrd: copy and paste it


# TODO: find a serverless function at the Function Store and deploy and invoke it

Commands after:
`faas-cli store deploy "ASCII Cows"`{{execute}}   

`faas-cli invoke cows`{{execute}}   

## Create our own function