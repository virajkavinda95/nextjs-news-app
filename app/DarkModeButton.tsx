"use client"

import React,{useEffect,useState} from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid'

function DarkModeButton() {
    const [mounted,setMounted] = useState(false)
    const {systemTheme, theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted){
        return null
    }

    const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
        {
            currentTheme === "dark" ?
            (
                // <button type='button' className='h-8 w-8 cursor-pointer text-yellow-500' onClick={() => setTheme("light")}>Set Light</button>
                <SunIcon className='h-8 w-8 cursor-pointer text-yellow-500' onClick={() => setTheme("light")} />
            ):(
                <MoonIcon className='h-8 w-8 cursor-pointer text-gray-900' onClick={() => setTheme("dark")} />
                // <button type='button' className='h-8 w-8 cursor-pointer text-gray-900' onClick={() => setTheme("dark")}>Set Dark</button>
            )
        }
    </div>
  )
}

export default DarkModeButton