import Article from "../../components/Article"
import Form from "../../components/Form"
import { } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <Article/>
        <br />
        <Form/>
        <Footer/>
    </div>
  )
}

export default Blog
