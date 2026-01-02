import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = (props) => {
  const apiKey = import.meta.env.VITE_REACT_NEWS_API_KEY;
  document.title = `${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} - NewsSpotlight`
  const [articles, setArticles] = useState([]);
  const updateNews = async () => {
    props.setProgress(10)
    // const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=${props.category}&apikey=${apiKey}`
    // let data = await fetch(url);
    // // props.setProgress(30);
    // let parsedData = await data.json()
    // // props.setProgress(70);
    // setArticles(parsedData.articles.filter(Boolean))
    const originalUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=${props.category}&apikey=${apiKey}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(originalUrl)}`;

    let data = await fetch(proxyUrl);
    let proxyResponse = await data.json();
    let parsedData = JSON.parse(proxyResponse.contents); // The actual API response is in 'contents'

    setArticles(parsedData.articles.filter(Boolean));
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews()
  }, [])
  return (
    <>
      <p className='text-center text-2xl font-extrabold p-3'>NewsSpotlight - Top {(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} Headlines</p>
      <div className="flex flex-wrap justify-center gap-10">
        {articles.map((element) => {
          return <NewsItem key={element.url} title={element.title} description={element.description} image={element.image} url={element.url} sourcename={element.source.name} publishedAt={element.publishedAt} />
        })}
      </div>
    </>
  )
}

export default News