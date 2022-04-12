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