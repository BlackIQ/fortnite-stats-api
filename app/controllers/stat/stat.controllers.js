import { API } from "$app/api/index.js";

export const FETCH = async (req, res) => {
  const { name } = req.query;

  try {
    const { data: response } = await API.get("stats/br/v2", {
      params: {
        name,
      },
    });

    const data = response.data;

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
