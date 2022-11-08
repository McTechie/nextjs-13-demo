type PageProps = {
  params: {
    searchTerm: string
  }
}

type SearchResult = {
  organic_results: [
    {
      title: string
      link: string
      snippet: string
      thumbnail: string
      position: number
    }
  ]
}

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERP_API_KEY}`
  )

  // throw new Error('OOPSIE DAISY!')

  const data: SearchResult = await res.json()
  return data
}

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm)

  return (
    <div>
      <p className='text-gray-500 text-sm mt-4 ml-4'>You searched for: {searchTerm}</p>
      <ol className='space-y-5 p-5'>
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className='list-decimal'>
            <p className='font-bold'>{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div> 
  )
}

export default SearchResults
