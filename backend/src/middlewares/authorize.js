import jwt from "jsonwebtoken";
import pool from "../database/config.js";

const verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.jwtSecret, (error, decoded) => {
      if (error) {
        return reject(error);
      }
      return resolve(decoded);
    });
  });
};

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({
      error: "Unauthorized!!!",
    });
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    return res.status(401).json({
      error: "Unauthorized!!!",
    });
  }

  try {
    const citizen = await verify(token);

    const user = await pool.query("SELECT _id from citizen WHERE _id = $1", [
      citizen.id,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({
        message: "User doesn't exists with that token/id",
      });
    }

    req.user = citizen.id;
    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Invalid or expired token" });
    }
    return res.status(500).json({ errorMessage: error.message });
  }
};

export default protect;
