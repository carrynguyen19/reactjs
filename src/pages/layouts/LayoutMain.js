import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'
import Banner from '../../components/Main/Banner'
import '../../assets/css/main/bootstrap.min.css'
import '../../assets/css/main/style.css'
import '../../assets/css/main/bootstrap.css'
import Infor from '../../components/Main/Infor';
export default ({ children }) => {
    return (
        <div className="user-page">
            <Navbar/>
            <Banner/>
            {/* <Infor/> */}
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
