"use client";
import { useState, useEffect } from "react";
import Table from "./components/Table";

interface DataFromApi {
  stockData: [];
}

export interface FinData {
    estimatedSalary: number;
    sharesOwned: number;
    sharesToBuy: number;
    priceToBuy: number;
    rsusOwned: number;
}

interface BackResponse {
  data: {},
  finData: FinData,
}

const nodeBackend = "http://localhost:5000";

export default function Home() {
  const [data, setData] = useState<DataFromApi>({} as DataFromApi);
  const [finData, setFinData] = useState<FinData>({} as FinData);
  const date = new Date();
  const dummyStockData = [0, 0, 0, 0, 0, 0, 0];
  const dateString = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
  const lastIndex = data.stockData ? data.stockData.length - 1 : 0;
  const mostRecentStockData = data.stockData
    ? data.stockData[lastIndex]
    : dummyStockData;
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
        })
    };
    fetchData();
  }, []);
  console.log(finData)
  return (
    <>
      <div>Today's Date:</div>
      <div>{dateString}</div>
      <div>Current Share Price:</div>
      <div>{`$${mostRecentStockData[1]}`}</div>
      <Table finData={finData} />
    </>
  );
}
