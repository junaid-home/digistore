import Joi from "joi";

export const LoginCredentialsValidator = (creds) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const { error } = schema.validate(creds);

  if (error) {
    return error.details[0];
  } else {
    return null;
  }
};

export const newUserValidator = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(25).required(),
    phone: Joi.string().length(11).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .min(5)
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    city: Joi.string().min(3).max(25).required(),
    postal_code: Joi.number().max(99999).required(),
    residential_address: Joi.string().max(255).required(),
  });

  const { error } = schema.validate(user);

  if (error) {
    return error.details[0];
  } else {
    return null;
  }
};
