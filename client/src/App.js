import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Readme from './components/pages/Readme';
import About from './components/pages/About';
import News from './components/pages/News';
import CartCheckout from './components/pages/CartCheckout';
import NotAuthorized from './components/pages/NotAuthorized';
import Store from './components/pages/Store';
import ProductCard from './components/products/ProductCard';
import ProductState from './context/product/ProductState';
import AdminState from './context/admin/AdminState';
import CartState from './context/cart/CartState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import ManageProducts from "./components/pages/ManageProducts";
import ShoppingCart from "./components/pages/ShoppingCart";
import Admin from "./components/pages/Admin";
import UsersCart from "./components/admin/UsersCart";
import OrderState from "./context/order/OrderState";
import UsersOrders from "./components/admin/UsersOrders";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <AuthState>
            <ProductState>
                <CartState>
                    <OrderState>
                        <AdminState>
                            <AlertState>
                                <Router>
                                    <Fragment>
                                        <Navbar/>
                                        <div className="container">
                                            <Alerts/>
                                            <Switch>
                                                <Route exact path='/' component={Home}/>
                                                <Route exact path='/readme.html' component={Readme}/>
                                                <Route exact path='/about' component={About}/>
                                                <Route exact path='/news' component={News}/>
                                                <Route exact path='/store' component={Store}/>
                                                <Route exact path='/store/product/:id' component={ProductCard}/>
                                                <Route exact path='/register' component={Register}/>
                                                <Route exact path='/login' component={Login}/>
                                                <Route exact path='/sorrybro' component={NotAuthorized}/>
                                                <AdminRoute exact path='/manage-products' component={ManageProducts}/>
                                                <AdminRoute exact path='/users' component={Admin}/>
                                                <AdminRoute exact path='/users/cart/:id' component={UsersCart}/>
                                                <AdminRoute exact path='/users/orders/:id' component={UsersOrders}/>
                                                <PrivateRoute exact path='/shopping-cart' component={ShoppingCart}/>
                                                <PrivateRoute exact path='/checkout' component={CartCheckout}/>
                                            </Switch>
                                        </div>
                                    </Fragment>
                                </Router>
                            </AlertState>
                        </AdminState>
                    </OrderState>
                </CartState>
            </ProductState>
        </AuthState>
    );
};

export default App;
