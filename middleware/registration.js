const { checkEmailExists } = require("../models/userValidation.js");
const { db } = require("../config/database.js");

exports.registration = async (req, res) => {
  console.log("Received request at /registration");
  try {
    const { admin_name, admin_email_id, admin_password } = req.body;
    console.log(admin_name, admin_email_id, admin_password);

    // Validations
    if (!admin_name) {
      return res.status(400).send("Admin Name is Required");
    }
    if (!admin_email_id) {
      return res.status(400).send("Admin Email Id is Required");
    }
    if (!admin_password) {
      return res.status(400).send("Admin Password is Required");
    }

    const emailExists = await checkEmailExists(admin_email_id);
    if (emailExists) {
      return res.status(409).send("Email id already exists");
    }

    const insertQuery =
      "INSERT INTO Admin_login_reg (admin_name, admin_email_id, admin_password) VALUES (?,?,?)";
    await db.query(insertQuery, [admin_name, admin_email_id, admin_password]);
    return res.status(200).send("Registration is successfully completed");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
