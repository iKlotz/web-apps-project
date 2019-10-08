import React, {useEffect, useContext} from 'react';
import Users from "../admin/Users";
import UserFilter from "../admin/UserFilter";
import AuthContext from "../../context/auth/authContext";

const Admin = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <UserFilter/>
            <Users/>
        </div>
    );
};

export default Admin;