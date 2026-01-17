import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = (props) => {
  document.title = `${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} - NewsSpotlight`
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  
  const updateNews = async () => {
    props.setProgress(10)
    try {
      // Call your Vercel serverless function
      const response = await fetch(`/api/news?category=${props.category}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.statusText}`);
      }

      props.setProgress(70);
      const parsedData = await response.json();
      setArticles(parsedData.articles.filter(Boolean));
      setError(null);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Failed to load news. Please try again later.');
      setArticles([]);
    }
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews()
  }, [props.category])

  return (
    <>
      <p className='text-center text-2xl font-extrabold p-3'>
        NewsSpotlight - Top {(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} Headlines
      </p>
      {error && (
        <p className='text-center text-red-500 p-3'>{error}</p>
      )}
      <div className="flex flex-wrap justify-center gap-10">
        {articles.length > 0 ? (
          articles.map((element) => (
            <NewsItem 
              key={element.url} 
              title={element.title} 
              description={element.description} 
              image={element.image} 
              url={element.url} 
              sourcename={element.source.name} 
              publishedAt={element.publishedAt} 
            />
          ))
        ) : (
          !error && <p className='text-center p-3'>Loading news...</p>
        )}
      </div>
    </>
  )
}

export default News