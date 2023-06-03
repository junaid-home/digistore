import Joi from "joi";

export const checkoutItemsValidator = (items) => {
  const item = Joi.object().keys({
    color: Joi.string().required(),
    size: Joi.string().required(),
    quantity: Joi.number().required(),
    product: Joi.string().uuid().required(),
  });

  const schema = Joi.array().items(item);

  const { error } = schema.validate(items);

  if (error) {
    return error.details[0];
  } else {
    return null;
  }
};
