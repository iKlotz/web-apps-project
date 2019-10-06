import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdminContext from '../../context/admin/adminContext';

const UserItem = ({ user }) => {

    const adminContext = useContext(AdminContext);

    const { setCurrent} = adminContext;

    const { _id, firstname, lastname } = user;

    const setUsersCart = (user) => {
        setCurrent(user);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{firstname}{' '}{lastname}</h5>
                <Link to={{pathname: `/users/cart/${_id}`, state: {id: _id}}}
                      className="btn btn-dark btn-sm my-1"
                      onClick={() => setUsersCart(user)}
                >
                    see users cart
                </Link>
                <Link to={{pathname: `/users/cart/${_id}`, state: {id: _id}}}
                      className="btn btn-dark btn-sm my-1"
                      onClick={() => setUsersCart(user)}
                >
                    see users orders
                </Link>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
};
export default UserItem;

