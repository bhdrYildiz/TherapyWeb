'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Arka Plan Resmi - Blur efekti ile */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Duygularibastirmak.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* İçerik */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
                <div className="space-y-6">
                    {/* PSİKOLOJİK DANIŞMAN - En üst, büyük */}
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide"
                    >
                        KLİNİK PSİKOLOG
                    </motion.h1>

                    {/* İSİM - Daha büyük */}
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide"
                    >
                        EMİNE KIYGA
                    </motion.h2>

                    {/* Hizmetler Listesi - Küçük, ortalanmış */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-2 text-3xl md:text-4xl lg:text-3xl mt-4"
                    >
                        <h3>Bireysel Psikoterapi</h3>
                        <h3>Ergenlere Yönelik Psikoterapi</h3>
                        <h3>Yüz yüze ve Online Psikoterapi</h3>
                        <h3>Bütüncül Psikoterapi</h3>
                    </motion.div>

                    {/* Randevu Butonu - Mavi, altta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-4"
                    >
                        <Link href="/contact"
                            className="inline-block mt-8 text-base font-semibold text-[#2f3e46] hover:text-[#f8f9fa] bg-[var(--color-accentMint)] hover:bg-[#5c5470] px-6 py-3 rounded transition-colors self-start"
                        >
                            Randevu Al →
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
