import React from 'react';
import Explorer from "../../images/explorer.jpg";

const ShoppingCart = () => {
    return (
        <div className="cart-page-content page-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="cart_title">
                            <h4>Shopping Cart</h4>
                        </div>
                        <div className="table-responsive">
                            <table className="cart-table text-center">
                                <thead>
                                <tr id="cart_th">
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Product name</th>
                                    <th>QUANTITY</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <a href="#"><img alt="" className="img-responsive"
                                                         src={Explorer}/></a>
                                    </td>
                                    <td>
                                        <h6><a href="#">Lorem ipsum dolor sit amet,</a></h6>
                                    </td>
                                    <td>
                                        <form id="qua_in" action="">
                                            <input type="number" value="1" name="quantity" min="1" max="5"/>
                                        </form>
                                    </td>
                                    <td>
                                        <div className="cart-price">$104.99</div>
                                    </td>
                                    <td>
                                        <div className="cart-subtotal">$104.99</div>
                                    </td>
                                    <td><i className="fa fa-trash"></i></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <a href="#"><img alt="" className="img-responsive"
                                                         src={Explorer}/></a>
                                    </td>
                                    <td>
                                        <h6><a href="#">Lorem ipsum dolor sit amet,</a></h6>
                                    </td>
                                    <td>
                                        <form id="qua_in_2" action="">
                                            <input type="number" value="1" name="quantity" min="1" max="10"/>
                                        </form>
                                    </td>
                                    <td>
                                        <div className="cart-price">$85.99</div>
                                    </td>
                                    <td>
                                        <div className="cart-subtotal">$85.99</div>
                                    </td>
                                    <td><i className="fa fa-trash"></i></td>
                                </tr>
                                <tr id="total_colspan">
                                    <td colSpan="3" className="text-left">total</td>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        190.98$
                                    </td>
                                    <td colSpan="2">
                                        <a className="checkPageBtn" href="#">add to wishlist</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShoppingCart;