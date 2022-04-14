With OpenFaas installed and setup, you are now ready to write your first serverless functions and deploy them to kubernetes!
While it is possible to create and deploy functions through the UI, we will do it through the OpenFaas CLI (faas-cli).

## Generate function from template
You start by creating a serverless function using node: `faas-cli new hello --lang node`{{execute}}. 

This will create a new function from a OpenFaas template, that are stored in git repositories. The following files will be created:
- hello.yml: Information on how OpenFaas should build and deploy your function(s).
- hello/handler.js: contains your function
- hello/requirement.txt: can be used to add additional dependencies to be used by the functions


Open the IDE tab. You should be able to see the files mentioned above. The handler.js in the directory ```/hello```  will look like this:
```
"use strict"

module.exports = async (context, callback) => {
    return {status: "done"}
}
```
It is a serverless function which returns a JSON object with the status set to done everytime it is called.
Let's replace the returned object with the following:

```
return {message: "Hello world!"}
```
You can modify it to do whatever you want. 😊
