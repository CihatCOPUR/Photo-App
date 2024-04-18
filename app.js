import express from 'express';
import dotenv from 'dotenv';
import connection from './db.js';

dotenv.config();

//DB connection
const app = express();

connection();


const PORT = 3000;


// ejs template engine
app.set('view engine', 'ejs')

//static files middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})



app.listen(PORT, () => console.log(`Server is running ${PORT}`))