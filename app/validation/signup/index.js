import Joi from 'joi'

const SignupValidation = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': `name is required`
  }),
  email: Joi.string().required().email().messages({
    'string.empty': `email is required`,
    'string.email': `email how format invalid`
  }),
  password: Joi.string()
    .required()
    .messages({ 'string.empty': `password is required` }),
  confirmPassword: Joi.string()
    .required()
    .messages({ 'string.empty': `confirmPassword is required` })
})

const SigninValidation = Joi.object({
  email: Joi.string().required().email().messages({
    'string.empty': 'email is required',
    'string.email': 'email how format invalid'
  }),
  password: Joi.string().required().messages({
    'string.empty': `password is required`
  })
})

export { SignupValidation, SigninValidation }
