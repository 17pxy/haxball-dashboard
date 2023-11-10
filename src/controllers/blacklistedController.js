import Stats from "../models/Stats";

export const blacklistedUsers = async (req, res) => {
  const blacklisted = await Stats.find({ isBlacklisted: true }).lean();

  res.render("blacklisted", { blacklisted: blacklisted });
};
