import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../../models/user.mjs"; 
import { config } from "../../config/config.mjs";

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

const signup = async (email, password) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });

  return { id: newUser.id, email: newUser.email };
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return generateToken(user);
};

module.exports = { signup, login };
