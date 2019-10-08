const express = require('express');
const connectDB = require('./config/db');
const Ddos = require('ddos');

const app = express();
const ddos = new Ddos;

// Connect Database
connectDB();

//Init ddos
app.use(ddos.express);

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/products', require('./routes/products'));
app.use('/api/shopping-cart', require('./routes/shopping-cart'));
app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));