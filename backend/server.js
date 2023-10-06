const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const recaptchaRoutes = require('./routes/recaptcha.routes');
require('dotenv').config();


const router  = express.Router();
const app = express();

const port = process.env.PORT || 3000;

/*MIDDLEWARE*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*API ENDPOINTS*/

app.use('/', router);

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/ourteam', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/ourprojects', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/ourtrainings', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/clinic', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/ourprojects/project_active_competent', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/ourtrainings/addiction_training', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/clinic/select_clinic', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/clinic/select_clinic/:id', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/clinic/summary', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});
app.get('/clinic/summary', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
});

/*POST ROUTE*/

router.post('/post', async (req, res) => {
    const { token, formData } = req.body;
    console.log('req.body :', token, formData);
    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY_RECAPTCHA}&response=${token}`
        );
        if (response.data.success) {
            res.send('verification positive');
        } else {
            res.send('verification negative');
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error verifying Captcha')
    }
})

/*REACT WEBSITE*/

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../public')));

/*START SERVER*/

app.listen(port, () => {
    console.log(`Server is running on ${port} now !!!`);
});