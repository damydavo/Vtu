import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    network: {
        type: String,
        require: [true, 'Please add your name']
    },
    phone: {
        type: Number,
        required: [true, 'Please add your phone number']
    },
    email: {
        type: String,
        require: [true, 'Please add your email'],
    },
    subscription: {
        type: String,
        require: [true, 'Please add your email'],
    },
    amount: {
        type: Number,
        require: [true, 'Please add a your number'],
        unique: true
    },
},
    {
        timestamps: true,
    }
)

const Sub = mongoose.model('Sub', dataSchema)

export default Sub