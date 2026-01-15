import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Search from "./Search";

const Article = ({ maxPost}) => {
    const [posts, setPosts] = useState([]);
    const [originalPosts, setOriginalPosts] = useState([]);
    const [totalPost, setTotalPosts] = useState(0);
    const [authors, setAuthors] = useState([]);
    const [limit, setLimit] = useState(maxPost);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
                const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");

                setPosts(postsResponse.data);
                setOriginalPosts(postsResponse.data);
                setAuthors(usersResponse.data);
                setTotalPosts(postsResponse.data.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const onChangeSearch = (value) => {
        if (value.trim() === "") {
            setPosts(originalPosts);
            setTotalPosts(originalPosts.length);
            return;
        }

        const filteredData = originalPosts.filter((post) =>
            post.title.toLowerCase().includes(value.toLowerCase())
        );
        setPosts(filteredData);
        setTotalPosts(filteredData.length);
    };

    return (
        <Container className="mt-4">
            <Search onSearchChange={onChangeSearch} totalPost={totalPost} />
            <Row className="g-4">
                {posts.slice(0, limit).map((post) => {
                    const author = authors.find((user) => user.id === post.userId);
                    return (
                        <Col key={post.id} md={6} lg={4}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        <NavLink to={`/posts/${post.id}`} className="text-decoration-none">
                                            {post.title}
                                        </NavLink>
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        <small>
                                            Author: <strong>{author ? author.name : "Unknown"}</strong> <br />
                                            Date: {post.date || "N/A"} <br />
                                            Tags: {post.tags || "N/A"}
                                        </small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Article;
