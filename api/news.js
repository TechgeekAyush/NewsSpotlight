// api/news.js
export default async function handler(req, res) {
  const { category = 'general' } = req.query; // Get category from query params (defaults to 'general')
  const apiKey = import.meta.env.VITE_REACT_NEWS_API_KEY; // Access your env var
  
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }
  
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=${category}&apikey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data); // Return the data to your frontend
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}