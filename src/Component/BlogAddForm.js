import { useContext, useState } from "react"
import './BlogAddForm.css'
import BlogContext from "../store/blog-context"


const BlogAddForm = (props)=>{
const [url,setUrl] = useState('')
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
const blogCtx = useContext(BlogContext)

const submithandler = (e)=>{
    e.preventDefault()
    // console.log(url,title,description)
    let obj = {
        id : Math.random(),
        url : url,
        title : title,
        description : description
    }
    blogCtx.addBlogFun(obj)
}
    return(
        <>
        <div className="form">
        <form onSubmit={submithandler}>
            <div className="innerFormDiv">
               <label htmlFor="url">Image URL</label>
               <input id="url" type="text" onChange={(e)=>setUrl(e.target.value)} />
            </div>
            <div className="innerFormDiv">
               <label htmlFor="title">Title</label>
               <input id="title" type="text" onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="innerFormDiv">
               <label htmlFor="description">Description</label>
               <input id="description" type="text" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <button type='submit'> Add Blog</button>
            <button type="button" onClick={()=>props.onClose(false)}> close</button>
        </form>
        </div>
        </>
    )
}
export default BlogAddForm;