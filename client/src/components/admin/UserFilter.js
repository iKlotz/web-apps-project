import React, {useContext, useRef, useEffect} from 'react';
import AdminContext from '../../context/admin/adminContext';

const UserFilter = () => {
    const adminContext = useContext(AdminContext);
    const text = useRef('');
    const {filterUsers, clearFilter, filtered} = adminContext;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterUsers(e.target.value); //which is the actual text
        } else {
            clearFilter();
        }
    };

    return (
        <form className="container">
            <input ref={text} type="text" placeholder="Search users..." onChange=
                {onChange}/>
        </form>
    );
};

export default UserFilter;