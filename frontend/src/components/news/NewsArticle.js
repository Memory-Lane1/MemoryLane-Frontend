import React,{useState} from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './News.css'

function NewsArticle({ data }) {
  console.log(data.url)
  const imgsrc= data.urlToImage!=null? data.urlToImage:"./img-not-found.jpg";
  return (
    <div className="news">
      
       <Card style={{ width: '18rem' }} className='newsCards'>
          <Card.Img variant="top" src={imgsrc} />
          <Card.Body>
              <Card.Title className="news__title">{data.title}</Card.Title>
              <Card.Text className="news__author">
                {data.author}
              </Card.Text>
              {/* <Card.Text className="news__published">
                {data.publishedAt}
              </Card.Text> */}
              {/* <Card.Text className="news__source">
                {data.source.name}
              </Card.Text> */}
              <Card.Text className="news__desc">
                
                {data.description?(data.description.length<=60?data.description:data.description.slice(0,60)+'...'):"No Associated Text"}
              </Card.Text>
              {/* <Button  variant="primary" >{Direction}</Button> */}
          </Card.Body>
      </Card> 
    </div>
  );
}

export default NewsArticle;