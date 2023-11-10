import express from "express";
import path from "path";
import morgan from "morgan";
import ejs from 'ejs';
import indexRoutes from "./routes/index.routes";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

export default app;