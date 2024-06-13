import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account"}],
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction"}]
  },
);


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
