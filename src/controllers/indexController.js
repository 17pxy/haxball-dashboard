import Stats from "../models/Stats";

export const renderIndex = async (req, res) => {
  const count = await Stats.countDocuments({});
  const partidos = await Stats.find().lean();
  const fPartidos = partidos.map((x) => x.partidos);
  const onlinePlayers = partidos.filter((x) => x.isPlaying).length;
  const blacklistedPlayers = partidos.filter((x) => x.isBlacklisted).length;
  let totalpartidos = 0;

  for (let i = 0; i < fPartidos.length; i++) {
    totalpartidos += fPartidos[i];
  }
  res.render("index", {
    registered: count,
    games: totalpartidos,
    online: onlinePlayers,
    blacklisted: blacklistedPlayers,
  });
};
