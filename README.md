# coindex-nodeJS

The Basic Idea behind this project is to show top 6 cyrptocurry informations using NodeJs CLI features.

>>coindex key --h
>>Usage: coindex-key [options] [command]

Options:
  -h, --help      display help for command

Commands:
  set             Set API key -- get at https://nomics.com/
  show            Show API key
  remove          Remove API key
  help [command]  display help for command
  
>>$ coindex key set

Hi All! Welcome to Coindex -CLI
? Enter API Key https://nomics.com/  abcdef
API Key Set

>> $ coindex key show
Hi All! Welcome to Coindex -CLI
Current API Key :  abcdef

>>coindex price -h
Usage: coindex [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  key             Manage API key -- https://nomics.com/
  check           Check Coin Price Information
  help [command]  display help for command
  
  
  >>$ coindex check price

Hi All! Welcome to Coindex -CLI
@10/3/2022 @ 15:23:31
Top 6 Crptocurrencies are -
┌─────────┬──────┬──────────────────────┬──────────────────────────────────────────────────────────────────────────┐
│ (index) │ Rank │         Coin         │                                  Price                                   │
├─────────┼──────┼──────────────────────┼──────────────────────────────────────────────────────────────────────────┤
│    0    │ '1'  │   'BTC (Bitcoin)'    │ 'Twenty Nine Lakh Eighty Thousand Nine Hundred Ninety Three Rupees Only' │
│    1    │ '2'  │   'ETH (Ethereum)'   │  'One Lakh Ninety Seven Thousand Eight Hundred Eighty Six Rupees Only'   │
│    2    │ '3'  │   'USDT (Tether)'    │                        'Seventy Six Rupees Only'                         │
│    3    │ '4'  │ 'BNB (Binance Coin)' │      'Twenty Eight Thousand Six Hundred Seventy Three Rupees Only'       │
│    4    │ '5'  │  'USDC (USD Coin)'   │                        'Seventy Six Rupees Only'                         │
│    5    │ '6'  │    'LUNA (Terra)'    │            'Seven Thousand Four Hundred Nineteen Rupees Only'            │
└─────────┴──────┴──────────────────────┴──────────────────────────────────────────────────────────────────────────┘
