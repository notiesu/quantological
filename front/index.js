const axios = require('axios');
const apiKey = 'FL3AL419PW80PMDT';

//Retrieving documentation
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo';

axios.get(url)
  .then(response => {
    const raw=response.data;
    console.log(raw['Time Series (Daily)']);
    /*
    const timeData = raw['Time Series (Daily)'];
    const dates = Object.keys(timeData);
    const prices = Object.values(timeData);
    console.log(dates);
    console.log(prices);
    */

  })
  .catch(error => {
    console.log('Error');
  })
    
  