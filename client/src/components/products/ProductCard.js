import React, {Fragment, useContext} from 'react';
import ProductContext from '../../context/product/productContext';
import {Link} from "react-router-dom";


const ProductCard = () => {

    const productContext = useContext(ProductContext); //init context

    const { current, addProductToCart, cart } = productContext; //pulling out products from out context

    const {model, brand, specs, price, type, pic1} = current;

    if(!current){
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

export default ProductCard;