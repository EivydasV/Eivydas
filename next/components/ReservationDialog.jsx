import React, { Fragment, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Dialog, Transition } from '@headlessui/react'
import ReservationForm from './ReservationForm'
export default function ReservationDialog({ children }) {
  let [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-10 overflow-y-auto'
            onClick={() => setIsOpen(false)}
            onClose={() => setIsOpen(true)}
          >
            <div className='min-h-screen px-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-black/50' />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className='inline-block h-screen align-middle'
                aria-hidden='true'
              >
                &#8203;
              </span>
              <ReservationForm />
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}
