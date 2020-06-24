const domains = require('/home/username/.local/share/open-by-domain/config.json');

const mockedUri = 'https://stackoverflow.com/';
console.log(process.argv);
const uri = process.argv[2] ||  mockedUri;

const Url = require('url');
const url = Url.parse(uri);
if(!url.host){
  console.error('Url has not provided');
  process.exit(1);
}

const program = domains[url.host] || domains['default'];
const command = `${program} "${uri}"`;
console.log(command);
require("child_process").exec(command);

