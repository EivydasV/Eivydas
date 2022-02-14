import z, { object, string, date, nativeEnum } from 'zod'
import ReservationModel, { Kayaks } from '../models/reservation.model'
import validator from 'validator'
import moment from 'moment'

export const createReservationValidation = object({
  body: object({
    name: string().max(50),
    phoneNumber: string().max(50),
    time: string(),
    date: string(),
    kayak: nativeEnum(Kayaks),
  })
    .refine(
      (data) => moment(data.time).hours() > 8 && moment(data.time).hours() < 20,
      { message: 'Time must be between 08 and 20', path: ['time'] }
    )
    .refine((data) => validator.isMobilePhone(data.phoneNumber, 'lt-LT'), {
      message: 'Invalid phone number',
      path: ['phoneNumber'],
    }),
})
export const getReservationByDateValidation = object({
  body: object({
    date: date().optional(),
  }),
})
export type CreateReservationInput = z.infer<
  typeof createReservationValidation
>['body']
export type GetReservationByDateInput = z.infer<
  typeof getReservationByDateValidation
>['body']
