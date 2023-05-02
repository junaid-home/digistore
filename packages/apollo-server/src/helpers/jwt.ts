import Jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const token = Jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d" /* expires in 7 days*/,
  });

  return token;
};

export const decodeToken = (token) => {
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (err) {
    return err.message;
  }
};
