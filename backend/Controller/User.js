const User = require("../models/userModels");


exports.createUser = async (req, res, next) => {

    const { fullName, email, password, reTypePassword } = req.body;

    // Check if all required fields are provided
    if (!fullName || !email || !password || !reTypePassword) {
        return res.status(400).json({
            success: false,
            message: "Please enter all required fields."
        });
    }

    // Check if password and reTypePassword match
    if (password !== reTypePassword) {
        return res.status(400).json({
            success: false,
            message: "Password and Retype Password fields must match."
        });
    }

    try {

        // Create the user
        const user = await User.create({
            fullName: fullName,
            email: email,
            password: password  // Store the hashed password
        });

        // Respond with success and user info (omit sensitive info like password)
        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        // Handle any errors (e.g., email already in use, database errors)
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the user.",
            error: error.message
        });
    }
};



exports.loginUser = async (req,res,next) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide both email and password."
        });
    }

    try {
        const user = await User.findOne({email:email})
        res.status(200).json({
            success:true,
            user
        })
    }
    catch (error) {
        // Handle any server errors
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred during login.",
            error: error.message
        });
    }

}
