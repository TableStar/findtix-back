// CONTOH
// const accountsController = require("./accounts")

// module.exports = {
//     accountsController
// }
const authsController = require("./auths");
const postsController = require("./posts");
const forgottenController = require("./forgotten");
const pictureController = require("./picture");
module.exports = {
  authsController,
  postsController,
  forgottenController,
  pictureController,
};
