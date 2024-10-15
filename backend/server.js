const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Load environment variables
dotenv.config({ path: "config/config.env" });

// Debugging: Check if environment variables are loaded
console.log("PORT:", process.env.PORT);
console.log("Database URI:", process.env.dbURI); // This should print your MongoDB URI

// Connect to the database
connectDatabase();

// Set the PORT, default to 3000 if not specified
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is working on http://localhost:${PORT}`);
});

// server.js
console.log("Loaded environment variables:", {
    PORT: process.env.PORT,
    dbURI: process.env.dbURI,
});
