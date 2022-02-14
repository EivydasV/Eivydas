import React, { Fragment, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Dialog, Transition } from '@headlessui/react'
import ReservationDialog from './ReservationDialog'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker'
import { IoCloseCircleSharp } from 'react-icons/io5'
import * as Yup from 'yup'

export default function ReservationForm() {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const onSubmit = async (values) => {
    console.log(values)
  }
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const ReservationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    date: Yup.date().required('Required'),
    time: Yup.date().required('Required'),
  })
  return (
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <div className='inline-block w-full max-w-md px-6 py-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-blueGray-900/95  shadow-xl rounded-2xl border border-white/30'>
        <Dialog.Title
          as='h3'
          className='text-xl font-bold border-b border-white/10 pb-1 flex justify-between items-center'
        >
          Reservation
          <IoCloseCircleSharp className='cursor-pointer' />
        </Dialog.Title>
        <div className=''>
          <Formik
            validationSchema={ReservationSchema}
            initialValues={{ name: '', phoneNumber: '', date: '', time: '' }}
            onSubmit={onSubmit}
          >
            {({ setFieldValue, errors, touched }) => {
              console.log(errors)
              return (
                <Form>
                  <Field
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    as={TextField}
                    fullWidth
                    label='Name'
                    variant='standard'
                    margin='dense'
                    name='name'
                  />
                  <Field
                    error={touched.phoneNumber && !!errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    as={TextField}
                    fullWidth
                    label='Phone Number'
                    variant='standard'
                    margin='dense'
                    name='phoneNumber'
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label='Select date'
                      value={date}
                      disablePast
                      onChange={(newValue) => {
                        setFieldValue('date', newValue.toISOString())
                        setDate(newValue)
                      }}
                      renderInput={(params) => (
                        <Field
                          as={TextField}
                          error={touched.date && !!errors.date}
                          helperText={touched.date && errors.date}
                          {...params}
                          name='date'
                          variant='standard'
                          fullWidth
                          margin='dense'
                        />
                      )}
                    />
                    <TimePicker
                      ampm={false}
                      renderInput={(params) => (
                        <Field
                          as={TextField}
                          {...params}
                          error={touched.time && !!errors.time}
                          helperText={touched.time && errors.time}
                          variant='standard'
                          fullWidth
                          margin='dense'
                        />
                      )}
                      label='Select Time'
                      value={time}
                      onChange={(newValue) => {
                        setFieldValue('time', newValue.toISOString())

                        setTime(newValue)
                      }}
                      //   shouldDisableTime={(timeValue, clockType) => {
                      //     if (clockType === 'hours' && timeValue % 2) {
                      //       return true
                      //     }

                      //     return false
                      //   }}
                    />
                  </LocalizationProvider>

                  <button
                    type='submit'
                    className='mt-4 py-2 rounded block bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 from-cyan-500 to-blue-500 w-full text-lg font-semibold uppercase'
                  >
                    Submit
                  </button>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </Transition.Child>
  )
}
