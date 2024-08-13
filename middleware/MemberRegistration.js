const { checkMemberEmailExists } = require("../models/userValidation.js");
const { db } = require("../config/database.js");
exports.memberRegistration = async (req, res) => {
  console.log("Member Registration is started");
  try {
    const {
      name,
      email_address,
      aadhar_card_number,
      sharing,
      date_of_joining,
      guest_permanent,
      veg_non_veg,
      date_of_leaving,
      fees,
      company_name,
      vehicle_type,
      company_address,
      permanent_address,
      room_number,
      mobile_number,
    } = req.body;
    //validations
    if (!name) {
      return res.status(400).send("Member Name is Required");
    }
    if (!email_address) {
      return res.status(400).send("Member Email Address is Required");
    }
    if (!aadhar_card_number) {
      return res.status(400).send("Aadhar Number is Required");
    }
    if (!sharing) {
      return res.status(400).send("Please select the sharing");
    }
    if (!date_of_joining) {
      return res.status(400).send("Please select Date of joining");
    }
    if (!guest_permanent) {
      return res.status(400).send("Please select type of Guest");
    }
    if (!veg_non_veg) {
      return res.status(400).send("Please select Veg or Non-Veg");
    }
    if (!date_of_leaving) {
      return res.status(400).send("Please select Date of Leaving");
    }
    if (!fees) {
      return res.status(400).send("Please allocate Fee Details");
    }
    if (!company_name) {
      return res.status(400).send("Please Provide Company Name");
    }
    if (!vehicle_type) {
      return res.status(400).send("Please provide Vehicle Type");
    }
    if (!company_address) {
      return res.status(400).send("Please provide Company Address");
    }
    if (!permanent_address) {
      return res.status(400).send("Please provide Permanent Address");
    }
    if (!room_number) {
      return res.status(400).send("Please allocate a room");
    }
    if (!mobile_number) {
      return res.status(400).send("Please provide mobile number");
    }
    const user = await checkMemberEmailExists(email);
    if (user) {
      return res.status(409).send("Member Email Address is Exists");
    }
    const query =
      "insert into MemberRegistration (name,email_address,aadhar_card_number,sharing,date_of_joining,guest_permanent,veg_non_veg,date_of_leaving,fees,company_name,vehicle_type,company_address,permanent_address,room_number,mobile_number)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    return res.status(200).send("Member Registration is Successful");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
