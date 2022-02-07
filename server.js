require('dotenv').config();
const app = require('express')();
const path = require('path');
const cors = require('cors');


app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/public/index.html')
});

app.get('/calculate-fibonnaci/:inputNumber', cors(), (req, res) => {
    const {calculate} = require('./calculate-fibonnaci');
    res.send({
        result: calculate(req.params.inputNumber)
    });
})

const host =  process.env.APP_HOST ||  '127.0.0.1';
const port = process.env.APP_PORT || 3030;

app.listen(port, host, () => {
    console.log(`app service started and listening at http://${host}:${port}`);
});