import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import user from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Get user from token
            req.user = await user.findById(decoded.id).select('-password')
            next()

        }

        catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not Authorized')
    }
})

export {
    protect
}