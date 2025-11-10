'use client'

import { FaInstagram, FaPhone, FaGooglePlusG, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
    { href: 'mailto:klnpskeminekiyga@outlook.com', icon: FaGooglePlusG },
    { href: 'https://www.linkedin.com/in/emine-k%C4%B1yga-b68450198/', icon: FaLinkedinIn },
    { href: 'https://www.instagram.com/pskd.eminekiyga/', icon: FaInstagram },
]

export const Footer = () => {
    return (
        <footer className="bg-[#2f3e46]/90 text-white pt-16 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid gap-24 sm:grid-cols-2 md:grid-cols-4">

                {/* Hakkımda */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Emine Kıyga</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Bireysel ruh sağlığı alanında danışanlarına bilimsel yöntemlerle destek veren klinik psikolog.
                    </p>
                </div>

                {/* Hızlı Linkler */}
                <div className='ml-12'>
                    <h3 className="text-xl font-semibold mb-4">Hızlı Linkler</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {[
                            { label: "Ana Sayfa", href: "/" },
                            { label: "Hakkımda", href: "/about" },
                            { label: "Çalışma Alanlarım", href: "/workingAreas" },
                            { label: "Blog", href: "/blog" },
                            { label: "İletişim", href: "/contact" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className="transition-all duration-300 hover:underline hover:text-[var(--color-accentMint)] hover:scale-[1.05] inline-block"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* İletişim */}
                <div className='ml-12'>
                    <h3 className="text-xl font-semibold mb-4">İletişim</h3>
                    <ul className="text-sm text-white space-y-2">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-[var(--color-accentMint)]" size={18} />
                            klnpskeminekiyga@outlook.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-[var(--color-accentMint)]" size={18} /> +90 538 543 83 24
                        </li>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[var(--color-accentMint)]" size={18} />
                            İstanbul, Türkiye
                        </li>
                    </ul>
                </div>

                {/* Sosyal Medya */}
                <div className='ml-12'>
                    <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
                    <ul className="flex space-x-3 mt-2">
                        {socialLinks.map(({ href, icon: Icon }, i) => (
                            <li key={i}>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#2f3e46] text-[#f8f9fa] hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[var(--color-accentMint)] shadow-sm"
                                >
                                    <Icon />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Alt Satır */}
            <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-600 pt-6">
                © 2025 OsianaTech. Tüm hakları saklıdır.
            </div>
        </footer>
    )
}
