import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import './News.css'
export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "6b4f14d2408d4cbc8b364302cd03795f";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=space&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .then(console.log(data))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};