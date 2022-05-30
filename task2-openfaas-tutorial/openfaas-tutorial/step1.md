
Start by launching the Kubernetes cluster:
 `launch.sh`{{execute}}

You can check that the latest Kubernetes Command-line tool (kubectl) is installed: `kubectl version`{{execute}}

Verify that the Kubernetes cluster is up and running with the commands below:

- Get addresses of the master and services: `kubectl cluster-info`{{execute}}

- Get info about the cluster and its workers: `kubectl get nodes`{{execute}}

