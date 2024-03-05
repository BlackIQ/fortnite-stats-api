import { User } from "$app/models/index.js";

export const WHOAMI = async (req, res) => {
  const data = req.body;

  console.log(data);
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id }).populate({
      path: "role",
      populate: {
        path: "permissions",
        select: "label value",
      },
    });

    if (user) {
      return res.status(200).send({ message: "User found", user });
    } else {
      return res.status(404).send({ message: "User did not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  const filter = req.query;

  try {
    const users = await User.find(filter).populate({
      path: "role",
    });

    return res.status(200).send({
      message: "Data fetched",
      users,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    if (user) {
      return res.status(200).send({ message: "User updated", user });
    } else {
      return res.status(404).send({ message: "User did not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndDelete({ _id: id });

    if (user) {
      return res.status(200).send({ message: "User deleted" });
    } else {
      return res.status(404).send({ message: "User did not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
