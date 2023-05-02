import crypto from "crypto";

export const encryptPassword = (str) => {
  const salt = crypto.randomBytes(16).toString("hex");

  return new Promise<{ hash: string; salt: string }>((resolve, reject) => {
    crypto.pbkdf2(str, salt, 1000, 64, "sha512", (error, x) => {
      if (error) reject(error);

      resolve({ hash: x.toString("hex"), salt });
    });
  });
};

export const verifyPassword = async (hash, salt, str) => {
  const reHash = await new Promise((resolve, reject) => {
    crypto.pbkdf2(str, salt, 1000, 64, "sha512", (error, x) => {
      if (error) reject(error);

      resolve(x.toString("hex"));
    });
  });

  const isValidPassword = reHash === hash;

  return isValidPassword;
};
