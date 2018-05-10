# winker
Setup local subdomain projects easily like never before.

### Requirements
Nodejs >= 8.0

### Commands
1. `winker config --file=<file> --service=<service>`
The command sets a configuration file for future use. Just run this command for the first time & that's it. `--file=<file>` requires the configuration file of the server. `--service=<service>` requires the server service. Currently it supports two servers: Apache, Nginx. When specifying the `service` flag, please write lowercased name of the service.

2. `winker run --path=<path> --domain=<domain>`
The command write the configuration code into the configuration file specified in `config` command. `--path=<path>` requires the project path, e.g: /path/to/laravel/public & `--domain=<domain>` requires the virtual domain name, e.g: example.test.

