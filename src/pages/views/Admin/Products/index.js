import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Router, Link, NavLink } from 'react-router-dom'
import ReactDOM from "react-dom";
import axios from "axios";


const ProductsManager = ({ products, onRemove }) => {
    const onHandleRemove = (id) => {
        if (confirm('Bạn có chắc chắn muốn xóa?')) {//eslint-disable-line
            onRemove(id)
        }
    }
    const [keyword, setKey] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setKey({ ...keyword, [name]: value })

    }

    return (

        <div>

            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            {/* {`/admin/product/${id}`} */}
            <Link to="/admin/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">

                    <div className="table-responsive">
                        <table className="table" id="myTable">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td><img src={product.image} alt="" width="50" /></td>
                                        <td>{product.price}</td>
                                        <td>

                                            <button className="btn btn-danger" onClick={() => onHandleRemove(product.id)}>Xóa</button>
                                        </td>
                                        <td>
                                            {/* <button className="btn btn-danger" >Sửa</button> */}
                                            {/* <Link to={`/product/${item.id}`} className="btn btn-info" >Detail</Link> */}
                                            {/* <Route path='/admin/product/:id'></Route> */}
                                            {/* return http.put(`/products/${id}`, data); */}
                                            <NavLink to={`/admin/product/${product.id}`}><button className="btn btn-danger" >Sửa</button></NavLink>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
