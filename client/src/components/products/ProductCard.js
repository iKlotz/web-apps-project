import React, {Fragment, useContext, useEffect} from 'react';
import ProductContext from '../../context/product/productContext';
import {Link} from "react-router-dom";
import Spinner from '../../components/layout/Spinner';
import Explorer from '../../images/explorer.jpg';

const ProductCard = () => {

    const productContext = useContext(ProductContext); //init context

    const {current, addProductToCart, cart, getProductAndSetCurrent, loading} = productContext; //pulling out products from out context

    useEffect(() => {
        const id = window.location.pathname.split("/").pop(); //get id from the URL
        getProductAndSetCurrent(id);
        console.log(current);
    }, []);

    if (!current && !loading) {
        return <div>
            <Spinner/>
        </div>
    }

    const {model, brand, specs, price, type, pic1} = current;

    return <Fragment>
        <div>
            <div className="container card">
                <div className="row">
                    <div className="col-md-12">
                        <Link to='/store' className='btn btn-light' style={{float: 'right'}}>
                            Back To Store
                        </Link>
                        <h1>{model}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li>
                                {specs}
                            </li>
                            <li>
                                {price && <Fragment>
                                    <strong>Price:</strong> ${price}
                                </Fragment>}
                            </li>

                            <li>
                                {type && <Fragment>
                                    <strong>Type:</strong> {type}
                                </Fragment>}
                            </li>

                            <li>
                                {brand && <Fragment>
                                    <strong>Brand:</strong> {brand}
                                    <br/>
                                    <br/>
                                </Fragment>}
                            </li>

                            <div className="">
                                <button type="button" className="btn btn-dark"  onClick={() => console.log(current)}>
                                    <i className="far fa-heart"></i>
                                </button>

                                <button type="button" className="btn btn-dark"  onClick={() => console.log(current)}>
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center">
                                    <img src={Explorer} className="carousel-image" alt="..."/>
                                </div>
                                <div className="carousel-item text-center">
                                    <img src={Explorer} className="carousel-image" alt="..."/>
                                </div>
                                <div className="carousel-item text-center">
                                    <img src={Explorer} className="carousel-image" alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*</div>*/}

    </Fragment>;
};


export default ProductCard;