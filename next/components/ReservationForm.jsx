import React, { Fragment } from 'react'
import { Formik, Field, Form } from 'formik'
import { Dialog, Transition } from '@headlessui/react'
import ReservationDialog from './ReservationDialog'
import TextField from '@mui/material/TextField'

export default function ReservationForm() {
  return (
    <ReservationDialog>
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
            className='text-xl font-bold border-b border-white/10 pb-1'
          >
            Login
          </Dialog.Title>
          <div className='mt-2'>
            <Formik initialValues={{ email: '', password: '' }}>
              {(formik) => (
                <Form>
                  <TextField
                    fullWidth
                    id='input-with-icon-textfield'
                    label='TextField'
                    variant='standard'
                  />
                </Form>
              )}
            </Formik>
          </div>

          {/* <div className='mt-4'>
      <button
        type='button'
        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
        onClick={() => setIsOpen(false)}
      >
        Got it, thanks!
      </button>
    </div> */}
        </div>
      </Transition.Child>
    </ReservationDialog>
  )
}
