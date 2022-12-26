const express = require('express');
const ErrorHandler = require('./errors/ErrorHandler');
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

app.use((req, res) => {
    return res.json({ message: 'page not found' });
});

app.use((err, req, res, next) => {
    if (err instanceof ErrorHandler) {
        res.status(err.status).json({ err: { message: err.message, status: err.status } });

    }
    else{
        res.status(500).json({ error: { message: err.message, status: err.status } }); 
    }
    console.log('error caught', err.message);
});
app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);