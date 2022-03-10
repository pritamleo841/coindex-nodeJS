const axios = require("axios");
const colors = require("colors");
const { ToWords } = require('to-words');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }

  async getPriceData(coinOption, currOption) {
    try {

      //Formatter for currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currOption
      });
      const res = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=4b4f3fc755c6e611f9aa6e7a79b8180112974d9c&ids=BTC,ETH,XRP,USDT,BNB,USDC,LUNA,SOL,ADA&convert=INR&per-page=100&page=1');

      let structuredTable = [];
      const toWords = new ToWords();
      res.data.filter((coin)=>coin.rank<=6).forEach((coin) => {
                structuredTable.push({
                  Rank:`${coin.rank}`,
                  Coin:`${coin.symbol} (${coin.name})`,
                  Price:`${formatter.format(coin.price)}`,
                  Price:`${toWords.convert(coin.price, { currency: true, ignoreDecimal: true })}`
                });
      });

      return structuredTable;

    } catch (err) {
      handleAPIError(err);
    }
  }
}
function handleAPIError(err) {
  if (err.response.status === 401)
    throw new Error('Your API Key is invalid - Get a valid Key@https://api.nomics.com');
  else if (err.response.status === 404)
    throw new Error('Your API is not responding');
  else
    throw new Error('Something is not working,please check!');
}
module.exports = CryptoAPI;
