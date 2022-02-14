import { getModelForClass, ModelOptions, Prop, Pre } from '@typegoose/typegoose'
import validator from 'validator'

export enum Kayaks {
  kayak1 = 'kayak1',
  kayak2 = 'kayak2',
  kayak3 = 'kayak3',
}
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Reservation {
  @Prop({ required: true, trim: true, maxlength: 50 })
  name!: string
  @Prop({
    required: true,
    trim: true,
    maxlength: 50,
    validate: {
      validator: (phone: string) => validator.isMobilePhone(phone, 'lt-LT'),
      message: (props) => `${props.path} is invalid`,
    },
  })
  phoneNumber!: string

  @Prop({ required: true })
  time!: Date

  @Prop({ required: true })
  date!: Date
  @Prop({ enum: Kayaks, required: true })
  kayak!: Kayaks
}

const ReservationModel = getModelForClass(Reservation)
export default ReservationModel
