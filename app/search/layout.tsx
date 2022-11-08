import Search from './Search'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex justify-center space-x-4 divide-x-2 p-5'>
      <div>
        <h1>Search</h1>
      </div>
      <div className='pl-5'>
        <Search />
        <div>{children}</div>
      </div>
    </main>
  )
}
