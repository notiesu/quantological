import { useState } from 'react';
import axios from 'axios';

const apiKey = 'FL3AL419PW80PMDT';
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
const useStockData = () => {
    const [stockData, setStockData] = useState(null);
    const fetchData = async (stockName) => {
        try {
            const response = await axios.get(url + stockName + '&apikey=' + 'demo');
            const raw = response.data;
            setStockData(raw['Time Series (Daily)']);
            } catch (error) {
            setStockData(null);
        }
    };
    return {stockData, fetchData};
}

export default useStockData;