import { createContext } from "react";

 
 const BlogContext = createContext({
    bloglist : [],
    addBlogFun : (blog)=>{},
    removeBlogHandler : (id)=>{}
 })
 export default BlogContext;