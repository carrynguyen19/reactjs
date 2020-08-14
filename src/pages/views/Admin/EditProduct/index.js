import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from "react-router"
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import apiRequest from "../../../../api/productApi"
const EditProduct = ({ products, onUpdate }) => {
    const { register, handleSubmit, errors } = useForm();
    const [currentProduct, setCurrentProduct] = useState({});

    let { id } = useParams();
    let history = useHistory();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.getProduct(id);
                setCurrentProduct(data)
            }
            catch (error) {
                console.log('Faile to request API', error)
            }
        }
        getProduct()
    }, {})


    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    const onHandleSubmit = (data) => {
        setCurrentProduct(data);
        // console.log(currentProduct)
        onUpdate(id, currentProduct);

        history.push('/admin/products')
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control"
                        ref={register({ required: true, minLength: 10 })}
                        aria-describedby="nameHelp"

                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Bạn cần nhập tên sản phẩm</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Nhập tối thiểu 10 kí tự</span>}

                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary" >Cập nhật</button>'

            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
