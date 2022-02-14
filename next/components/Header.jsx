import Link from 'next/link'
import { useState, useRef } from 'react'
import {
  IoArrowUndoCircleSharp,
  IoAccessibility,
  IoBody,
  IoMenu,
} from 'react-icons/io5'
import useIntersection from '../hooks/useIntersection'
import Nav from './Nav'
export default function Header() {
  const [openNav, setopenNav] = useState(true)
  return (
    <header className='px-12 py-4 lg:flex-row lg:items-center flex-col bg-slate-800 flex lg:justify-between shadow-slate-800'>
      <div className='flex justify-between items-center flex-grow'>
        <Link href='/'>
          <h1 className='text-xl font-bold uppercase tracking-wide cursor-pointer shadow text-sky-400'>
            Baidarių rezervacijos sistema
          </h1>
        </Link>
        <div className='lg:hidden'>
          <IoMenu size={25} onClick={() => setopenNav(!openNav)} />
        </div>
      </div>
      <Nav openNav={openNav} />
    </header>
  )
}
