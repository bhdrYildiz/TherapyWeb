
'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
} from 'react-icons/fa'

export const Hero2 = () => {
    return (
        <section className="relative w-full min-h-[830px] bg-[url('/images/background.svg')] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden py-20 lg:py-28">
            <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-10 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-[42%_1fr] items-center gap-14 lg:gap-16 xl:gap-20">

                {/* SOL FOTOĞRAF */}
                <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">

                    {/* İnce dekoratif çerçeve */}
                    <div className="absolute -top-4 -right-4 w-full h-full border border-[#8E9E91]/70 rounded-tl-[180px] rounded-tr-[4px] rounded-br-[180px] rounded-bl-[4px] pointer-events-none" />

                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-tl-[180px] rounded-tr-[4px] rounded-br-[180px] rounded-bl-[4px] border-[5px] border-white/80 shadow-[0_25px_65px_rgba(43,65,51,0.16)]">
                        <Image
                            src="/images/emine.png"
                            alt="Klinik Psikolog Emine Kıyga"
                            fill
                            priority
                            sizes="(max-width: 1024px) 90vw, 500px"
                            className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* SAĞ İÇERİK */}
                <div className="relative flex flex-col items-start rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(43,65,51,0.08)] p-6 sm:p-8 lg:p-10">

                    {/* ÜST ETİKET */}
                    <div className="flex items-center gap-4 mb-5">
                        <span className="w-12 h-px bg-[#7D8C7F]" />
                        <span className="text-[11px] sm:text-xs tracking-[0.45em] text-[#68786C] font-medium">
                            KLİNİK PSİKOLOG
                        </span>
                    </div>

                    {/* BAŞLIK */}
                    <h1 className="font-serif text-[clamp(3.3rem,5.5vw,6rem)] leading-[1.05] tracking-[-0.045em] text-[#2D4035] mb-6">
                        Emine Kıyga
                    </h1>

                    {/* DEKORATİF ÇİZGİ */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-16 h-px bg-[#819385]" />
                        <span className="text-[#829687] text-xl">
                            ❧
                        </span>
                    </div>

                    {/* ÖZGEÇMİŞ */}
                    <div className="max-w-[720px] text-[#3D4940] text-[14px] sm:text-[15px] leading-[1.9] space-y-5 text-left">
                        <p>
                            Klinik Psikolog Emine Kıyga, lisans eğitimini
                            Marmara Üniversitesi Psikolojik Danışmanlık ve
                            Rehberlik Anabilim Dalı’nda onur öğrencisi olarak
                            tamamlamıştır. Ardından Psikoterapi Enstitüsü’nde
                            üç yıl süren Bütüncül Psikoterapi eğitimine
                            başlamıştır. Eğitimin ilk yılını tamamladıktan
                            sonra eşzamanlı olarak İstanbul Aydın Üniversitesi
                            Klinik Psikoloji Yüksek Lisans Programı’nda
                            eğitimine başlamış olup tezini teslim ederek
                            hem yüksek lisansını hem de Bütüncül Psikoterapi
                            eğitimini başarıyla tamamlamıştır.
                            Tez çalışmasında “Kaçıngan Bağlanma ile Kırılgan
                            Narsisizm Arasındaki İlişkide Kendiliknesnesi
                            İhtiyaçlarının Aracı Rolü” adlı konuyu ele almıştır.
                            Mesleki eğitimlerinde uzun soluklu eğitimler
                            başta olmak üzere çeşitli eğitimler almış ve
                            halen aktif olarak güncel eğitimlerden
                            faydalanarak kendini geliştirmeye devam etmektedir.
                            Eğitimlere ek olarak hem kendi terapi sürecinde
                            geçmekte olup hem de süpervizyonlara aktif
                            olarak devam etmektedir.
                        </p>

                        <p>
                            Klinikte çalıştığı grup ergen ve yetişkin
                            danışanlar olmakla birlikte Üsküdar Belediyesi
                            Çocuk Enstitüsü’nde çocuklara da gelişimsel
                            destek amacıyla çeşitli çalışmalar yapmaktadır.
                            Öğrencilik yıllarında Beşiktaş Rehberlik ve
                            Araştırma Merkezi ve çeşitli özel klinikler
                            başta olmak üzere birçok staj deneyimine sahiptir.
                            Yetişkin ve ergen danışanlarla yüz yüze
                            psikolojik danışma süreçlerini İstanbul/Kadıköy’de
                            bulunan özel bir klinikte yürütmekte olup bunun
                            yanı sıra online psikolojik danışma hizmeti
                            de vermektedir.
                        </p>
                    </div>

                    {/* SOSYAL MEDYA */}
                    <div className="flex items-center gap-4 mt-9 w-full">
                        <div className="flex items-center gap-3">

                            <Link
                                href="mailto:klnpskeminekiyga@outlook.com"
                                aria-label="E-posta"
                                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#718477] text-white hover:bg-[#2D4035] hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaEnvelope size={17} />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/emine-k%C4%B1yga-b68450198/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#6C7085] text-white hover:bg-[#2D4035] hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>

                            <Link
                                href="https://www.instagram.com/pskd.eminekiyga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#A68E85] text-white hover:bg-[#2D4035] hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaInstagram size={18} />
                            </Link>
                        </div>

                        <div className="hidden sm:flex flex-1 items-center gap-4 ml-4">
                            <span className="h-px flex-1 bg-[#A8B4A9]" />
                            <span className="text-[#829687] text-xl">
                                ❧
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
