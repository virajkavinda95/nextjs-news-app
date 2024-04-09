"use client"

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function SearchBox() {

    const [input, setInput] = useState("")
    const router = useRouter();

    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!input) return;

        router.push(`/search?term=${input}`)
    }

  return (
    <form className='max-w-6xl mx-auto flex items-center justify-between' onSubmit={handleSearch}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400 flex-1' placeholder='search news...' />

        <button type='submit' className='text-orange-400 disabled:text-gray-400'>Search</button>
    </form>
  )
}

export default SearchBox