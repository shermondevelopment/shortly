import Joi from 'joi'

const SignupValidation = Joi.object({
  name: Joi.string()
    .required()
    .error(() => 'name is required'),
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .error(() => 'password is required'),
  confirmPassword: Joi.string()
    .required()
    .error(() => 'confirmPassword is required')
})

export default SignupValidation
