const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
    async price(cmd){
       try{
        let currentdate = new Date(); 
        let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

        keyManager = new KeyManager();
        const key = keyManager.getKey();
        
        const api = new CryptoAPI(key);
        
        const priceOutputData = await api.getPriceData(cmd.coin,cmd.curr);
        
        console.log(`@${datetime}\nTop 6 Crptocurrencies are -`.blue);
        console.table(priceOutputData);

       }catch(err){
           console.error(err.message.red);
       }
    }
}

module.exports = check;