'use client'
import { useState } from 'react'
import { Sparkles, Menu } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Ucapan', href: '#ucapan' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Doa', href: '#doa' },
]

export default function NavMain() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#202046]/70 to-[#232946]/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap md:flex-nowrap justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-purple-400 flex items-center gap-2 cursor-default select-none">
          <Sparkles className="text-pink-400" /> WeddingWish
        </span>

        {/* Hamburger Button for Mobile only */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
          >
            <Menu className="text-white w-7 h-7" />
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 md:gap-8 font-medium text-white/90 w-full md:w-auto mt-4 md:mt-0 bg-[#232946]/90 md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer rounded-md px-3 py-2 transition-colors hover:text-pink-400 hover:bg-pink-400/10 text-base ${
                active === link.name
                  ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg'
                  : ''
              }`}
              onClick={() => {
                setActive(link.name)
                setOpen(false)
              }}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
