import express from 'express'

const app = express();


const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Index  2')
})


app.listen(PORT, () => console.log(`Server is running ${PORT}`))