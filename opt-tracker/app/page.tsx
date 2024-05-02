"use client";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import Chart from "./components/Chart";
import PriceSlider from "./components/Slider";
import EnableSliderButton from "./components/EnableSliderButton";
import UpdatedPrice from "./components/UpdatedPrice";

type StockData = string[];

interface DataFromApi {
  stockData: StockData[];
}

export interface FinData {
  estimatedSalary: number;
  sharesOwned: number;
  sharesToBuy: number;
  priceToBuy: number;
  rsusOwned: number;
}

export interface GraphData {
  date: string;
  price: number;
}

const nodeBackend = "http://localhost:5000";

export default function Home() {
  const [data, setData] = useState<DataFromApi>({} as DataFromApi);
  const [dataIsLoaded, setDataIsLoaded] = useState<boolean>(false);
  const [finData, setFinData] = useState<FinData>({} as FinData);
  const [stockPrice, setStockPrice] = useState(0);
  const [staticStockPrice, setStaticStockPrice] = useState(0);
  const [priceSlider, setPriceSlider] = useState(0);
  const [toggleSlider, setToggleSlider] = useState(false);
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [updatedPrice, setUpdatedPrice] = useState<number>(stockPrice);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(nodeBackend, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setData({ stockData: json.data.slice(1) });
          setFinData({
            estimatedSalary: json.finData.estimatedSalary,
            sharesOwned: json.finData.sharesOwned,
            sharesToBuy: json.finData.sharesToBuy,
            priceToBuy: json.finData.priceToBuy,
            rsusOwned: json.finData.rsusOwned,
          });
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.stockData) {
      getStockPrice(data.stockData);
      makeGraphData(data.stockData);
    }
  }, [data]);

  const makeGraphData = (stockData: StockData[]) => {
    const graph: GraphData[] = [];
    stockData.map((entry) => {
      graph.push({
        date: entry[0],
        price: parseFloat(entry[1]),
      });
    });
    setGraphData(graph);
  };

  const createGraphDataObject = (graphData: GraphData[]) => {
    return {
      labels: graphData.map((data) => data.date),
      datasets: [
        {
          label: "RDDT Progress Over Time",
          data: graphData.map((data) => data.price),
        },
      ],
    };
  };

  const date = new Date();
  const dateString = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;

  const getStockPrice = (stockData: StockData[]) => {
    const lastIndex = stockData.length - 1;
    const mostRecentStockData = stockData[lastIndex];
    const price = parseFloat(mostRecentStockData[1]);
    setStaticStockPrice(price);
    setStockPrice(price);
    setPriceSlider(price);
  };

  const handlePriceSlider = (price: number) => {
    setPriceSlider(price);
  };

  const handleEnableSlider = () => {
    setToggleSlider(!toggleSlider);
  };

  const handleCalculation = () => {
    setStockPrice(priceSlider);
  };

  const resetSlider = () => {
    setStockPrice(staticStockPrice);
    setPriceSlider(staticStockPrice);
  };

  return (
    <>
      <div className="top-container flex space-between">
        <div className="info-container">
          <div>Today's Date:</div>
          <div>{dateString}</div>
          <div>Current Share Price:</div>
          <div>{`$${staticStockPrice.toFixed(2)}`}</div>
        </div>
        <Chart data={createGraphDataObject(graphData)} />
      </div>
      <EnableSliderButton handleEnableSlider={handleEnableSlider} />
      <PriceSlider
        priceSliderValue={priceSlider}
        handlePriceSlider={handlePriceSlider}
        toggleSlider={toggleSlider}
      />
      {toggleSlider && (
        <UpdatedPrice
          updatedPrice={updatedPrice}
          recalculate={handleCalculation}
          reset={resetSlider}
        />
      )}
      <Table finData={finData} stockPrice={stockPrice} />
    </>
  );
}
