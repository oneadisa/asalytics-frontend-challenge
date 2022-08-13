/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
// import '../styles/globals.css'

export default function Navbar () {

    return (
           <nav>
      <div className="logo">
        <img src="/vercel.svg" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    </nav>
    )
}