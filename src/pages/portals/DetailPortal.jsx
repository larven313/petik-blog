import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import MyNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const DetailPortal = () => {
  const { id } = useParams(); // index berita
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ini di local
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://newsapi.org/v2/everything", {
  //         params: {
  //           q: "Indonesia",
  //           sortBy: "publishedAt",
  //           language: "id",
  //           apiKey: API_KEY,
  //         },
  //       });

  //       const data = response.data.articles?.[id];
  //       setArticle(data);
  //     } catch (err) {
  //       setError("Gagal memuat detail berita.");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  // ini di host karena cors
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/news");
        const data = response.data.articles?.[id];
        setArticle(data);
      } catch (err) {
        setError("Gagal memuat detail berita.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <MyNavbar />
      <Container className="my-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : article ? (
          <Card className="shadow-sm border-0">
            <Card.Img
              variant="top"
              src={article.urlToImage || "https://via.placeholder.com/400x200"}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="fw-bold text-primary">
                {article.title}
              </Card.Title>
              <Card.Text className="text-muted">
                {article.description}
              </Card.Text>
              <Card.Text>{article.content}</Card.Text>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Baca Selengkapnya
              </a>
            </Card.Body>
          </Card>
        ) : (
          <p>Tidak ada data berita.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default DetailPortal;
