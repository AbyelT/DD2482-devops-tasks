## OpenFaas CLI

While it is possible to create and deploy functions through the UI, we will do it throuhg the OpenFaas CLI (faas-cli)

Install the Faas-cli: `curl -SLsf https://cli.openfaas.com | sudo sh`{{execute}}

The commands we will use in the CLI are new, build, push and deploy. You can see more commands through the following command: `faas-cli --help.`{{execute}}, for more details add the command between faas-cli and --help.

## Build and deploy the function
You start by creating a function using node: `faas-cli new hello --lang node`. This will create a new function from a OpenFaas template that are stored in git repositories. The following files will be created:
- hello.yml: informaion on how openFaas should build and deploy your function(s)
- hello/handler.js: your function
- hello/requirement.txt: can be used to add additional dependencies to be used by the functions
