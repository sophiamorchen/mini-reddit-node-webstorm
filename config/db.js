const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Erreur de connexion à la BDD: ${error.message}`);
        process.exit(1)
        // 0 => "OK"
        // 1 => "Erreur"
    }
};

module.exports = connectDB;
