const router = require('express').Router();
const ErrorHandler = require('../errors/ErrorHandler');
const apiKeyMiddleware = require('../middlewares/apiKey');
let products = require('../productData');

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'my product page'
    });
});

router.get('/api/products', (req, res) => {
    res.json(products)
})
router.post('/api/products',apiKeyMiddleware, (req, res, next) => {
    const { name, price } = req.body;
    console.log(req.body)
    try {
        // console.log(city)
    }
    catch (err) {
        next(ErrorHandler.serverError(err.message));
    }

    if (!name || !price) {
        next(ErrorHandler.validationError('name and price fields are required'));
        // return res.status(422).json({ error: 'all fields are required' });
        // throw new Error('all fields are required')
    }
    const product = { name, price, id: new Date().getTime().toString() }
    products.push(product);
    res.json(product);
})

router.delete('/api/products/:productId', (req, res) => {
    products = products.filter(product => req.params.productId !== product.id);
    res.json({ status: 'OK' })
});



module.exports = router;