import { decodeToken } from "../helpers/jwt";

const setAuthUser = (req, _res, next) => {
  const token = req.headers.authorization || req.headers.Authorization || "";

  const isAuthenticated = Boolean(decodeToken(token)?.id);

  if (isAuthenticated) req.user = decodeToken(token);

  next();
};

export default setAuthUser;
