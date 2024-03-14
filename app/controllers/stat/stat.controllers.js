import { Favorite } from "$app/models/index.js";
import { API } from "$app/api/index.js";

export const FETCH = async (req, res) => {
  const { name, user } = req.query;

  try {
    const { data: response } = await API.get("stats/br/v2", {
      params: {
        name,
      },
    });

    const favorite = await Favorite.findOne({ fortnite_id: name, user });

    const data = response.data;
    data.favorite = favorite;

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
