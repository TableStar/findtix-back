// CONTOH
// const accountsRouter = require("./accounts");

// module.exports = {
//     accountsRouter,
// }
const authsRouter = require("./auths");
const postsRouter = require("./posts");
const forgottenRouter = require("./forgotten");
const pictureRouter = require("./picture");
module.exports = {
  authsRouter,
  postsRouter,
  forgottenRouter,
  pictureRouter,
};
