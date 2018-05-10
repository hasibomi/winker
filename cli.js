const fs = require('fs');

/**
 * Setup the module.
 * 
 * @param file
 * @param service
 */
const config = (file, service) => {
    fs.writeFileSync('config.json', JSON.stringify({ file: file, service: service }, 0, 2));
    console.log('Saved', 'Now run node index.js run --path=<path> --domain=<domain>');
}

/**
 * Run configuration for apache.
 * 
 * @param path
 * @param domain
 */
const runApache = (path, domain) => {
    try {
        var config = fs.readFileSync('config.json');
        config = JSON.parse(config);
    } catch (e) {
        console.log('Please run node index.js config --file=<file> --service=<service>');
    }

    const conf = `\n<VirtualHost *:80>
    DocumentRoot "${path}"
    ServerName ${domain}
    <Directory "${path}">
        Options Indexes MultiViews FollowSymlinks
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>
    AccessFileName .htaccess
</VirtualHost>`;

    fs.appendFileSync(config.file, conf);
    console.log('Done. Please resart the server.');
}

/**
 * Run configuration for nginx.
 * 
 * @param path
 * @param domain
 */
const runNginx = (path, domain) => {
    try {
        var config = fs.readFileSync('config.json');
        config = JSON.parse(config);
    } catch (e) {
        console.log('Please run node index.js config --file=<file> --service=<service>');
    }

    const conf = `\nserver {
        # Ports to listen on
        listen 80;
        listen [::]:80;

        # Server name to listen for
        server_name ${domain};

        # Path to document root
        root ${path};

        # File to be used as index
        index index.php;

        # Default server block rules
        include global/server/defaults.conf;

        # Fastcgi cache rules
        include global/server/fastcgi-cache.conf;

        location / {
            try_files $uri $uri/ /index.php?$args;
        }

        location ~ \.php$ {
            try_files $uri =404;
            include global/fastcgi-params.conf;

            # Change socket if using PHP pools or PHP 7.1
            fastcgi_pass unix:/run/php/php7.1-fpm.sock;
        }
}`;

    fs.appendFileSync(config.file, conf);
    console.log('Done. Please resart the server.');
}

module.exports = {
    config,
    runApache,
    runNginx
};