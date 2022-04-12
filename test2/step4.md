## OpenFaas CLI

While it is possible to create and deploy functions through the UI, we will do it through the OpenFaas CLI (faas-cli). Install the Faas-cli: `curl -SLsf https://cli.openfaas.com | sudo sh`{{execute}}

The commands we will use in the CLI are *new*, *build*, *push* and *deploy*. You can see more commands through `faas-cli --help`{{execute}}, for more details about each command add the desired command between `faas-cli` and `--help`.

## Build and deploy the function
You start by creating a function using node: `faas-cli new hello --lang node`{{execute}}. This will create a new function from a OpenFaas template, that are stored in git repositories. The following files will be created:
- hello.yml: Information on how OpenFaas should build and deploy your function(s).
- hello/handler.js: contains your function
- hello/requirement.txt: can be used to add additional dependencies to be used by the functions
