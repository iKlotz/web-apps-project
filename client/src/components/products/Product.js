import React, {Fragment, useEffect, useContext, useState, useRef} from 'react';

import ProductContext from '../../context/product/productContext';
import {Link} from "react-router-dom";



const Product = () => {
    const productContext = useContext(ProductContext); //init context

    const { products, current, setCurrent, clearCurrent } = productContext; //pulling out products from out context

    const [product, setProduct] = useState('');

    const latestCurrent = useRef(current);


    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        const singleProduct = products.filter(product => product.id === id);
        latestCurrent.current = singleProduct;
        setCurrent(latestCurrent.current);
        setProduct(latestCurrent.current);

        if (current !== null) {
            setProduct({
                name: current[0].name,
                brand: current[0].brand,
                price: current[0].price,
                type: current[0].type,
                pic1: current[0].pic1,
                pic2: current[0].pic2,
                pic3: current[0].pic3,
                specs: current[0].specs
            });
        } else {
            //temporary solution
            setProduct({
                name: 'Telecaster',
                brand: 'Fender',
                price: '3000',
                type: 'Electric guitar',
                pic1: "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                pic2: '',
                pic3: '',
                specs: 'Temporary profile'
            });
        }
    }, []);


    console.log(current);

    const {name, brand, specs, price, type, pic1} = product;

    if(!product){
        return <h4>loading...</h4>
    }

    return <Fragment>
        <Link to='/store' className='btn btn-light'>
            Back To Store
        </Link>
        {/*Hireable: {' '}*/}
        {/*{hireable ? (*/}
        {/*<i className="fas fa-check text-success"/>*/}
        {/*) : (*/}
        {/*<i className="fas fa-times-circle text-danger"/>*/}
        {/*)}*/}
        <div className="card grid-2">
            <div className="all center">
                <img src={pic1} className="round-img2" alt="" style={{width: '150px'}}/>
                <h1>{name}</h1>
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

                    <a href="#" className="btn btn-dark my-1">
                        <i className="far fa-heart"></i>
                    </a>

                    <a href="#" className="btn btn-dark my-1">
                        <i className="fas fa-shopping-cart"></i>
                    </a>


                    {/*<li>*/}
                    {/*{blog && <Fragment>*/}
                    {/*<strong>Website:</strong> {blog}*/}
                    {/*</Fragment>}*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>

        {/*<div className="card text-primary">*/}
        {/*<div className="badge badge-primary">Price: {price}</div>*/}
        {/*<div className="badge badge-success">Name: {name}</div>*/}
        {/*<div className="badge badge-light">Public Repos: {name}</div>*/}
        {/*<div className="badge badge-dark">Followers: Public Gists {name}</div>*/}
        {/*</div>*/}
        {/*<Repos repos={repos}/>*/}
    </Fragment>;
};

export default Product;