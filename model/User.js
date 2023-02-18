const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    Task: { type: String },
    Expiry_date: { type: Date },
    User: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    Important: { type: Boolean },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);
const UserSchema = mongoose.model("user", userSchema);
const TaskSchema = mongoose.model("task", taskSchema);

module.exports = { UserSchema, TaskSchema };
