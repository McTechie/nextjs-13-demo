'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={search}
        className='px-6 py-2 border-b border-emerald-400 rounded-2xl mr-4'
        placeholder='Enter the search term'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='bg-emerald-600 px-2 py-1 font-semibold rounded-custom text-white'>
        Search
      </button>
    </form>
  )
}

export default Search
