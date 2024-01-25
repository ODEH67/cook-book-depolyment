import User from "../model/User.js";

export const handleListUsers = async (req, res) => {
  try {
    const users = await User.find()
    .select("-__v")
    .populate({ path: "address", select: "-__v" });

    console.log("🚀 ~ users:", users);
    res.send(users);
  } catch (error) {
    console.log("🚀 ~ error LIST USER:", error.message);
    res.send("Error in listing users" + error.message);
  }
};

export const handleAddUser = async (req, res) => {
  console.log("🚀 ~ handleAddUser:", req.body);

  try {
    const newUser = await User.create(req.body);
    console.log("🚀 ~ newUser:", newUser);

    res.send("User Inserted into db");
  } catch (error) {
    console.log("🚀 ~ error ADDING USER:", error.message);

    res.send("Error in adding a user" + error.message);
  }
};

export const handleDeleteUser = async (req, res) => {
  console.log("🚀 ~ handleDeleteUser:", req.params);

  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    console.log("🚀 ~ deleteUser:", deleteUser);

    res.send("User deleted into db");
  } catch (error) {
    console.log("🚀 ~ error DELETING USER:", error.message);

    res.send("Error in deleting a user" + error.message);
  }
};

export const handleEditUser = async (req, res) => {
  console.log("🚀 ~ handleEditUser:", req.body);

  try {
    const editedUser = await User.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    console.log("🚀 ~ editedUser:", editedUser);

    res.send("User edited");
  } catch (error) {
    console.log("🚀 ~ error EDITING USER:", error.message);

    res.send("Error in deleting a user" + error.message);
  }
};