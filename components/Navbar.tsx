/* eslint-disable @next/next/no-img-element */
// import Link from 'next/link'


export default function Navbar () {

    return (
    <nav>
      <div className="logo">
        <img src="/logo.png" alt="site logo" width={200} height={100} />
      </div>
      <button className="button-nav" role="button">ANALYSE ASAs</button>
    </nav>
    )
}