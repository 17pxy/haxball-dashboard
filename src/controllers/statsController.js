import Stats from "../models/Stats";

export const statsPagination = async (req, res) => {
  try {
    let perPage = 9;
    let page = req.params.page || 1;

    const stats = await Stats.find()
      .lean()
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Stats.countDocuments({});

    res.render("stats", {
      stats: stats,
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
};
