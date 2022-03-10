#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const colors = require('colors');

program
    .version(pkg.version)
    .command('key',"Manage API key -- https://nomics.com/")
    .command('check','Check Coin Price Information')
    .parse(process.argv);


console.log('\nHi All! Welcome to Coindex -CLI'.yellow);