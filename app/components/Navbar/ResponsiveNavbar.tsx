'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { CgClose } from 'react-icons/cg'

const links = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımda', href: '/about' },
    { name: 'Çalışma Alanlarım', href: '/workingAreas' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/contact' },
]

const ResponsiveNavbar = () => {
    const pathname = usePathname()
    const [navOpen, setNavOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setNavOpen(false)
    }, [pathname])

    return (
        <>
            {/* Navbar */}
            <header
                className={`fixed w-full z-50 transition-all duration-300
                    ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-light tracking-wide text-[var(--color-textGray)]">
                        <span className="text-[var(--color-textGray)]">KLİNİK PSİKOLOG</span> <span className="font-semibold">EMİNE</span> KIYGA
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-base font-medium text-[var(--color-textGray)] after:block after:content-[''] after:absolute
                after:h-[3px] after:bg-[var(--color-accentMint)] after:w-full after:scale-x-0 hover:after:scale-x-100
                after:transition-transform after:duration-300 after:origin-right`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile icon */}
                    <button
                        className="md:hidden text-3xl text-[var(--color-deepPurple)] cursor-pointer"
                        onClick={() => setNavOpen(true)}
                        aria-label="Menüyü Aç"
                    >
                        <HiBars3BottomRight />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 bg-opacity-50 transition-opacity duration-300 ease-in-out
        ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setNavOpen(false)}
            />

            <aside
                className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[var(--color-deepPurple)] text-white z-50 p-6 space-y-6 transform transition-transform duration-500 ease-in-out
        ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-end">
                    <CgClose
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setNavOpen(false)}
                    />
                </div>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="relative group block text-lg font-semibold text-[var(--color-cloudWhite)] transition-all duration-300"
                        onClick={() => setNavOpen(false)} // Menü kapansın tıklanınca
                    >
                        {/* Link metni */}
                        <span className="z-10 relative">{link.name}</span>

                        {/* Hover çizgisi */}
                        <span
                            className="absolute left-0 bottom-0 h-[4px] w-full scale-x-0 group-hover:scale-x-50 origin-left
      transition-transform duration-500 bg-gradient-to-r from-[#2f3e46] to-[#84a98c]"
                        ></span>
                    </Link>
                ))}
            </aside>
        </>
    )
}

export default ResponsiveNavbar
