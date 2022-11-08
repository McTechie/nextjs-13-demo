import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-5 bg-emerald-600 flex justify-evenly lg:px-40'>
      <Link href='/' className='px-3 py-2 bg-amber-400 text-amber-700 rounded-custom'>
        Home
      </Link>
      <Link href='/todos' className='px-3 py-2 bg-amber-400 text-amber-700 rounded-custom'>
        Todos
      </Link>
      <Link href='/search' className='px-3 py-2 bg-amber-400 text-amber-700 rounded-custom'>
        Search
      </Link>
    </header>
  )
}

export default Header
