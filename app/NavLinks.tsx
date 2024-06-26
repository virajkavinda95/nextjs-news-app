"use client"
import React from 'react'
import { categories } from '@/constants'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

function NavLinks() {

  const pathname = usePathname()

  const isActive = (path:String) => {
    return pathname?.split('/').pop() === path;
  }

  return (
    <nav className='grid grid-cols-5 md:grid-cols-8 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b'>
        {
            categories.map((category) => (
                <NavLink key={category}  category={category} isActive={isActive(category)}/>
            ))
        }
    </nav>
  )
}

export default NavLinks