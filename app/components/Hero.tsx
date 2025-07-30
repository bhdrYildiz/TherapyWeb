'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGooglePlusG, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Hero = () => {
    return (
        <section className="w-full min-h-[830px] bg-[url('/images/background.svg')] bg-cover bg-center flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                {/* SOL KART */}
                <div className="relative w-full max-w-[480px] h-[400px] group [perspective:2000px] mt-12 md:mt-0">
                    {/* Image layer */}
                    <div className="absolute inset-0 bg-black overflow-hidden z-10 transition-all duration-500 group-hover:opacity-50 group-hover:translate-x-[30%]">
                        <Image
                            src="/images/resim12.jpg"
                            alt="profile"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Sliding detail card */}
                    <div
                        className="absolute top-0 left-0 w-[70%] h-full z-20 transition-transform duration-500 origin-left rotate-y-[-90deg] group-hover:rotate-y-0"
                        style={{
                            backgroundColor: "var(--color-accentMint)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                        }}
                    >
                        <div className="bg-[#f8f9fa] text-center p-8 absolute w-[90%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-xl font-bold text-[#2f3e46]">
                                EMiNE KIYGA<br />
                                <span className="text-sm text-[#5c5470]">Uzm. Klinik Psikolog</span>
                            </h1>
                            <p className="text-gray-800 my-2 text-sm max-w-[240px] md:max-w-[400px]">
                                İstanbul'da Klinik Psikolog olarak psikolojik danışmanlık hizmetleri sunuyorum. Birlikte planlı şekilde ilerleyerek yaşadığınız zorlukların üstesinden gelmenize yardımcı oluyorum. Hizmetlerim arasında EMDR uygulamaları, depresyon ile baş etme teknikleri ve kaygı durumlarında destek çalışmaları bulunmaktadır. Her danışanın ihtiyacına özel yaklaşımlar geliştirerek, ruhsal iyi oluş halinize katkı sağlamak için buradayım.
                            </p>
                            <Link href="/about" className="text-[#5c5470] font-semibold text-sm group-hover:underline flex justify-center items-center mt-6 cursor-pointer">
                                DAHA FAZLA →
                            </Link>
                            <ul className="flex justify-center space-x-2 mt-6">
                                <li>
                                    <Link href="mailto:eminekiyga.50@gmail.com" className="bg-[#2f3e46] text-[#f8f9fa] hover:text-[#c8b6ff] w-8 h-8 flex items-center justify-center hover:bg-[var(--color-accentMint)]">
                                        <FaGooglePlusG />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/emine-k%C4%B1yga-b68450198/" className="bg-[#2f3e46] text-[#f8f9fa] hover:text-[#c8b6ff] w-8 h-8 flex items-center justify-center hover:bg-[var(--color-accentMint)]">
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/eminekiyga_/" className="bg-[#2f3e46] text-[#f8f9fa] hover:text-[#c8b6ff] w-8 h-8 flex items-center justify-center hover:bg-[var(--color-accentMint)]">
                                        <FaInstagram />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SAĞ KART */}
                <div className="relative w-full max-w-[480px] h-[400px] bg-[#f8f9fa] bg-opacity-80 shadow-xl p-8 hover:scale-[1.04] transition-transform duration-300 mt-6 md:mt-0">
                    <h2 className="text-xl font-bold text-[#2f3e46] mb-4">Klinik Psikolog Emine Kıyga</h2>
                    <p className="text-base text-[#2f3e46] mt-2 mb-2 ">
                        İstanbul'da psikolog olarak psikolojik danışmanlık hizmetleri sunuyorum. Birlikte planlı şekilde ilerleyerek yaşadığınız zorlukların üstesinden gelmenize yardımcı oluyorum. Hizmetlerim arasında EMDR uygulamaları, depresyon ile baş etme teknikleri ve kaygı durumlarında destek çalışmaları bulunmaktadır. Her danışanın ihtiyacına özel yaklaşımlar geliştirerek, ruhsal iyi oluş halinize katkı sağlamak için buradayım.
                    </p>
                    <Link href="contact"
                        className="inline-block mt-6 text-base font-semibold text-[#2f3e46] hover:text-[#f8f9fa] bg-[var(--color-accentMint)] hover:bg-[#5c5470] px-4 py-2 rounded transition-colors"
                    >
                        Randevu Al →
                    </Link>
                </div>
            </div>
        </section>
    )
}
