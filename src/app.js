import express from "express";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

import index from "./routes/index";
import api from "./routes/api";
import webhook from "./routes/webhook";
import { mongodb } from "./config/connection";

// DATABASE SETUP
// mongoose.connect(config.connection);
// // Handle the connection event
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, `unable to connect to database: ${config.connection}`));

// db.once('open', () => {
//   console.log("DB connection alive");
// });

let app = express();

app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/v1", api);
app.use("/v1/webhook", webhook);

app.use("/v1/status", (req, res) => {
  res.status(200).json({
    success: true,
    name: "Messages API",
    version: "1.0",
    status: "green"
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error" });
});

module.exports = app;
