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
            <Spinner />
        </div>
    }

    const {model, brand, specs, price, type, pic1} = current;

    return <Fragment>
        <div>
            <Link to='/store' className='btn btn-light'>
                Back To Store
            </Link>
            <div className="card grid-2">
                <div className="all center">
                    <img src={pic1} className="round-img2" alt="" style={{width: '150px'}}/>
                    <h1>{model}</h1>
                    {/*<p>Brand: {brand}</p>*/}
                </div>
                <div>
                    {specs && (<Fragment>
                        <h3>Specs</h3>
                        <p>{specs}</p>
                    </Fragment>)}

                    <ul>
                        <li>
                            {price && <Fragment>
                                <strong>Price:</strong> {price}
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
                            </Fragment>}
                        </li>

                        <a href="#" className="btn btn-dark my-1" onClick={() => console.log(current)}>
                            <i className="far fa-heart"></i>
                        </a>

                        <a href="#" className="btn btn-dark my-1" onClick={() => addProductToCart(current)}>
                            <i className="fas fa-shopping-cart"></i>
                        </a>

                    </ul>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Title</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <div className="bd-example">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0"
                                        className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active text-center">
                                        <img src={Explorer} className="carusele-image" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>;
};

export default ProductCard;