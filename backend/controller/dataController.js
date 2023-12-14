import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';
import Sub from '../models/dataModel.js'


//@desc Get data
//@route GET/api/data
//@access  private

const getData = asyncHandler(async (req, res) => {
    //get user using the id in the JWT

    const user = await User.findById(req.user.id)

    const data = await Sub.find()


    if (user.isAdmin) {
        res.status(200).json(data)

    }
    else {
        res.status(200)
        throw new Error('User is not permitted')
    }

})

//@desc Create data
//@route POST/api/data
//@access  public

const createData = asyncHandler(async (req, res) => {
    const { network, mobile, email, data, amount } = req.body

    if (!network || !mobile || !email || !data || !amount) {
        res.status(400)
        throw new Error('Please include all fields')
    }

    const dataCreate = await Sub.create({
        network,
        mobile,
        email,
        data,
        amount
    })

    res.status(200).json(dataCreate)
})

export {
    createData,
    getData,
}