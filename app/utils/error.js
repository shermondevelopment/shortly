export default async (dataValidation, schema) => {
  try {
    await schema.validate(dataValidation, schema)
  } catch (error) {
    return error.message
  }
}
