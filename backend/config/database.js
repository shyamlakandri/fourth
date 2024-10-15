const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        const data = await mongoose.connect(process.env.dbURI);
        console.log(`Database is connected successfully to ${data.connection.host}`);
    } catch (err) {
        console.log('Failed to connect to the database:', err.message);
    }
};

module.exports = connectDatabase;
