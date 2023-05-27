const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    rollNumber: { type: String, unique: true },
    fullName: String,
    email: String,
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

const adminSchema = new mongoose.Schema(
  {
    adminId: { type: String, unique: true },
    adminPassword: String,
  },
  {
    collection: "adminData",
  }
);

const UserDetail = mongoose.model("UserInfo", userSchema);
const AdminDetail = mongoose.model("adminData", adminSchema);

module.exports = {
  UserDetail,
  AdminDetail,
};
