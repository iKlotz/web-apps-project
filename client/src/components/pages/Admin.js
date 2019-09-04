import React from 'react';
import ProductFilter from '../products/ProductFilter';
import Users from "../admin/Users";
import UserFilter from "../admin/UserFilter";

const Admin = () => {
    return (
        <div>
            <UserFilter />
            <Users />
        </div>
    );
};

export default Admin;