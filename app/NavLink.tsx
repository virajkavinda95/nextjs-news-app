import Link from 'next/link'
import React from 'react'

type Props = {
    category:String,
    isActive: boolean
}

function NavLink({category, isActive}:Props) {
  return (
    <Link href={`/news/${category}`} className={`navLink ${isActive && 'undeline decoration-orange-400 underline-offset-4 font-bold text-lg'}`}>
        {category}
    </Link>
  )
}

export default NavLink