## Docker hub

In order to create functions, you need to know where it wil be stored as a container image. This could either be a local container registry or a remote registry like Docker Hub. For the sake of simplicity we will use Docker hub.

You will need to create an account at Docker hub, this is free and is mostly used for pulling and pushing images to the registry. Sign up here: [Docker hub](https://hub.docker.com/)

# Building and pushing your function

The hello.yml file contains the following: 
```
version: 1.0
provider:
  name: openfaas
  gateway: http://127.0.0.1:8080 
functions:
  helloworld:
    lang: node
    handler: ./hello
    image: helloworld:latest
```

Change the image tag by adding your Docker Hub username like this: ```image: <Username>/helloworld:latest```

Before pushing any images to the registry, you have to authenticate yourself through the Docker CLI. This is done through the following: `Docker login`{{executable}}. Enter your Docker username and password when the prompt ask you for it.

Now, you can use the three functions (build, push and deploy) to get your functions up to OpenFaas. There is a shorter command which combines all these three: `faas-cli up -f helloworld.yml`{{executable}}

After a moment, you should see the following URL in the terminal:

*put output here*

now you can invoke your functions using either the UI, faas-cli or curl. The faas-cli command is: `faas-cli invoke -f helloworld.yml`

Congratulations! You have successfully deployed a serverless function to OpenFaas

