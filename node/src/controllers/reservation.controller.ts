import { RequestHandler } from 'express'
import moment from 'moment'
import ReservationModel from '../models/reservation.model'
import {
  CreateReservationInput,
  GetReservationByDateInput,
} from '../validation/reservation.validation'
export const createReservation: RequestHandler<{}, {}, CreateReservationInput> =
  async (req, res, next) => {
    const { name, date, phoneNumber, time, kayak } = req.body

    const createReservation = await ReservationModel.create({
      name,
      date,
      phoneNumber,
      time,
      kayak,
    })
    return res.status(201).json({ reservation: createReservation })
  }

export const getReservationByDate: RequestHandler<
  {},
  {},
  GetReservationByDateInput
> = async (req, res, next) => {
  const { date } = req.body
  const day = moment(date || moment()).startOf('day')

  const findReservations = await ReservationModel.find({
    date: {
      $gte: day.toDate(),
      $lte: moment(day).endOf('day').toDate(),
    },
  })
  return res.status(201).json({ reservations: findReservations })
}
