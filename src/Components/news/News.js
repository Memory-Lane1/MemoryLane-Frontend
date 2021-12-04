import React, { useContext } from "react";
import NewsArticle from "./NewsArticle";
import {NewsContext} from './NewsContext';
import './News.css'
import { BrowserRouter as Router,  Redirect, Switch, Route, Link, useRouteMatch, useParamsLink } from 'react-router-dom'

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);


  return (
    <div>
      <h1 className="head__text">News Section</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
        	  
          		<a href={news.url} target="_blank">
            	  <NewsArticle data={news} key={news.url} />
            	</a>

            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;