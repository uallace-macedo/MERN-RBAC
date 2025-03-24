import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'manager', 'user'], default: 'user', required: true }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
