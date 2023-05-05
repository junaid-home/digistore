const responseSerializer = (code, data, ...args) => {
  const type = code >= 300 ? "error" : "success";
  const message = typeof data === "string" ? data : null;

  const opts = args[0] || {};

  return {
    status: type,
    code,
    message,
    ...opts,
    data,
  };
};

export default responseSerializer;
