import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './haber-logo.png'

export default function Navbar() {
  return (
    <nav>
      {/* logo here */}
      <Image
        src= {Logo}
        alt="Haber Logo"
        width={70}
        quality={100}
        placeholder='blur'
      />

      <h1> Marcos Helpdesk </h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
