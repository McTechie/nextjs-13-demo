'use client'

import { useEffect } from 'react'

const SearchResultsError = ({ error, reset }: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error)
  }, [error])
  
  return (
    <div className='text-gray-500 text-sm mt-4 ml-4'>
      <p>Something went wrong!</p>
      <button onClick={() => reset()} className='text-white bg-rose-500 rounded-custom p-2 mt-4'>Reset error boundary</button>
    </div>
  )
}

export default SearchResultsError
