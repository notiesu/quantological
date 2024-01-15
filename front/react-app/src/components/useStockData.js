import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = 'FL3AL419PW80PMDT';
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=';

const useStockData = () => {
    const [stockData, setStockData] = useState(null);
    const fetchData = async (stockName) => {
        try {
            const response = await axios.get(url + apiKey);
            setStockData(response.data);
        } catch (error) {
            setStockData('Error');
        }
    }
    return {stockData, fetchData};
}