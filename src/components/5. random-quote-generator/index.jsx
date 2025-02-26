//https://api.quotable.io/quotes/random

import React, { useEffect, useState } from "react";
import "./quote.css";

const RandomQuoteGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");

  async function fetchQuote() {
    try {
      setLoading(true);
      const res = await fetch("https://api.quotable.io/quotes/random");
      const data = await res.json();
      //   console.log(data);

      if (data && data.length > 0) {
        setLoading(false);
        setQuote(data[0]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }

  if (loading) {
    return <h3>Loading Quote ! Please wait</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div className="random-quote-generator">
      <h1>Random Quote Generator</h1>
      <div className="quote-wrapper">
        <p>{quote?.author}</p>
        <p>{quote?.content}</p>
      </div>
      <button className="refresh-btn" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;
