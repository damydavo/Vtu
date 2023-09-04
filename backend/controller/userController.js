import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";

//@desc Register a new user
//@route  /api/users
//@access  public

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //validate user input
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    //check for existing users
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }
})

//@desc Login user
//@route  /api/users/login
//@access  public

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //get one user
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        generateToken(user._id)
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }

})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

export {
    register,
    login,
}