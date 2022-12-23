const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey');

// router.use(apiKeyMiddleware)

router.get('/', (req, res) => {
    res.render('index',{
        title:'my home page'
    });
});
router.get('/about', (req, res) => {
    res.render('about',{
        title:'my about page'
    });
});
// router.get('/api/products', (req, res) => {
//    res.json([
//     {
//     id:'123',
//     name:'chrome'
//    },
//     {
//     id:'124',
//     name:'firefox'
//    },
// ])
// });

// router.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname) + '/about.html');
// });

module.exports = router;
