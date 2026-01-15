import { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import axios from "axios";
import MyNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <MyNavbar/>

    <Container className="mt-4">
      <h2 className="text-center mb-4"> Author List</h2>
      <Row>
        {users.map((user) => (
          <Col md={6} lg={4} key={user.id} className="mb-4">
            <Card className="shadow-sm border-0 rounded-3 user-card">
              <CardBody>
                <CardTitle tag="h5" className="fw-bold text-primary">
                  {user.name}
                </CardTitle>
                <CardText className="text-muted">@{user.username}</CardText>
                <CardText>
                  <b>Email:</b> {user.email} <br />
                  <b>Phone:</b> {user.phone} <br />
                  <b>Website:</b> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a> <br />
                  <b>Company:</b> {user.company.name} <br />
                  <b>Address:</b> {user.address.street}, {user.address.city}
                </CardText>
                <Button color="primary" outline block>
                  View Profile
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Styling tambahan untuk efek hover */}
      <style>{`
        .user-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .user-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </Container>
    <Footer/>
    </div>
  );
};

export default UserCard;
