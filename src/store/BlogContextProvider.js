import { useEffect, useState } from "react"
import BlogContext from "./blog-context"
import axios from "axios";

const BlogContextProvider = (props)=>{
//url freepik.com
    const [bloglist,setblogList] = useState([]);


    const addBlogHandler = (blog)=>{
        console.log(blog)

        axios.post('https://crudcrud.com/api/42526afd00ba4fa29699c4234350e774/blog2',blog).then((res)=>{
            // console.log(res.data, 'post res')
            setblogList([...bloglist,res.data])
        })
        
    }

    const removeBlogHandler = (id)=>{
        console.log(id)
        axios.delete(`https://crudcrud.com/api/42526afd00ba4fa29699c4234350e774/blog2/${id}`).then(()=>{

        axios.get('https://crudcrud.com/api/42526afd00ba4fa29699c4234350e774/blog2').then((res)=>{
            // console.log(res.data)
                        setblogList(res.data)
                    })
        })
      
    }
    const blogContextValue = {
        bloglist : bloglist,
        addBlogFun : addBlogHandler,
        removeBlogHandler : removeBlogHandler
    }

    useEffect(()=>{
        axios.get('https://crudcrud.com/api/42526afd00ba4fa29699c4234350e774/blog2').then((res)=>{
console.log(res.data)
            setblogList(res.data)
        })
    },[])



    return(
        <BlogContext.Provider value={blogContextValue}>{props.children}</BlogContext.Provider>
    )
}
export default BlogContextProvider;