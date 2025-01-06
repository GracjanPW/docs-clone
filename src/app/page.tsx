import Link from "next/link"

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-300">
      <p>Home</p>
      <Link href={'/documents/124'}>Quick doc</Link>
    </div>
  )
}

export default Home;
