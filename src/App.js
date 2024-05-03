
import { useState } from 'react';
import './App.css';
import BlogAddForm from './Component/BlogAddForm';
import Header from './Component/Header';
import BlogContextProvider from './store/BlogContextProvider';
import BlogCart from './Component/BlogCart';

function App() {

  const [blogFormShow,setBlogFormShow] = useState(false)
  return (
    <>
    <BlogContextProvider>
    <Header onShow={setBlogFormShow}></Header>
    {blogFormShow && <BlogAddForm onClose={setBlogFormShow} />}
    <BlogCart></BlogCart>
    </BlogContextProvider>
    </>
  );
}

export default App;
