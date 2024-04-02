import { User, Log } from "$app/models/index.js";
import { botConfig } from "$app/config/index.js";
import axios from "axios";

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

export const REMINDER = async (req, res) => {
  try {
    // Calculate date 2 days ago
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    const usersWithoutUsername = await User.find({
      fortnite_id: null,
      createdAt: { $lte: twoDaysAgo },
    });

    const message = `
    Hello there!

We noticed that you haven't set a Fortnite username for your account yet. Setting a Fortnite username helps personalize your experience and makes it easier for your friends to find you.

Please take a moment to set a Fortnite username by following these simple steps:
1. Open bot (this bot).
2. Enter /set with your Fortnite username after command. Like /set GNU_Amir
3. To be sure about it, enter /my command to get your stat!

If you need any assistance or have any questions, feel free to reach out to us. Thank you for using our service!

Best regards,
Battle Royale Stats.
`;

    const data = {
      chat_id: 6731393756,
      text: message,
    };

    const baseUrl = `https://api.telegram.org/bot${botConfig.botToken}/sendMessage`;

    try {
      const a = await axios.post(baseUrl, data);

      console.log(a.data);
    } catch (error) {
      console.log(error);
    }

    // Send message to users without username
    usersWithoutUsername.forEach((user) => {
      console.log(
        `Sending message to user ${user.telegram_id} to set a username.`
      );
    });

    return res.status(200).send({ message: "Ok" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
