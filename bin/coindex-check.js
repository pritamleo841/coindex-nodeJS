const program = require('commander');
const check = require('../commands/check');
program
    .command('price')
    .description('Check price of Coins')
    .option('--coin <type>','Add Specific coin types in CSV format','BTC,ETH,XRP,USDT,BNB,USDC,LUNA,SOL,ADA')
    .option('--curr <currency>','Change the currency','INR')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);