import http from "./axiosHttp";

const getAll = () => {
    return http.get("/products");
};

const getProduct = id => {
    return http.get(`/products/${id}`);
};

const create = data => {
    return http.post("/products", data);
};

const updateProduct = (id, data) => {
    return http.put(`/products/${id}`, data);
};

const removeProduct = id => {
    console.log(id);
    return http.delete(`/products/${id}`);
};


export default {
    getAll,
    getProduct,
    create,
    updateProduct,
    removeProduct,
};