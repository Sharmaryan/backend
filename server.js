const express = require('express');


const app = express();
const mainRouter = require('./routes/index');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

console.log(app.get('view engine'))

app.use(mainRouter)



app.use(express.static('public'))

app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);