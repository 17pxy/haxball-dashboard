import Stats from "../models/Stats";

export const ranking = async (req, res) => {
  const allStats = await Stats.find().lean();

  const topGoles = allStats.sort((a, b) => b.goles - a.goles).slice(0, 10);
  const topAsistencias = allStats
    .sort((a, b) => b.asistencias - a.asistencias)
    .slice(0, 10);
  const topPartidos = allStats
    .sort((a, b) => b.partidos - a.partidos)
    .slice(0, 10);

  res.render("rankings", {
    topGoles: topGoles,
    topAsistencias: topAsistencias,
    topPartidos: topPartidos,
  });
};
