Clone the example repository with the command 

`kubectl version`{{execute}}

blah blah

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

CLI:
`faas-cli login --password $PASSWORD`{{execute}}  

Commands after:
`faas-cli store deploy "ASCII Cows"`{{execute}}   

`echo "hey" | faas-cli invoke cows`{{execute}}   

## TODO: Create our own function
TODO: create a local registry

## Auto-scaling

<!-- Prometheus:

`kubectl patch service prometheus --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/type","value":"NodePort"}]'`{{execute}} 

`kubectl patch service prometheus --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/ports/0/nodePort", "value":31120}]'`{{execute}}   

Alert Manager:

`kubectl patch service alertmanager --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/type","value":"NodePort"}]'`{{execute}}

`kubectl patch service alertmanager --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/ports/0/nodePort", "value":31121}]'`{{execute}} -->

Grafana:

`kubectl -n openfaas run --image=stefanprodan/faas-grafana:4.6.3 --port=3000 grafana`{{execute}} 

`kubectl -n openfaas expose pod grafana --type=NodePort --name=grafana`{{execute}} 

`kubectl port-forward pod/grafana 3000:3000 -n openfaas`{{execute}} 


The default credentials are admin/admin.



## Command and texts

With all tools and Cli prepared, we can begin the setup of OpenFaas on the kubernetes cluster. In the previous step we received a set of commands that were useful. These commands can be accessed anytime with: `arkade info openfaas`{{execute}}


OpenFass UI (Optional):

`arkade info openfaas`{{execute}}

`PASSWORD=$(kubectl get secret -n openfaas basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode; echo)`{{execute}}
`echo $PASSWORD`{{execute}}

(port:31112,This is the Kubernetes NodePort of the external-gateway OpenFaaS service)
name: admin
passowrd: copy and paste it

CLI:
`faas-cli login --password $PASSWORD`{{execute}}  

Commands after:
`faas-cli store deploy "ASCII Cows"`{{execute}}   

`faas-cli invoke cows`{{execute}}   

## TODO: Create our own function
TODO: create a local registry

## Auto-scaling

Prometheus:

`kubectl patch service prometheus --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/type","value":"NodePort"}]'`{{execute}} 

`kubectl patch service prometheus --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/ports/0/nodePort", "value":31120}]'`{{execute}}   

Alert Manager:

`kubectl patch service alertmanager --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/type","value":"NodePort"}]'`{{execute}}

`kubectl patch service alertmanager --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/ports/0/nodePort", "value":31121}]'`{{execute}}

Grafana:

`kubectl -n openfaas run --image=stefanprodan/faas-grafana:4.6.3 --port=3000 --generator=run-pod/v1 grafana`{{execute}} 

`kubectl -n openfaas expose pod grafana --type=NodePort --name=grafana`{{execute}} 

`kubectl patch service grafana --namespace=openfaas --type='json' --patch='[{"op": "replace", "path": "/spec/ports/0/nodePort", "value":31122}]'`{{execute}} 


The default credentials are admin/admin.