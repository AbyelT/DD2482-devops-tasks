## Docker hub

In order to create functions, you need to know where they will be stored as a container image. This could either be a local container registry or a remote registry like *Docker Hub*. For simplicity, we will use Docker hub.

You will need to create an account at Docker hub, this is free and is mostly used for pulling and pushing images to the registry. Sign up here: [Docker hub](https://hub.docker.com/)

## Building and pushing your function

Open the hello.yml file in the IDE tab. It should contain the following: 
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

Change the image tag by adding your Docker Hub username like this: ```image: <Username>/hello:latest```

Before pushing any images to the registry, you have to authenticate yourself through the Docker CLI. This is done through the following: `docker login`{{execute}}. 
Enter your Docker username and password. 

Now, you can use the three functions (build, push and deploy) to get your functions up to OpenFaas. There is a shorter command which combines all those commands: `faas-cli up -f hello.yml`{{execute}}

After a moment, you should see the following output:

```
Deployed. 202 Accepted.
URL: http://127.0.0.1:8080/function/hello
```

You just deployed your first serverless function!
You should be able to see it through the OpenFaas UI and faas-cli.
Open the OpenFaas UI again and press the "hello" function on the sidebar, it should look like this:
![hellofunction](../assets/hellofunction.png)
Alternatively, you can run the following command:
 `faas-cli list`{{execute}}.

## Invoke your function

Now you can invoke your functions using either the UI, faas-cli or curl. The faas-cli command to do it is: `echo "hello" | faas-cli invoke hello`{{execute}}. The result should look like this:
```
{"message":"Hello world!"}
```
Congratulations! You have successfully deployed a serverless function to OpenFaas, in the next step you will learn how OpenFaas handles auto-scaling of your functions. 
