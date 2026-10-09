
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FiArrowUpRight } from 'react-icons/fi'

const socialLinks = [
    {
        href: 'mailto:klnpskeminekiyga@outlook.com',
        icon: HiOutlineMail,
        label: 'E-posta',
    },
    {
        href: 'https://www.linkedin.com/in/emine-k%C4%B1yga-b68450198/',
        icon: FaLinkedinIn,
        label: 'LinkedIn',
    },
    {
        href: 'https://www.instagram.com/pskd.eminekiyga/',
        icon: FaInstagram,
        label: 'Instagram',
    },
]

const quickLinks = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'İletişim', href: '/contact' },
]

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="relative mt-auto overflow-hidden bg-[#302C2A] text-[#F8F6F3]">

            {/* ÜST DEKORATİF ÇİZGİ */}
            <div className="h-[2px] w-full bg-[#B5A69A]" />

            <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10 lg:pt-20">

                {/* ANA FOOTER */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr_0.8fr] lg:gap-10">

                    {/* LOGO VE TANITIM */}
                    <div className="flex flex-col items-start">

                        <Link href="/" className="group flex items-center gap-4">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-white/15 bg-white/5 p-2 transition-colors duration-300 group-hover:bg-white/10">
                                <Image src="/TerapiLogo.ico" alt="Emine Kıyga logo" width={54} height={54} className="h-auto max-h-full w-auto object-contain" />
                            </div>

                            <div>
                                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#C7B9AC]">
                                    Klinik Psikolog
                                </span>

                                <span className="mt-1 block font-serif text-[27px] tracking-tight text-[#F8F6F3]">
                                    Emine Kıyga
                                </span>
                            </div>
                        </Link>

                        <p className="mt-7 max-w-[320px] text-[14px] leading-[1.9] text-[#C4BAB2]">
                            Psikolojik süreçleri anlamaya yönelik bilimsel bir bakış açısı,
                            mesleki gelişim ve insanın duygu dünyasına bütüncül bir yaklaşım.
                        </p>

                        <div className="mt-7 h-px w-16 bg-[#B5A69A]/70" />

                    </div>

                    {/* HIZLI LİNKLER */}
                    <div>
                        <h3 className="mb-6 font-serif text-xl text-[#F8F6F3]">
                            Keşfet
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="group inline-flex items-center gap-2 text-[14px] text-[#C4BAB2] transition-colors duration-300 hover:text-white">
                                        <span>{item.label}</span>
                                        <FiArrowUpRight size={14} className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İLETİŞİM */}
                    <div>
                        <h3 className="mb-6 font-serif text-xl text-[#F8F6F3]">
                            İletişim
                        </h3>

                        <ul className="space-y-5">

                            <li className="flex items-start gap-3">
                                <HiOutlineMail size={20} className="mt-0.5 shrink-0 text-[#B5A69A]" />
                                <a href="mailto:klnpskeminekiyga@outlook.com" className="break-all text-[13px] leading-6 text-[#C4BAB2] transition-colors hover:text-white">
                                    klnpskeminekiyga@outlook.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaPhone size={16} className="mt-1 shrink-0 text-[#B5A69A]" />
                                <a href="tel:+905385438324" className="text-[14px] text-[#C4BAB2] transition-colors hover:text-white">
                                    +90 538 543 83 24
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <HiOutlineLocationMarker size={20} className="shrink-0 text-[#B5A69A]" />
                                <span className="text-[14px] text-[#C4BAB2]">
                                    İstanbul, Türkiye
                                </span>
                            </li>

                        </ul>
                    </div>

                    {/* SOSYAL MEDYA */}
                    <div>
                        <h3 className="mb-6 font-serif text-xl text-[#F8F6F3]">
                            Sosyal Medya
                        </h3>

                        <p className="mb-5 text-[13px] leading-6 text-[#C4BAB2]">
                            Sosyal medya hesapları ve mesleki paylaşımlar.
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={label} title={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8C8077]/50 bg-white/5 text-[#D5CBC3] transition-all duration-300 hover:-translate-y-1 hover:border-[#B5A69A] hover:bg-[#B5A69A] hover:text-[#302C2A]">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ALT FOOTER */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#8C8077]/30 pt-7 text-center md:flex-row md:text-left">
                    <p className="text-[12px] tracking-wide text-[#AFA39A]">
                        © {year} Emine Kıyga. Tüm hakları saklıdır.
                    </p>

                    <p className="text-[12px] text-[#AFA39A]">
                        Tasarım ve Geliştirme:{" "}
                        <a href="https://osianatech.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#E2D8CF] transition-colors duration-300 hover:text-white hover:underline hover:underline-offset-4">
                            OsianaTech
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    )
}
