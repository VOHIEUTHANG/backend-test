import express from "express";
import configs from "./configs/index.js";
import dotenv from "dotenv";
import initRoute from "./router/index.js";

import database from "./database/index.js";

dotenv.config();

var app = express();
configs(app);
initRoute(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Starting server on http://localhost:${port}`);
});
