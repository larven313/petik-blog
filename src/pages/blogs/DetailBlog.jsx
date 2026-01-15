import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar";

const DetailBlog = () => {
    const [post, setPost] = useState("");
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(postsResponse.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);
  return (
    <div>
        <Navbar/>
      <h3>{post.title}</h3>
      <p>
        {post.body}
      </p>
    </div>
  )
}

export default DetailBlog
