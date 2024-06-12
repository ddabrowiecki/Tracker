"use client";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import Chart from "./components/Chart";
import PriceSlider from "./components/Slider";
import EnableSliderButton from "./components/EnableSliderButton";
import UpdatedPrice from "./components/UpdatedPrice";
import FinancialInfoModal from "./components/FinancialInfoModal";
import Link from "next/link";
import Image from "next/image";
import refreshIcon from "../public/refresh-svgrepo-com.svg";

type StockData = string[];

interface DataFromApi {
  stockData: StockData[];
}

export interface FinData {
  rsusOwned: number;
  nsosOwned: number;
  isosOwned: number;
  isoPurchasePrice: number;
  estimatedSalary: number;
  isoSharesToBuy: number;
  nsoSharesToBuy: number;
  isoSharesToBuyPurchasePrice: number;
  nsoSharesToBuyPurchasePrice: number;
  filingStatus: string;
}

export interface GraphData {
  date: string;
  price: number;
}

const nodeBackend = "https://reddit-tracker.onrender.com";

export default function Home() {
  const [data, setData] = useState<DataFromApi>({} as DataFromApi);
  const [finData, setFinData] = useState<FinData>({} as FinData);
  const [stockPrice, setStockPrice] = useState(0);
  const [staticStockPrice, setStaticStockPrice] = useState(0);
  const [priceSlider, setPriceSlider] = useState(0);
  const [toggleSlider, setToggleSlider] = useState(false);
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [updatedPrice, setUpdatedPrice] = useState<number>(stockPrice);
  const [modalOpen, setModalOpen] = useState<boolean>(true);

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

  const closeModal = (finData: FinData) => {
    setFinData(finData);
    setModalOpen(false);
  };

  return modalOpen ? (
    <FinancialInfoModal open={modalOpen} closeModal={closeModal} />
  ) : (
    <>
      <div className="flex jc-center">
        <h2 className="main-title font-kadoku font-60">Reddit Tracker</h2>
      </div>
      <div className="top-container flex space-around">
        <div className="info-container">
          <div className="font-mouldyCheese normal-font ">
            <div>Today's Date:</div>
            <div className="font-white">{dateString}</div>
            <div className="current-share-price mt-20">
              Current Share Price:
            </div>
            <div className="font-white">{`$${staticStockPrice.toFixed(
              2
            )}`}</div>
          </div>
          <div className="reload-container mt-10">
            <div
              className="reload-button"
              onClick={() => window.location.reload()}
            >
              <Image
                priority
                className="reload-icon"
                src={refreshIcon}
                alt="Re-enter Information"
              />
              <p className="font-white ml-10 font-mouldyCheese">
                Re-enter Information
              </p>
            </div>
          </div>
        </div>
        <Chart data={createGraphDataObject(graphData)} />
      </div>
      <div className="slider-container flex ai-flex-end flex-column width-95">
        <EnableSliderButton handleEnableSlider={handleEnableSlider} />
        <PriceSlider
          priceSliderValue={priceSlider}
          handlePriceSlider={handlePriceSlider}
          toggleSlider={toggleSlider}
        />
      </div>
      <div className="flex jc-flex-end width-95">
        {toggleSlider && (
          <UpdatedPrice
            updatedPrice={updatedPrice}
            recalculate={handleCalculation}
            reset={resetSlider}
          />
        )}
      </div>
      {finData !== undefined && (
        <Table finData={finData} stockPrice={stockPrice} />
      )}
      <div className="flex space-around bottom-text">
        <div>
          <Link href="/terms-of-use">Terms Of Use</Link>
        </div>
        <div className="github-link font-white">
          <Link href="http://www.github.com/ddabrowiecki/Tracker">
            View project on GitHub
          </Link>
        </div>
      </div>
    </>
  );
}
