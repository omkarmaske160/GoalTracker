const { verify } = require("jsonwebtoken")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")



exports.registerUser = async (req, res) => {
    try {
        await User.create({ ...req.body })
        res.status(201).json({
            message: "user register success"
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await User.findOne({ email });

        if (
            validator.isEmpty(email) ||
            validator.isEmpty(password)
        ) {
            res.status(400).json({
                message: "all fields required"
            })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "enter proper email"
            })
        }

        if (!result) {
            return res.status(401).json({
                message: 'Email is invalid'
            });
        }
        console.log(result);

        const enteredPassword = password.trim();
        const storedPassword = result.password.trim();

        if (enteredPassword != storedPassword) {
            return res.status(401).json({
                message: 'Invalid Password'
            });
        }

        const token = jwt.sign({ user_id: result._id }, process.env.JWT_KEY, { expiresIn: "3d" });
        res.cookie("auth", token, { maxAge: 60 * 60 * 60 * 12 });
        res.status(200).json({
            message: "User login successfully", result: {

                email: result.email,
                user_id: result._id,

            }
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message || "Something went wrong" });
    }
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie("auth")
        res.status(200).json({ message: "logout success" })
    } catch (error) {
        res.status(400).json({ message: "logout refuse" })

    }
}
