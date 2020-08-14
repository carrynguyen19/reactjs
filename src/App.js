import React, { useState, useEffect } from 'react';
import dataFake from './dataFake';
import Routers from './routers'
import apiRequest from './api/productApi'
import axios from 'axios'


function App() {

  const [products, setProducts] = useState([]);
  //search

  // List 
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);

  // Xóa
  const onHandleRemove = async (id) => {

    try {
      await apiRequest.removeProduct(id);
      const newProducts = products.filter(product => (product.id != id));
      setProducts(newProducts)


    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm 
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);

      const confirmAdd = window.confirm("Thêm sản phẩm thành công!")
      if (data) {
        setProducts([
          ...products,
          data
        ])
      }
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Cập nhật 
  // const onHandleUpdate = (updateProduct) => {
  //   const newProducts = products.map(product => (
  //     product.id === updateProduct.id ? updateProduct : product
  //   ));
  //   localStorage.setItem('products', JSON.stringify(newProducts))

  //   const confirmSuccess = window.confirm("Cập nhật sản phẩm thành công!")
  //   if (confirmSuccess) {
  //     setProducts(newProducts);
  //   }
  // }
  const onHandleUpdate = async (id, updateProduct) => {
    try {
      const { data } = await apiRequest.updateProduct(id, updateProduct);
      const newProducts = products.map(product => (
        product.id === data.id ? data : product
      ));
      setProducts(newProducts)
    } catch (error) {
      console.log("Fail to request API", error)
    }
  }
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} />
    </div>
  )

}
export default App;