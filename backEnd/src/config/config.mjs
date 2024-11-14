import dotenv from "dotenv";

dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || "jwt_secret_key",
  jwtExpiresIn: "1h",
//   db: {
//     username: process.env.DB_USER || "root",
//     password: process.env.DB_PASS || "password",
//     database: process.env.DB_NAME || "my_database",
//     host: process.env.DB_HOST || "127.0.0.1",
//     dialect: "mysql",
//   },
};
