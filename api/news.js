export default async function handler(req, res) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=Indonesia&sortBy=publishedAt&language=id&apiKey=${process.env.NEWS_API_KEY}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
