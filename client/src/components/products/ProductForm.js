import React, {useState, useContext, useEffect} from 'react';
import ProductContext from '../../context/product/productContext';

const ProductForm = () => {
    const productContext = useContext(ProductContext);

    const {addProduct, clearCurrent, current, updateProduct} = productContext;

    useEffect(() => {
        if (current !== null) {
            setProduct(current);
        } else {
            setProduct({
                model: '',
                brand: '',
                price: '',
                type: 'Electric guitar',
                pic1: '',
                pic2: '',
                pic3: '',
                specs: ''
            });
        }
    }, [productContext, current]); //'cause we want it to change only on certain occasions

    const [product, setProduct] = useState({ //those are default values
        model: '',
        brand: '',
        price: '',
        type: 'Electric guitar',
        pic1: '',
        pic2: '',
        pic3: '',
        specs:''
    });

    const {model, brand, price, type, pic1, pic2, pic3, specs} = product;

    const onChange = e =>
        setProduct({...product, [e.target.model]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        //addProduct(product);
        if(current === null){
            addProduct(product); //contact is our state
        } else {
            updateProduct(product);
        }

        setProduct({
            model: '',
            brand: '',
            price: '',
            type: 'Electric guitar',
            pic1: '',
            pic2: '',
            pic3: ''
        });
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="primary">{current === null ? 'Add Product' : 'Edit Product' }</h2>
            <input
                type="text"
                placeholder="Model"
                name="model"
                value={model}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Brand"
                name="brand"
                value={brand}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Type"
                name="type"
                value={type}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Price"
                name="price"
                value={price}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Add picture URL (Picture 1)"
                name="pic1"
                value={pic1}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Add picture URL (Picture 2)"
                name="pic2"
                value={pic2}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Add picture URL (Picture 3)"
                name="pic3"
                value={pic3}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Add specs"
                name="specs"
                value={specs}
                onChange={onChange}
            />


            {/*<h5>Product Type</h5>*/}
            {/*<input*/}
                {/*type="radio"*/}
                {/*name="type"*/}
                {/*value="Electric Guitar"*/}
                {/*checked="true"*/}
                {/*onChange={onChange}*/}
            {/*/>Electric{''}*/}
            {/*<input*/}
                {/*type="radio"*/}
                {/*name="type"*/}
                {/*value="Acoustic Guitar"*/}
                {/*checked={type === ''}*/}
                {/*onChange={onChange}*/}
            {/*/>Acoustic Guitar{' '}*/}
            <div>
                <input
                    type="submit"
                    value={current === null ? 'Add Product' : 'Update Product' }
                    className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>
                    Clear
                </button>
            </div>}
        </form>
    );
};

export default ProductForm;