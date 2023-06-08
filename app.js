const express = require('express');
const app = express();

//config
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// Routes
app.get('/', (req, res) => {
    return res.render('landingPage');
});

app.get('/login', (req, res) => {
    return res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    return res.redirect('/');
});

app.get('/register', (req, res) => {
    return res.render('register');
});

app.post('/register', (req, res) => {
    const {username, email, password, dateOfbirth } = req.body;
    console.log(username, email, password, dateOfbirth);
    return res.redirect('/'); 
});

app.get('*', (req, res) => {
    return res.render('404');
});

// Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
