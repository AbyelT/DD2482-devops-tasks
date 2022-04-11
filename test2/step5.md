## OpenFaas CLI

While it is possible to create and deploy functions through the UI, we will do it throuhg the OpenFaas CLI (faas-cli)

Install the Faas-cli: `curl -SLsf https://cli.openfaas.com | sudo sh`{{execute}}

The commands we will use in the CLI are new, build, push and deploy. You can see more commands through the following command: `faas-cli --help.`{{execute}}, for more details add the command between faas-cli and --help.

## Build and deploy the function
You start by creating a function using node: `faas-cli new hello --lang node`. This will create a new function from a OpenFaas template that are stored in git repositories. The following files will be created:
- hello.yml
- hello/handler.js
- hello/requirement.txt

hello.yml contains informaion on how openFaas should build and deploy your function(s), handler.py contains your function and requirements.txt can be used to add additional dependencies to be used by the functions. 


## todo
add steps about pushing to docker hub, deploying and inoking, and auto-scaling

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