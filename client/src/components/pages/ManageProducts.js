import React, {useContext, useEffect} from 'react';
import ProductsList from '../products/ProductsList';
import ProductForm from '../products/ProductForm';
import ProductFilter from '../products/ProductFilter'
import AuthContext from '../../context/auth/authContext';

const ManageProducts = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    return (
        <div className="grid-2">
            <div>
                <ProductForm/>
            </div>
            <div>
                <ProductFilter/>
                <ProductsList/>
            </div>
        </div>
    );
};

export default ManageProducts;