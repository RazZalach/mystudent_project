const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line

require('dotenv').config();

const app = express();
const apiWeather = require('./apiWeather');

const uri = process.env.MONGO_STR;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("mongo db connected") });

app.use(cors()); // Add this line
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Teachers_Router = require('./api/v1/routes/Teachers');
app.use('/teachers', Teachers_Router);

const Students_Router = require('./api/v1/routes/Students');
app.use('/students', Students_Router);

const Bitly_Router = require('./api/v1/routes/Bitly');
app.use('/bitly', Bitly_Router);

const Gym_Router = require('./api/v1/routes/dataGym');
app.use('/gym', Gym_Router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_teacher.html'));
});

app.get('/add_stu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_student.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login_student.html'));
});

app.get('/weather', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'weather.html'));
});

app.get('/bitly_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bitly.html'));
});

app.get('/get_all_students', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'get_all_students.html'));
});

app.post('/register', (req, res) => {
    if (req.body == null) return;
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Received registration data - Username: ${username}, Email: ${email}, Password: ${password}`);
    res.send('Registration successful!');
});

app.get('/:shortLink', async (req, res) => {
    try {
        const Bitly_Model = require('./api/v1/models/Bitly');
        const shortLink = req.params.shortLink;
        const link = await Bitly_Model.findOne({ ShortLink: shortLink });

        if (link) {
            res.redirect(link.LongLink);
        } else {
            res.status(404).send('Link not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.post('/autocomp', async (req, res) => {
    const cityName = req.body.cityName;
    console.log(cityName);
    if (cityName != null) {
        const result = await apiWeather.apiAutoComplete(cityName);
        console.log(result);
        console.log(result.key);
        return res.status(200).json({ message: result.key });
    }
    return res.status(500).json({ message: "Server Error Acouried" });
});

app.post('/w_d', async (req, res) => {
    const cityCode = req.body.cityCode;
    if (cityCode != null) {
        const result = await apiWeather.apiLocationWeatherDaily(cityCode);
        return res.status(200).json({ message: result });
    }
    return res.status(500).json({ message: "Server Error Acouried" });
});

app.post('/w_fd', async (req, res) => {
    const cityCode = req.body.cityCode;
    if (cityCode != null) {
        const result_arr = await apiWeather.apilocationWeatherFiveDays(cityCode);
        return res.status(200).json({ message: result_arr });
    }
    return res.status(500).json({ message: "Server Error Acouried" });
});

module.exports = app;
