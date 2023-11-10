import app from './app';
import './database';
import { PORT } from "./config";

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);