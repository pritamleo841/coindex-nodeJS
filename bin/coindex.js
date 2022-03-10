#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const colors = require('colors');

program
    .version(pkg.version)
    .command('key',"Manage API key -- https://nomics.com/")
    .command('check','Check Coin Price Information')
    .parse(process.argv);

let currentdate = new Date(); 
let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

console.log('\nHi All! Welcome to Coindex -CLI'.yellow);
console.log(`@${datetime}\nTop 6 Crptocurrencies are -`.blue);