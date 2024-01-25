import User from "../models/userModel.js";

export const testController = (req, res) => {
  res.json({
    success: true,
    message: "Test message success",
  });
};
