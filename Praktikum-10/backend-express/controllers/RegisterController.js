const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const prisma = require("../prisma/client");

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    const { password, ...userWithoutPassword } = user;

    res.status(201).json({
      success: true,
      message: "Register successfully",
      data: userWithoutPassword,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { register };
