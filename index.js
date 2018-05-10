const yargs = require('yargs');
const fs = require('fs');

const cli = require('./cli');

const argv = yargs.usage('Usage: $0 <cmd> [options]')
    .command('run', 'Run server insllation', {
        path: {
            describe: 'Path of your project',
            demand: true
        },
        domain: {
            describe: 'Domain of the project',
            demand: true
        }
    })
    .command('config', 'Setup configuration', {
        file: {
            describe: 'Configuration file related to the server',
            demand: true
        },
        service: {
            describe: 'Specify the server service. Example: apache or nginx',
            demand: true
        }
    }).demand(1).demandCommand().argv;
const command = argv._[0];

switch (command) {
    case 'config':
        cli.config(argv.file, argv.service);
        break;
    
    case 'run':
        try {
            var config = fs.readFileSync('config.json');
            config = JSON.parse(config);
        } catch (e) {
            console.log('Please run node index.js config --file=<file> --service=<service>');
        }

        if (config.service === 'apache') {
            cli.runApache(argv.path, argv.domain);
        } else if (config.service === 'nginx') {
            cli.runNginx(argv.path, argv.domain);
        }

        break;
}