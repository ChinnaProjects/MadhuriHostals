const { emailValidation } = require("../models/userValidation.js");
exports.login = async (req, res) => {
  try {
    const { admin_email_id, admin_password } = req.body;
    if (!admin_email_id) {
      return res.status(400).send("Email Id is missing");
    }
    if (!admin_password) {
      return res.status(400).send("Password is missing");
    }
    const user = await emailValidation(admin_email_id);
    console.log(user);
    if (!user) {
      return res.status(400).send("Email Id is not Found");
    }
    console.log("Provided Password:", admin_password);
    console.log("Stored Password:", user.admin_password);

    if (admin_password !== user.admin_password) {
      return res.status(400).send("Provided Password is in correct");
    }
    return res.status(200).send("User is login Successfully");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
