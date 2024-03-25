import { Favorite, Log, User } from "$app/models/index.js";
import { API } from "$app/api/index.js";

export const FETCH = async (req, res) => {
  const { name: fortnite_id, user } = req.query;

  try {
    const { data: response } = await API.get("stats/br/v2", {
      params: {
        name: fortnite_id,
      },
    });

    const favorite = await Favorite.findOne({ fortnite_id, user });
    const person = await User.findOne({ _id: user });

    const isMy = person?.fortnite_id === fortnite_id;

    await Log.create({ fortnite_id, user, isMy });

    const data = response.data;
    data.favorite = favorite;

    return res.status(200).send(data);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ message: error.message });
  }
};
