const { poster } = require("../models");
const { profileImages } = require("../models");

module.exports = {
  createPost: async (req, res, next) => {
    try {
      console.log(req.userData.role);
      console.log(req.files);
      if (req.userData.role === "attendee" || req.userData.role === "creator") {
        // await poster.create({});
        arrayFileName = req.files.map((val) => {
          return { images: val.filename };
        });
        console.log(arrayFileName);
        await poster.create(
          {
            posts: req.body.posts,
            profileImages: arrayFileName,
          },
          {
            include: [profileImages]
          }
        );
        return res.status(200).send({ message: "post successful" });
      } else {
        return res.status(401).send({ message: "Unauthorized LMAO" });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
