import mongoose from 'mongoose';


const connection = () => {
    console.log(process.env.DB_URL),
    mongoose.connect(process.env.DB_URL, {
        
        dbName: 'lenslight',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected DB'))
        .catch((err) => console.log(`db connection err: ${err}`))
};


export default connection;