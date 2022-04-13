
OpenFaas automatically handles scaling by changing the amount replicas in kubernetes with your function(s). When your functions receive more traffic than they can handle, OpenFaas will add more replicas to balance the amount traffic per replica. When the traffic decreases, the amount of replicas also decreases. 

For tracking metrics on your deployed functions, OpenFaas uses [Prometheus](https://prometheus.io/docs/introduction/overview/), an open-source tool for monitoring and collecting metrics as time-series data. To visualise the metrics into an useful graph, [Grafana](https://grafana.com/oss/grafana/) is used to turn the metrics into an useful dashboard.

Follow these steps to deploy and access Grafana:
1. Make Grafana run in the kubernetes cluster: `kubectl -n openfaas run --image=stefanprodan/faas-grafana:4.6.3 --port=3000 grafana`{{execute}} 
2. Then expose Grafana with a NodePort: `kubectl -n openfaas expose pod grafana --type=NodePort --name=grafana`{{execute}}
 <!-- TODO: we should know the Grafana port  -->
3. Then get the port which Grafana was exposed to: `GRAFANA_PORT=$(kubectl -n openfaas get svc grafana -o jsonpath="{.spec.ports[0].nodePort}") | echo $GRAFANA_PORT`{{execute}}
4. Open the Grafana tab.
5. When the dashboard is visible, authenticate yourself with the credentials admin/admin. You should now see the Grafana dashboard.

## Grafana Dashboard
The dashboard displays useful data such as the function rate, the total requests and the *replica scaling* (the amount of active replicas). To see the auto-scaling in action, we will use a script which invokes your function atleast 10000 times: `for i in {0..10000}; do echo -n "Post $i" | faas-cli invoke hello && echo; done;`{{execute}}

You should now see an increase in the function rate and eventually the amount replias increasing as a respone to the increased amount of invocations. 
<!-- TODO: add image here -->

<!-- TODO: Also Scale to zero -->






