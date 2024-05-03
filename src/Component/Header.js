import './Header.css'
const Header = (props)=>{

    return(
        <>
        <header className="header">
            <div><h1>Blog Website</h1></div>
            <div><button onClick={()=>props.onShow(true)}>Add new Blog</button></div>
        </header>
        </>
    )
}
export default Header;