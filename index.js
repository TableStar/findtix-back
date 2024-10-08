require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");
const app = express();
const cors = require("cors");
const { development } = require("./config/config");
const { Sequelize } = require("sequelize");
const bearerToken = require("express-bearer-token");
// const { redisConnect } = require("./helper/redis");
// redisConnect();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());
app.use(bearerToken());


app.get("/", (req, res) => {
  return res.status(200).send("API RUNNING");
});

// DEFINE ROUTER
const {
  authsRouter,
  postsRouter,
  forgottenRouter,
  pictureRouter,
  eventsRouter,
  categoriesRouter,
  transactionRouter,
  citiesRouter,
  promotorRouter,
  ticketRouter,
} = require("./routers");
app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);
app.use("/auths", authsRouter);
app.use("/posts", postsRouter);
app.use("/tickets", ticketRouter);
app.use("/forgotten", forgottenRouter);
app.use("/profilepic", pictureRouter);
app.use("/transaction", transactionRouter);
app.use("/cities", citiesRouter);
app.use("/promotors", promotorRouter);

app.use("/public", express.static("public"));

// ERROR HANDLING
app.use((error, req, res, next) => {
  return res.status(error.rc || 500).send(error);
});

app.listen(PORT, () => {
  console.log("API RUNNING", PORT);
});
