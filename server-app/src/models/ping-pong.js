import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PingPongSchema = new Schema({
  pingName: String,
});

export default mongoose.model('PingPongSchema', PingPongSchema);
