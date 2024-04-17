"use client";

import { useState, useEffect } from "react";

const sheet = 'https://docs.google.com/spreadsheets/d/1_xsDfFHZSgGANCFFVZGdPMnaCLlDHIB7xi4XYvZz7yQ/gviz/tq?tqx=out:json'
const nodeBackend = 'http://localhost:5000'

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(nodeBackend, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data)
    };
    fetchData()
  }, []);

  // console.log(data);

  return (
    <>
      <div>Hello World</div>
    </>
  );
}
