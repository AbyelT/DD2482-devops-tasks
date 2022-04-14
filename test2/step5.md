## Docker hub

In order to create functions, you need to know where they will be stored as a container image. This could either be a local container registry or a remote registry like *Docker Hub*. For simplicity, we will use Docker hub.

You will need to create an account at Docker hub, this is free and is mostly used for pulling and pushing images to the registry. Sign up here: [Docker hub](https://hub.docker.com/)

## Building and pushing your function

The hello.yml file contains the following: 
```
version: 1.0
provider:
  name: openfaas
  gateway: http://127.0.0.1:8080
functions:
  hello:
    lang: node
    handler: ./hello
    image: hello:latest
```

Switch to the code editor on the next tab and change the image tag by adding your Docker Hub username like this: ```image: <Username>/hello:latest```

Before pushing any images to the registry, you have to authenticate yourself through the Docker CLI. T
his is done through the following: `Docker login`{{executable}}. 
Enter your Docker username and password. 

Now, you can use the three functions (build, push and deploy) to get your functions up to OpenFaas. There is a shorter command which combines all those commands: `faas-cli up -f hello.yml`{{executable}}

After a moment, you should see the following output:

```
Deployed. 202 Accepted.
URL: http://127.0.0.1:8080/function/hello
```
## Invoke your function

Now you can invoke your functions using either the UI, faas-cli or curl. The faas-cli command is: `echo "hello" | faas-cli invoke hello`{{executable}}. The result should look like this:
```
{"status":"done"}
```
Congratulations! You have successfully deployed a serverless function to OpenFaas, in the next step you will learn how OpenFaas handles auto-scaling of your functions. 

