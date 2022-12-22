const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index',{
        title:'my home page'
    });
});
router.get('/about', (req, res) => {
    res.render('about',{
        about:'my about page'
    });
});

// router.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname) + '/about.html');
// });

module.exports = router;
