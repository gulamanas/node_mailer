require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/router');
const cors = require('cors');

const PORT = process.env.PORT || 8006;

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server started at port no ${PORT}`);
})