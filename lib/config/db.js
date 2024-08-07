import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://gruprttt:gruasustuf@cluster0.nkggavv.mongodb.net/blog-app');
    console.log("DB Connected");
}