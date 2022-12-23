const express = require('express');
const app = express();

const mainRouter = require('./routes/index');
const productRouter = require('./routes/products');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

// console.log(app.get('view engine'))

app.use(productRouter)
app.use(mainRouter)



app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);