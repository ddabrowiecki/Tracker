"use client";
import { useState, useEffect } from "react";
import Table from "./components/Table";

interface DataFromApi {
  stockData: [];
}

const nodeBackend = 'http://localhost:5000'

export default function Home() {
  const [data, setData] = useState<DataFromApi>({} as DataFromApi);
  const date = new Date();
  const dummyStockData = [0,0,0,0,0,0,0]
  const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}` 
  const lastIndex = data.stockData ? data.stockData.length - 1: 0
  const mostRecentStockData = data.stockData ? data.stockData[lastIndex]: dummyStockData

  useEffect(() => {
    const fetchData = async () => {
      await fetch(nodeBackend, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(json => setData({ stockData: json.slice(1)}))      
    };
    fetchData()
  }, []);
  console.log(mostRecentStockData)
  return (
    <>
      <div>Today's Date:</div>
      <div>{dateString}</div>
      <div>Current Share Price:</div>
      <div>{`$${mostRecentStockData[1]}`}</div>
      <Table />
    </>
  );
}
