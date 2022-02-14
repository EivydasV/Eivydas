import mongoose from 'mongoose'
// import multer from 'multer'
import { Response, Request, NextFunction, ErrorRequestHandler } from 'express'
import createError, { HttpError } from 'http-errors'
import { ZodError } from 'zod'
import log from './logger'

const handleCastErrorDB = () => {
  return new createError.NotFound('Invalid Id')
}
const handleDuplicateError = () => {
  return new createError.Conflict('Duplicate field values')
}
const handleValidationError = () => {
  return createError(422, 'Invalid field values')
}

const handleZodError = (err: ZodError) => {
  return createError(422, err.format())
}
export default (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log({ err })
  if (err instanceof mongoose.Error.CastError) err = handleCastErrorDB()
  if (err instanceof ZodError) err = handleZodError(err)
  if (err.code === 11000) err = handleDuplicateError()

  // if (err instanceof multer.MulterError) error = handleMulterError(error)
  // if (err.name === "Error") error = handleRedisError(error);

  if (!(err instanceof createError.HttpError)) {
    err = new createError.InternalServerError()
  }
  return res.status(err.statusCode).json(err)
}
