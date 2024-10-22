import jwt from "jsonwebtoken";

const generateToken = (_id) => {
  return jwt.sign(
    {
      id: _id,
    },
    process.env.jwtSecret,
    { expiresIn: "30d" },
  );
};

export default generateToken;
