import { Favorite } from "$app/models/index.js";

export const CREATE = async (req, res) => {
  const data = req.body;

  try {
    const favorite = await Favorite.create(data);

    return res.status(200).send({ message: "Favorite created", favorite });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const favorite = await Favorite.findOne({ _id: id });

    if (favorite) {
      return res.status(200).send({ message: "Favorite found", favorite });
    } else {
      return res.status(404).send({ message: "Favorite did not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req, res) => {
  const filter = req.query;

  try {
    const favorites = await Favorite.find(filter);

    return res.status(200).send({ message: "Data fetched", favorites });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const favorite = await Favorite.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );

    if (favorite) {
      return res.status(200).send({ message: "Favorite updated", favorite });
    } else {
      return res.status(404).send({ message: "Favorite did not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const favorite = await Favorite.findOneAndDelete({ _id: id });

    if (favorite) {
      return res.status(200).send({ message: "Favorite deleted", favorite });
    } else {
      return res.status(404).send({ message: "Favorite did not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
