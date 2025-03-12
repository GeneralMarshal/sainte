import "../styles/AdminBlog.css"
import Blog from "../components/Blog.js";
import Layout from "../components/Layout";

export default function AdminBlog(){
    return(
        <div>
            <Layout activePage="blog">
                <Blog />
            </Layout>
        </div>
    )
}