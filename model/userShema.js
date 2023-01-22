import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsersShema = new Schema({
  nama: { type: String, required: true, unique: true },
});

export default mongoose.model("User", UsersShema);
