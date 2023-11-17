// CONTOH
// const accountsController = require("./accounts")

// module.exports = {
//     accountsController
// }
const eventsController = require("./events")
const categoriesController = require("./categories")
const authsController = require("./auths");
const postsController = require("./posts");
const forgottenController = require("./forgotten");
const pictureController = require("./picture");
module.exports = {
    eventsController,
    categoriesController,
    authsController,
    postsController,
    forgottenController,
    pictureController,
}