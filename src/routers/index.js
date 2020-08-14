import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct'
import EditProduct from '../pages/views/Admin/EditProduct'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact'
import ProductDetail from '../pages/views/Main/ProductDetail';
import SearchProduct from '../pages/views/Admin/Search';


const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onHandleRemove} />
                            }>
                            </Route>
                            <Route path='/admin/search' render={(props) =>
                                <SearchProduct {...props} products={products} />
                            }>
                            </Route>
                            <Route path='/admin/product/add'
                                render={(props) =>
                                    <AddProduct {...props} onAdd={onAdd} />}></Route>
                            <Route path='/admin/product/:id'>

                                <EditProduct products={products} onDetail={onHandleUpdate} onUpdate={onHandleUpdate} />


                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path='/' exact>
                                <productsHome products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path='/product/:id'>
                                <ProductDetail products={products} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
