import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useStockData from '../components/useStockData';
import PriceGraph from '../components/PriceGraph';
import '../styles/StockDetail.css';

const StockDetailPage = () => {
    const {stockName} = useParams();
    const {stockData, fetchData} = useStockData();
    useEffect(() => {
        fetchData(stockName)
    }, [stockName]);

    return (
        //place components here
        <div>
        <div className="graph-box">
            <PriceGraph info={stockData} title={stockName} option='1. open' className="graph"/>
        </div>
        <div className="news-box">
            <h1>Put news div here</h1>
        </div>
        </div>
    );
}

export default StockDetailPage;