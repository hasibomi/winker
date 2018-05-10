# winker
Setup local subdomain projects easily like never before.

### Requirements
Nodejs >= 8.0

### Commands
1. `winker config --file=<file> --service=<service>`
The command sets a configuration file for future use. Just run this command for the first time & that's it. `--file=<file>` requires the configuration file of the server. `--service=<service>` requires the server service. Currently it supports two servers: Apache, Nginx. When specifying the `service` flag, please write lowercased name of the service.

2. `winker run --path=<path> --domain=<domain>`
The command write the configuration code into the configuration file specified in `config` command. `--path=<path>` requires the project path, e.g: /path/to/laravel/public & `--domain=<domain>` requires the virtual domain name, e.g: example.test.

### License
MIT License

Copyright (c) 2018 Hasibur Rahman Omi <me@hasibomi.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
