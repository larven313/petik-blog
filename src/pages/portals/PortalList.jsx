import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MyNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function PortalList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "Indonesia", // keyword pencarian
            sortBy: "publishedAt",
            language: "id",
            apiKey: API_KEY,
          },
        });

        setArticles(response.data.articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) {
    return (
      <>
        <MyNavbar />
        <Container className="my-5 text-center">
          <p>Memuat berita...</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <MyNavbar />
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">Daftar Berita</h2>
        <Row xs={1} md={3} lg={4} className="g-4 justify-content-center">
          {articles.map((article, index) => (
            <Col key={index}>
              <NavLink
                to={`/portal/detail/${index}`}
                className="text-decoration-none"
              >
                <Card className="shadow-sm border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={article.urlToImage || "https://picsum.photos/200"}
                    onError={(e) =>
                      (e.target.src = "https://picsum.photos/200")
                    }
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center d-flex flex-column">
                    <Card.Title className="fw-bold text-primary">
                      {article.title}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {article.description || "Deskripsi tidak tersedia"}
                    </Card.Text>
                    <small className="text-secondary">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "id-ID"
                      )}
                    </small>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default PortalList;
