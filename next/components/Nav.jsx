import Link from 'next/link'
import { useEffect } from 'react'
import {
  IoArrowUndoCircleSharp,
  IoAccessibility,
  IoBody,
} from 'react-icons/io5'
export default function Nav({ openNav }) {
  useEffect(() => {
    console.log('effect')
  }, [])
  return (
    <>
      {openNav && (
        <nav className='flex flex-col lg:flex-row gap-2 bg-gray-800 mt-5 lg:mt-0'>
          <Link href='/'>
            <h4 className='font-semibold flex items-center gap-2 cursor-pointer transition-colors py-2 px-4 rounded-full shadow-[0px_0px_5px_rgba(87,87,87,0.39)] shadow-sky-500 hover:text-white hover:bg-sky-500'>
              <IoArrowUndoCircleSharp />
              Pradinis puslapis
            </h4>
          </Link>

          <h4
            as={Link}
            href='/staffZone'
            className='font-semibold flex items-center gap-2 cursor-pointer transition-colors py-2 px-4 rounded-full shadow-[0px_0px_5px_rgba(87,87,87,0.39)] shadow-sky-500 hover:text-white hover:bg-sky-500'
          >
            <IoAccessibility />
            Darbuotjų zona
          </h4>

          <Link href='/'>
            <h4 className='font-semibold flex items-center gap-2 cursor-pointer transition-colors py-2 px-4 rounded-full shadow-[0px_0px_5px_rgba(87,87,87,0.39)] shadow-sky-500 hover:text-white hover:bg-sky-500'>
              <IoBody />
              Klientų zona
            </h4>
          </Link>
        </nav>
      )}
    </>
  )
}
