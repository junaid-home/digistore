import { decodeToken } from "../helpers/jwt";

const setAuthContext = async ({ req }) => {
  const token = req.headers.authorization || "";

  const isAuthenticated = Boolean(decodeToken(token)?.id);

  let user;
  if (isAuthenticated) user = decodeToken(token);

  return { isAuthenticated, user };
};

export default setAuthContext;
