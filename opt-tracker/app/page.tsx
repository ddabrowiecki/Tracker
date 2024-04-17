"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data.body.message);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div>Hello World</div>
    </>
  );
}
