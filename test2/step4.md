While it is possible to create and deploy functions through the UI, we will do it through the OpenFaas CLI (faas-cli). 
With OpenFaas installed and setup, you are now ready to write your first serverless functions and deploy them to kubernetes!
## Generate function from template
You start by creating a serverless function using node: `faas-cli new hello --lang node`{{execute}}. 

This will create a new function from a OpenFaas template, that are stored in git repositories. The following files will be created:
- hello.yml: Information on how OpenFaas should build and deploy your function(s).
- hello/handler.js: contains your function
- hello/requirement.txt: can be used to add additional dependencies to be used by the functions

<!-- TODO: add screenshots from the VS code, open the handler.js and explain -->

<!-- TODO: inspect the fuctnion from the UI and cli -->
