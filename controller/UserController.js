const user = require("../model/User.js");

const createUser = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { email, name } = req.body;
    const createNewUser = new user.UserSchema({ name, email });
    await createNewUser.save();
    if (createNewUser) {
      res.status(200).json({
        message: "User created successfully",
        data: createNewUser,
      });
    } else {
      throw new Error("User not created");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { Task, Expiry_date, User, Important } = req.body;
    const createNewTask = new user.TaskSchema({
      Task,
      Expiry_date,
      User,
      Important,
    });
    await createNewTask.save();
    if (createNewTask) {
      res.status(200).json({
        message: "Task created successfully",
        data: createNewTask,
      });
    } else {
      res.status(400).json({
        message: "Task not created",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getAllUserData = async (req, res) => {
  try {
    const getAllUser = await user.UserSchema.find();

    if (getAllUser) {
      res.status(200).json({
        message: "User created successfully",
        data: getAllUser,
      });
    } else {
      throw new Error("User not created");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getAllTaskData = async (req, res) => {
  try {
    const getAllTask = await user.TaskSchema.find().populate({
      model: "user",
      path: "User",
    });
    console.log(getAllTask);
    if (getAllTask) {
      res.status(200).json({
        message: "Task created successfully",
        data: getAllTask,
      });
    } else {
      throw new Error("Task not found");
    }

    if (getAllTask) {
      res.status(200).json({
        message: "Task created successfully",
        data: getAllTask,
      });
    } else {
      throw new Error("Task not created");
    }
  } catch (err) {}
};

module.exports = { createTask, createUser, getAllUserData, getAllTaskData };
