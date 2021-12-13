import React from 'react';
import Header from './Header';
import Dropdown2 from './Dropdown2';
import './Blog.css';




const BlogMain = () => {
    return (
        <div className="blog">
            <Header title={'Frequently asked questions'} />
            <Dropdown2 />
        </div>
    )
}


export default BlogMain;