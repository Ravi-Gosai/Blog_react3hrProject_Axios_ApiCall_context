import { useContext } from "react";
import BlogContext from "../store/blog-context";
import BlogItem from "./BlogItem";
import './BlogCart.css'

const BlogCart = () => {
  const blogCtx = useContext(BlogContext);

  return (
    <>
    <div className="blogcartdiv">

        {blogCtx.bloglist.map((blog)=><BlogItem key={blog.id} blog={blog}/>)}
    </div>
    </>
  )
};
export default BlogCart;
