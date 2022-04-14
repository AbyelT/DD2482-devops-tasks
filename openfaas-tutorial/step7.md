OpenFaas automatically handles scaling by changing the amount of replicas in Kubernetes with your function(s). When your functions receive more traffic than they can handle, OpenFaas will add more replicas to balance the load per replica. When the traffic decreases, the amount of replicas also decreases. OpenFaaS is configured such that it will auto-scale based upon the *request per seconds metric* as measured through Prometheus.
The default minimum and maximum number of replicas is *1* and *20*. We can change them by setting *com.openfaas.scale.min* and *com.openfaas.scale.max*, for this tutorial we use the default values.

To see the auto-scaling in action, we will use a script which invokes your function 3000 times: `for i in {0..2999}; do echo -n "Post $i" | faas-cli invoke hello && echo; done;`{{execute}}. You should now see an increase in the function rate and eventually the amount replicas increasing as a response to the increased amount of invocations. 

After being invoked a lot of times, in our case over 2000, the number of replicas is stabilized to 20 which is the max number of replicas we can have:
![grafana-autoscaling2](/assets/grafana-autoscaling2.PNG)

Finally, after 3000 invocations we can see the amount of replicas decreasing back to 1, because the invocations have stopped:
![grafana-autoscaling3](/assets/grafana-autoscaling3.PNG)


