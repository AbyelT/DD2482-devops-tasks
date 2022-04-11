Arcade is a portable marketplace for downloading CLIs and installing helm charts, we will use this for downloading OpenFaas and other necessary tools.

Install arkade: `curl -sLS https://get.arkade.dev | sudo sh`{{execute}}

For more details about arkade: `arkade --help`{{execute}}

With arkade, we can install openfaas with: `arkade install openfaas`{{execute}}

Show on the screen after installation:
`curl -SLsf https://cli.openfaas.com | sudo sh`{{execute}}