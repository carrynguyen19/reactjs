import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
// import { storage } from "./firebaseConfig";
const AddProduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();


    const onHandleSubmit = (data) => {
        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data
        }
        onAdd(newData);
        history.push('/admin/products');
    }
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");
    const handChange = e => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file["type"];
            const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
            if (validImageTypes.includes(fileType)) {
                setError("");
                setImage(file);
            } else {
                setError("Please select an image to upload");
            }
        }
    };

    // const handleUpdate = () => {
    //     if (image) {
    //         const uploadTask = storage.ref(`images/${image.name}`).put(image);

    //         uploadTask.on(
    //             "state_changed",
    //             snapshot => {
    //                 const progress = Math.round(
    //                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //                 );
    //                 setProgress(progress);
    //             },
    //             error => {
    //                 setError(error);
    //             },
    //             () => {
    //                 storage
    //                     .ref("images")
    //                     .child(image.name)
    //                     .getDownloadURL()
    //                     .then(url => {
    //                         setUrl(url);
    //                         setProgress(0);
    //                     });
    //             }
    //         );
    //     } else {
    //         setError("Error please choose an image to upload");
    //     }
    // };
    return (
        <div>
            <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({
                            required: true, minLength: 10, valueNull: null


                        })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Bạn cần nhập tên sản phẩm</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Nhập tối thiểu 10 kí tự</span>}
                        {errors.name && errors.name.type === "checkNull" && <span>Không được bỏ trống tên sản phẩm</span>}

                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" name="image"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>

                {/* <div>
                    <div>
                        <input type="file" onChange={handChange} />{" "}
                        <button onClick={handleUpdate}> Upload</button>
                    </div>
                    <div style={{ height: "100px" }}>
                        {progress > 0 ? <progress value={progress} max="100" /> : ""}
                        <p style={{ color: "red" }}>{error}</p>
                    </div>
                    {url ? (
                        <img src={url} alt="logo" />
                    ) : (
                            <img src={logo} className="App-logo" alt="logo" />
                        )}
                </div> */}





                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        ref={register({ required: true })}
                        aria-describedby="priceHelp"
                    />
                    <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}
AddProduct.propTypes = {

}

export default AddProduct
