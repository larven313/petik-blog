import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";
import heroImage from "../assets/posts-blue.svg";
import Footer from "../components/Footer";
import Article from "../components/Article";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section Full Width */}
      <div className="hero-section text-white" style={{ backgroundColor: "#0d6efd", padding: "80px 10%", width: "100%" }}>
        <Container fluid>
          <Row className="align-items-center">
            {/* Kiri: Teks dan CTA */}
            <Col md={6}>
              <h1 className="fw-bold">Selamat Datang di PeTIK</h1>
              <p className="lead">
                Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah lembaga pendidikan yang fokus pada 
                pengembangan keterampilan di bidang IT, khususnya web development dan software engineering.
              </p>
              <p>
                Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia digital bersama para mentor dan praktisi industri!
              </p>
              <Button variant="light" size="lg" href="/about" className="fw-bold text-primary">
                Pelajari Lebih Lanjut
              </Button>
            </Col>

            {/* Kanan: Gambar */}
            <Col md={6} className="text-center">
              <img 
                src={heroImage} 
                alt="Hero PeTIK" 
                className="img-fluid"
                style={{ maxHeight: "400px", width: "90%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Popular Categories Section */}
      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Popular Categories</h2>
            <p className="text-muted">Explore topics that interest you</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {["Web Development", "Data Science", "Cyber Security", "Mobile Development", "AI & ML"].map((category, index) => (
            <Col md={4} lg={2} key={index}>
              <Card className="text-center shadow-sm category-card">
                <Card.Body>
                  <Card.Title className="fw-bold">{category}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Latest Posts Section */}
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Latest Posts</h2>
            <p className="text-muted">Read the latest news and updates</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          <Article maxPost={6}/>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
