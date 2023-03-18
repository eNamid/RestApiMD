const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));

    app.set('trust proxy', true)

    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000
    }));
    app.use(bodyParser.json({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000
    }));

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, origin, content-type, Authorization, x-preferences-currency, x-preferences-reference, accept');
        next();
    });

app.post('/addBook', require('./routes/addBook'));
app.get('/getBook', require('./routes/getBook'));
app.put('/updateBook/:id', require('./routes/updateBook'));
app.delete('/delBook/:id', require('./routes/delBook'));

app.listen(process.env.PORT, () => {
    console.log(`Server is starting in port: ${process.env.PORT}`);
}); 