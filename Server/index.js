const express = require("express");
const {router} = require("./Router/router");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors(
    {
        origin: ["https://recipehub-fe.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// app.use(bodyParser.json());

app.use(function(req, res, next){
    next();
})

app.get('/', (req, res) => {
    res.send('Server Running');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login request:', { username, password });
    if (username === 'admin' && password === 'admin') {
        res.json({ success: true, message: 'Login successful' });
        loggedin = true;
    } else {
        res.json({ success: false, message: 'Incorrect username or password' });
    }
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    console.log('Login request:', { username, email, password });
    
    res.json({ success: true, message: 'Account created succesfully' });
});

app.listen(8000, ()=>{console.log("Server is running on port 8000")});