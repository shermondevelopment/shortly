export default async (dataValidation, schema) => {
  try {
    await schema.validateAsync(dataValidation)
  } catch (error) {
    return error.message
  }
}
