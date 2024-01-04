const user = require("../models/userSchema.js");

//get the specified wiki using the component name
const getPuck = async (req, res) => {
  try {
    const { componentName } = req.params;
    const db = await user.findOne({ componentName: componentName });

    if (db) {
      return res.status(200).send({ message: "Data fetched successfully", db });
    } else {
      return res.status(404).send({ message: "No data found in the DB" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server-side error" });
  }
};

//add Wiki
const addPuck = async (req, res) => {
  try {
    const { data, config, componentName } = req.body || {};
    console.log("Request Body:", req.body);

    const newUser = new user({ data, config, componentName });
    const result = await newUser.save();
    res.status(200).json({ message: "Puck successfully", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server-side error" });
  }
};

// const updateUser = async (req, res) => {
//   try {
//     const { _id, ...updateData } = req.body; // Assuming the updated data is sent in the request body

//     console.log("Data :", updateData);
//     console.log("Id :", _id);

//     const updatedUser = await user.findByIdAndUpdate(_id, updateData, {
//       new: true,
//     });

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Updated successfully", user: updatedUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

//delete
const deletePuck = async (req, res) => {
  try {
    const { id } = req.params || {};
    if (!id) {
      return res.status(400).send({ message: "Required field is missing" });
    }

    const deletedUser = await user.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ message: "User data deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server error" });
  }
};

module.exports = {
  getPuck,
  addPuck,
  deletePuck,
};
