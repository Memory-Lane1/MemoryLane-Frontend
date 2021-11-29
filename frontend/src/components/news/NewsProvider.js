import React from 'react'
import { NewsContextProvider } from "./NewsContext"
import News from './News'
import './News.css'
const NewsProvider = () => {
    return (
        <NewsContextProvider>
            <News />
        </NewsContextProvider>
    )
}

export default NewsProvider