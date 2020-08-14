import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Home = ({ products }) => {
  console.log(products)
  return (

    //       <div className="site-section bg-light">
    //   <div className="container">
    //     <div className="row">
    //       <div className="title-section text-center col-12">
    //         <h2>Pharmacy <strong className="text-primary">Products</strong></h2>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-12 block-3 products-wrap">
    //         <div className="nonloop-block-3 owl-carousel">
    //         {products.map((item, index)=>(
    //          <div className="text-center item mb-4 item-v2">
    //             <span className="onsale">Sale</span>
    //             <a href="shop-single.html"> <img src={item.image} alt="Image" /></a>
    //             <h3 className="text-dark"><a href="shop-single.html">{item.name}</a></h3>
    //             <p className="price">{item.price}</p>
    //           </div>            

    //         ))}       
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="row text-center">

      {products.map((item, index) => (
        <div className="col-lg-3 col-md-6 mb-4">

          <div className="card h-100">
            <img className="card-img-top" src={item.image} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price}</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary" >Buy now</a>
              <Link to={`/product/${item.id}`} className="btn btn-info" >Detail</Link>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

Home.propTypes = {

}

export default Home
