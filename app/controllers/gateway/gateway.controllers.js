import { User, Role } from "$app/models/index.js";

export const HANDLE = async (req, res) => {
  const data = req.body;

  try {
    data.telegram_id = data.id;

    const user = await User.findOne({ telegram_id: data.telegram_id });

    if (!user) {
      const role = await Role.findOne({ value: "user" });

      await User.create({ ...data, role: role._id });

      return res.status(200).send({ message: "Registered", user });
    }

    await User.findOneAndUpdate(
      { telegram_id: data.telegram_id },
      { $set: data }
    );

    return res.status(200).send({ message: "Exists", user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
};
