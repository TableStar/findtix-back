// CONTOH
// const accountsRouter = require("./accounts");

// module.exports = {
//     accountsRouter,
// }
const eventsRouter = require("./events");
const categoriesRouter = require("./categories");
const authsRouter = require("./auths");
const postsRouter = require("./posts");
const forgottenRouter = require("./forgotten");
const pictureRouter = require("./picture");
const transactionRouter = require("./transactions");
const citiesRouter = require("./cities");
const ticketRouter = require("./tickets");
const promotorRouter = require("./promotor")

module.exports = {
    eventsRouter,
    categoriesRouter,
    authsRouter,
    postsRouter,
    forgottenRouter,
    pictureRouter,
    transactionRouter,
    citiesRouter,
    ticketRouter,
    promotorRouter
}