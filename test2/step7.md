## Auto-Scaling
OpenFaas automatically handles scaling by changing the amount of replicas in kubernetes with your function(s). When your functions receive more traffic than they can handle, OpenFaas will add more replicas to balance the amount traffic per replica. When the traffic decreases, the amount of replicas also decreases. 
 OpenFaaS is configured such that it will auto-scale based upon the *request per seconds metric* as measured through Prometheus.
The default minimun amount of replicas we have is *1* and the maximun amout of replicas is *20*. We can change them by setting *com.openfaas.scale.min* and *com.openfaas.scale.max*.

To see the auto-scaling in action, we will use a script which invokes your function 3000 times: `for i in {0..3000}; do echo -n "Post $i" | faas-cli invoke hello && echo; done;`{{execute}}

You should now see an increase in the function rate and eventually the amount replias increasing as a respone to the increased amount of invocations. 

The number of replicas is 

kubectl scale deployment --replicas=0 hello -n openfaas-fn
## Scale to zero

