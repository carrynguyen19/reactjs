import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import apiRequest from "../../../../api/productApi"
import { useState } from 'react'
import { useEffect } from 'react'

const ProductDetail = ({ products }) => {
  const id = useParams().id;
  const [product, setProduct] = useState({});
  // const product = products.find(item => item.id === id)
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await apiRequest.getProduct(id);
        setProduct(data)
      } catch (error) {
        console.log('Faile to request API', error)
      }
    }
    getProduct()
  }, {})

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mr-auto">
            <div className="border text-center">
              <img src={product.image} />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-black"><strong>{product.name}</strong></h2>



            <p>thong tin san pham</p>
            <p><del>90$</del>  <strong className="text-primary h4">{product.price}</strong></p>
            <div className="mb-5">
              <div className="input-group mb-3" style={{ maxWidth: '220px' }}>
                <div className="input-group-prepend">
                  <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                </div>
                <input type="text" className="form-control text-center" defaultValue={1} />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                </div>
              </div>
            </div>
            <p><a href="cart.html" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</a></p>
            <div className="mt-5">
              <ul className="nav nav-pills mb-3 custom-pill" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Ordering Information</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Specifications</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <table className="table custom-table">
                    <thead>
                      <tr><th>Material</th>
                        <th>Description</th>
                        <th>Packaging</th>
                      </tr></thead>
                    <tbody>
                      <tr>
                        <th scope="row">OTC022401</th>
                        <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                        <td>1 BT</td>
                      </tr>
                      <tr>
                        <th scope="row">OTC022401</th>
                        <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                        <td>144/CS</td>
                      </tr>
                      <tr>
                        <th scope="row">OTC022401</th>
                        <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                        <td>1 EA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <table className="table custom-table">
                    <tbody>
                      <tr>
                        <td>HPIS CODE</td>
                        <td className="bg-light">999_200_40_0</td>
                      </tr>
                      <tr>
                        <td>HEALTHCARE PROVIDERS ONLY</td>
                        <td className="bg-light">No</td>
                      </tr>
                      <tr>
                        <td>LATEX FREE</td>
                        <td className="bg-light">Yes, No</td>
                      </tr>
                      <tr>
                        <td>MEDICATION ROUTE</td>
                        <td className="bg-light">Topical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

ProductDetail.propTypes = {

}

export default ProductDetail
