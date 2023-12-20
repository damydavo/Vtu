import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
        mongoose.connect('mongodb+srv://damydavo:electelect123@damydavocluster.yvjol.mongodb.net/sunking?retryWrites=true&w=majority', { useNewUrlParser: true });
        mongoose.connection.once('open', function () {
            console.log('Conection has been made!');
        }).on('error', function (error) {
            console.log('Error is: ', error);
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
};

export default connectDB;