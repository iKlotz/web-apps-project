const axios = require("axios");

const formData = {
    firstname: "Test",
    lastname: "Test",
    email: "test@gmail.com",
    password: "123456",
    admin: "false",
    remember_me: "false"
};

const model = "SJ-200 Vintage";
const brand = "Gibson";

const product = {
    model: "SJ-200 Vintage",
    brand: "Gibson",
    specs: "The King of the Flat-tops! Played by more legendary performers and fea...",
    price: 5499,
    type: "Acoustic Guitar",
    pic1: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
    pic2: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
    pic3: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
    quantity: 1
};


const register = async formData => {
    const config = {
        //will be sent to api, like the requests we send from postman
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        //we don't need to enter localhost 'cause we set it as a proxy
        const res = await axios.post('http://localhost:5000/api/users', formData, config);
        return res.data;

    } catch (err) {
        console.error(err.response.data.msg);
    }
};

// Add product to users cart
const addProduct = async (token) => {

    const product = {
        model: "SJ-200 Vintage",
        brand: "Gibson",
        specs: "The King of the Flat-tops! Played by more legendary performers and fea...",
        price: 5499,
        type: "Acoustic Guitar",
        pic1: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
        pic2: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
        pic3: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
        quantity: 1
    };

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token':  token.token
        }
    };

    try {
        const res = await axios.post('http://localhost:5000/api/shopping-cart', product, config);

        return res.data;

    } catch (err) {
        console.error(err.response.data.msg);
    }
};

// const loadUser = async (token) => {
//
//     try {
//
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-auth-token':  token.token
//             }
//         };
//
//         const user = {
//             email: "test@gmail.com",
//             password: "123456"
//         };
//
//
//         const res = await axios.get('http://localhost:3000/api/auth', user, config);
//
//         return res.data;
//     } catch (err) {
//         console.error(err);
//     }
// };


/*
register user, and add an item to it's shopping cart
 */

register(formData)
    .then((token)=> addProduct(token))
    .then((product)=> {
        if(product.brand === brand && product.model === model){
         console.log("User registered: success, " +
                "\nProduct added to shopping-cart: success");
        }
    })
    .catch((err)=> console.log(err));




