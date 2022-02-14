import { getReservationByDate } from './../controllers/reservation.controller'
import express from 'express'
import { createReservation } from '../controllers/reservation.controller'
import validateResource from '../middlewares/validateResource'
import {
  createReservationValidation,
  getReservationByDateValidation,
} from '../validation/reservation.validation'

const router = express.Router()

router.post(
  '/get-by-date',
  validateResource(getReservationByDateValidation),
  getReservationByDate
)
router
  .route('/')
  .post(validateResource(createReservationValidation), createReservation)
export default router
