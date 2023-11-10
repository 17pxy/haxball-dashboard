import Stats from "../models/Stats";

export const adminList = async (req, res) => {
  const admins = await Stats.find({ isAdminOFI: true }).lean();

  res.render("admins", { admins: admins });
};
