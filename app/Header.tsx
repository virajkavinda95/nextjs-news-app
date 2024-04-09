import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'


function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 items-center p-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <Link href={"/"} prefetch={false}>
                <h1 className='font-serif text-4xl text-center'>NextJS <span className='underline decoration-5 decoration-orange-400'>News</span> Center</h1>
            </Link>


            <div className='flex items-center justify-end space-x-2'>
                <DarkModeButton/>
                <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>Subscribe Now</button>
            </div>
        </div>

        <NavLinks />
        <SearchBox />
    </header>

  )
}

export default Header