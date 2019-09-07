import React from 'react';
const Readme = () => {

    return (
        <div className='card list'>
            <h4>
                Store name: Guitar WorldStore, we are selling guitars.
            </h4>
            <h4>
                Additional pages
            </h4>
            <div className="container">
            <ol>
                <li>
                    Home page.
                </li>
                <li>
                    About us – just a page to make the website look less empty.
                </li>
                <li>
                    News – same as above.
                </li>
                <li>
                    Card screen for individual product, everything is very straight forward.
                </li>
                <li>
                    Manage – products:
                    This is an admin only page, that helps to add products to the store,
                    by setting up guitar parameters adding pictures (URLS) and price. This one was quite challenging :)
                </li>
            </ol>
            </div>
            <h4>What was hard to do:</h4>
            <p>
                A lot of stuff related to react, authentication admin/user, CSS but god bless bootstrap!
                DB since I never worked with one. To be honest almost everything.
            </p>
            <h4>All the code was written by me. My id is 326884350.</h4>
            <h4>App routes:</h4>
            <div className="container">
                <ol>‘/’ – home screen.</ol>
                <ol>‘/about’ – about us screen (information about the store)</ol>
                <ol>‘/news’ – boring page just to make a website look less empty</ol>
                <ol>‘/store’ – store itself</ol>
                <ol>‘/store/product/:id’ – specific product in the store</ol>
                <ol>‘/login’ – login form</ol>
                <ol>‘/sorrybro’ – page that appears when not authorized user tries to access admin screens</ol>
                <ol>‘/manage-products’ – in store product management</ol>
                <ol> ‘/users’ – all of the registered users</ol>
                <ol>‘/users/cart/id’ – specific users’ cart.</ol>
                <ol>‘/shopping-cart’ – screen where each user can see its cart content. </ol>
                <ol>‘/checkout’ – a checkout screen.</ol>
            </div>
            <h4>Please note to login as admin, use email: admin@gmail.com password: '123456' </h4>
            <h4>Security:</h4>
            <p>
                Ddos library against dos attacs.
                Private/Admin routing in the app itself. You have to have correct jwt token to be able to make changes to your cart, only admin can add/remove products to the store etc.
            </p>
            <h4>Store was implemented using ReactJS.</h4>
        </div>

    );
};

export default Readme;