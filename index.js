const yargs = require('yargs');
const fs = require('fs');

const argv = yargs.usage('Usage: $0 <cmd> [options]')
    .command('run', 'Run server insllation')
    .command('config', 'Setup configuration', {
        file: {
            describe: 'Configuration file related to the server',
            demand: true
        }
    }).demand(1).demandCommand().argv;
const command = argv._[0];

switch (command) {
    case 'config':
        fs.writeFileSync('config.json', JSON.stringify({ file: argv.file }, 0, 2));
        console.log('Saved', 'Now run node index.js run');
        break;
    
    case 'run':
        try {
            var config = fs.readFileSync('config.json');
            config = JSON.parse(config);
        } catch (e) {
            console.log('Please run node index.js config --file=<file>');
        }

        console.log(config.file);

        break;
}