import { User, Log } from "$app/models/index.js";

export const BASIC = async (req, res) => {
  const { user } = req.query;

  try {
    const person = await User.findOne({ _id: user }).populate("role");

    if (person.role.value !== "superuser") {
      return res
        .status(403)
        .send({ message: "You don't have permission to this action." });
    }

    // User
    const countAllUsers = await User.countDocuments();
    const countVerifiedUsers = await User.countDocuments({
      fortnite_id: { $ne: null },
    });

    // Fetch top searched usernames
    const topSearchedUsernames = await Log.aggregate([
      { $match: { isMy: false } },
      {
        $group: {
          _id: "$fortnite_id", 
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    // Categorize user registrations by date
    const userRegistrationsByDate = await User.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          date: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: {
                $dateFromParts: {
                  year: "$_id.year",
                  month: "$_id.month",
                  day: "$_id.day",
                },
              },
            },
          },
          count: 1,
        },
      },
    ]);

    return res.status(200).send({
      message: "Data fetched",
      countAllUsers,
      countVerifiedUsers,
      topSearchedUsernames,
      userRegistrationsByDate,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
