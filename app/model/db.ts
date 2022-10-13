import mongoose from 'mongoose';

const dbUrl: string = process.env.MONGO_DB
export default mongoose.connect(dbUrl);
