const responseSerializer = (code, data) => {
  const type = code >= 300 ? "error" : "success";
  const message = typeof data === "string" ? data : null;

  return {
    status: type,
    code,
    message,
    data,
  };
};

export default responseSerializer;
