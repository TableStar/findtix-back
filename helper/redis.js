const redis = require("redis");

const clientRedis = redis.createClient({ host:"localhost",port:6379 });

// const start = async () => {
//   await clientRedis.connect();
// };
// start();
clientRedis.on("error", (error) => {
  console.log(error);
});
clientRedis.on("connect", () => {
  console.log("Redis connected");
});

const redisConnect = async () => await clientRedis.connect();

module.exports = { clientRedis, redisConnect };
