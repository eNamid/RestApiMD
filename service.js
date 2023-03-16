const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

    app.set('trust proxy', true)

    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 5000
    }));
    app.use(bodyParser.json({
        limit: '50mb'
    }));
    app.use(cookieParser());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, origin, content-type, Authorization, x-preferences-currency, x-preferences-reference, accept');
        next();
    });

app.post('/addBook', require('./routes/addBook'));

app.listen(process.env.PORT, () => {
    console.log(`Server is starting in port: ${process.env.PORT}`);
}); 