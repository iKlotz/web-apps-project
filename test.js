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
    brand: "TEST",
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
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        //we don't need to enter localhost 'cause we set it as a proxy
        const res = await axios.post('http://localhost:5000/api/users', formData, config);
        console.log("User was successfully registered");
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
            'x-auth-token': token.token
        }
    };

    try {
        const res = await axios.post('http://localhost:5000/api/shopping-cart', product, config);
        console.log("Product was added to cart");

        return res.data;

    } catch (err) {
        console.error(err.response.data.msg);
    }
};

const loadAdmin = async () => {

    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const user = {
            email: "admin@gmail.com",
            password: "123456"
        };


        const res = await axios.post('http://localhost:5000/api/auth', user, config);

        return res.data;
    } catch (err) {
        console.error(err);
    }
};

//Add product
const addProductToStore = async token => {
    const product = {
        model: "SJ-200 Vintage",
        brand: "TEST",
        specs: "The King of the Flat-tops! Played by more legendary performers and fea...",
        price: 666,
        type: "Acoustic Guitar",
        pic1: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
        pic2: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
        pic3: "https://static.gibson.com/product-images/Acoustic/ACC73T218/Vintage%20...",
        quantity: 1
    };

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token.token
        }
    };

    const newToken = token;

    try {
        const res = await axios.post('http://localhost:5000/api/products', product, config);
        console.log("Product was successfully added");
        //console.log(res.data._id);
        return [newToken, res.data];
    } catch (err) {
        console.error(err.response.msg);
    }
};

//Update product

const updateProduct = async tokenAndProduct => {

    const newProduct = {
        brand: "Test",
        quantity: 13
    };


    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': tokenAndProduct[0].token
        }
    };

    const newToken = tokenAndProduct[0];

    try {
        const res = await axios.put(`http://localhost:5000/api/products/${tokenAndProduct[1]._id}`, newProduct, config);

        console.log('Product was successfully updated');
        return [newToken, res.data._id];
    } catch (err) {
        console.error(err);
    }
};

//Delete product
const deleteProduct = async tokenAndId => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': tokenAndId[0].token
        }
    };

    try {
        await axios.delete(`http://localhost:5000/api/products/${tokenAndId[1]}`, config);
        //dispatch({ type: DELETE_PRODUCT, payload: id });
        console.log("Product was successfully deleted");
    } catch (err) {
        console.error(err);
    }
};


/*
register user, and add an item to his/her shopping cart
 */

const registrationTest = () => register(formData)
    .then((token) => addProduct(token))
    .then((product) => {
        if (product.brand === brand && product.model === model) {
            console.log("Registration test ended.");
            console.log("**************************************\n");
        }
    })
    .catch((err) => console.log(err));


//Test description: laoad admin user, add product, update it, remove it, be happy.
const adminTest = () => loadAdmin()
    .then((token) => addProductToStore(token))
    .then((tokenAndProduct) => updateProduct(tokenAndProduct))
    .then((tokenAndId) => deleteProduct(tokenAndId))
    //returns a token and an object that was added to the store
    .then(() => console.log("Test ended."));

registrationTest().then(adminTest);



