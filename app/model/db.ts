import { connect } from 'mongoose';

const dbUrl: string = process.env.MONGO_DB
export default connect(dbUrl);
