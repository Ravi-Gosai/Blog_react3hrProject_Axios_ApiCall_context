
import { useContext } from 'react';
import './BlogItem.css'
import BlogContext from '../store/blog-context';


const BlogItem = (props)=>{
const blogCtx = useContext(BlogContext)
    // console.log(props.blog.url)
    return(
        <>
        <div className='blogitem'>
        <h3>{props.blog.title}</h3>
        <img className="img" src={props.blog.url}/>
        <p>{props.blog.description}</p>
        <div>
            <button  className='btnblog'>edit</button>
            <button onClick={()=> blogCtx.removeBlogHandler(props.blog._id)} className='btnblog'>remove</button>
        </div>
        
        </div>
        </>

    )
}
export default BlogItem;