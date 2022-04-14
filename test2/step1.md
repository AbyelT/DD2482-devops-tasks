
We start by launching the Kubernetes cluster:
 `launch.sh`{{execute}}

We can check that we have kubectl installed: `kubectl version`{{execute}}

You can verify that the Kubernetes cluster is up and running with the commands below:

- Get addresses of the master and services: `kubectl cluster-info`{{execute}}

- Get info about the cluster and its workers: `kubectl get nodes`{{execute}}

