// /api/news.js - Vercel Serverless Function
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  try {
    const apiKey = process.env.GNEWS_API_KEY;
    
    if (!apiKey) {
      console.error('GNEWS_API_KEY environment variable is not set');
      return res.status(500).json({ error: 'API key not configured' });
    }

    const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=${category}&apikey=${apiKey}`;

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const data = await response.json();

    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}