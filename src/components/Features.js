import React from 'react'
import Navbar from './Navbar'
import AppsMain from './AppsMain'
import BlogMain from './BlogMain'
import HelpMain from './HelpMain'
import Footer from './Footer';


const Features = () => {
    return (
        <div className="main">
            <div className="container">
                <Navbar />
                <AppsMain />
                <HelpMain />
                <BlogMain />
                <Footer />
            </div>
        </div>
    )
}

export default Features;