'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGooglePlusG, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Hero2 = () => {
    return (
        <section className="w-full min-h-[830px] bg-[url('/images/background.svg')] bg-cover bg-center flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">

                {/* SOL RESİM */}
                <div className="relative w-full max-w-[420px] h-[520px] md:h-[520px] mt-12 md:mt-0">
                    <Image
                        src="/images/resim2.jpg"
                        alt="profile"
                        fill
                        className="object-cover rounded-md shadow-lg"
                    />
                </div>

                {/* SAĞ KART */}
                <div className="relative w-full rounded-md max-w-[550px] min-h-[500px] bg-[#f8f9fa] bg-opacity-90 shadow-xl p-10 hover:scale-[1.02] transition-transform duration-300 mt-6 md:mt-0 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-[#2f3e46] mb-4">Klinik Psikolog Emine Kıyga</h2>
                        <p className="text-base text-[#2f3e46] mt-2 mb-4">
                            Klinik Psikolog Emine Kıyga, lisans eğitimini Marmara Üniversitesi Psikolojik Danışmanlık ve Rehberlik Anabilim Dalı&apos;nda onur öğrencisi olarak tamamlamıştır.
                            Ardından Psikoterapi Enstitüsü&apos;nde üç yıl süren Bütüncül Psikoterapi eğitimine başlamıştır. Eğitimin ilk yılını tamamladıktan sonra eşzamanlı olarak İstanbul
                            Aydın Üniversitesi Klinik Psikoloji Yüksek Lisans Programı&apos;nda eğitimine başlamış olup tezini teslim ederek hem yüksek lisansını hem de Bütüncül Psikoterapi eğitimini başarıyla tamamlamıştır.
                            Tez çalışmasında &quot;Kaçıngan Bağlanma ile Kırılgan Narsisizm Arasındaki İlişkide Kendiliknesnesi İhtiyaçlarının Aracı Rolü&quot; adlı konuyu ele almıştır.
                        </p>
                    </div>

                    {/* Sosyal Linkler */}
                    <ul className="flex space-x-3 mt-6">
                        <li>
                            <Link href="mailto:klnpskeminekiyga@outlook.com"
                                className="bg-[#2f3e46] text-[#f8f9fa] hover:text-[#5c5470] w-9 h-9 flex items-center justify-center rounded hover:bg-[var(--color-accentMint)] transition-colors">
                                <FaGooglePlusG />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/emine-k%C4%B1yga-b68450198/"
                                className="bg-[#2f3e46] text-[#f8f9fa] hover:text-[#5c5470] w-9 h-9 flex items-center justify-center rounded hover:bg-[var(--color-accentMint)] transition-colors">
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/pskd.eminekiyga/"
                                className="bg-[#2f3e46] text-[#f8f9fa] hover:text-[#5c5470] w-9 h-9 flex items-center justify-center rounded hover:bg-[var(--color-accentMint)] transition-colors">
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>

                    {/* Randevu Butonu */}
                    <Link href="/contact"
                        className="inline-block mt-8 text-base font-semibold text-[#2f3e46] hover:text-[#f8f9fa] bg-[var(--color-accentMint)] hover:bg-[#5c5470] px-6 py-3 rounded transition-colors self-start"
                    >
                        Randevu Al →
                    </Link>
                </div>
            </div>
        </section>
    )
}

