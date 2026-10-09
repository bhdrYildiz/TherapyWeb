
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FiArrowUpRight, FiArrowRight, FiPlay, FiImage } from 'react-icons/fi'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Instagram | Klinik Psikolog Emine Kıyga',
    description: 'Klinik Psikolog Emine Kıyga Instagram paylaşımları, psikoloji içerikleri ve videoları.',
}

export default function InstagramPage() {
    return (
        <main className="min-h-screen bg-[#F8F6F3] text-[#292626]">

            {/* BANNER */}
            <section className="relative isolate min-h-[390px] overflow-hidden bg-[#302C2A] text-white sm:min-h-[440px]">

                <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] overflow-hidden opacity-60">
                    <div className="absolute -right-[180px] -top-[340px] h-[850px] w-[850px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute -right-[110px] -top-[270px] h-[710px] w-[710px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute -right-[40px] -top-[200px] h-[570px] w-[570px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute right-[30px] top-[70px] h-[420px] w-[420px] rounded-full border border-[#8C8077]/20" />
                </div>

                <div className="pointer-events-none absolute inset-x-6 bottom-8 top-24 border border-white/10 sm:inset-x-12" />

                <div className="relative z-10 mx-auto flex min-h-[390px] max-w-7xl flex-col justify-center px-12 pb-14 pt-32 sm:min-h-[440px] sm:px-20 lg:px-24">

                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-9 bg-[#B9A99B]" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C7B9AC]">
                            EMİNE KIYGA · KLİNİK PSİKOLOG
                        </span>
                    </div>

                    <h1 className="font-serif text-[56px] font-normal leading-[1.08] tracking-tight text-[#F8F6F3] sm:text-[76px] lg:text-[94px]">
                        Instagram<span className="text-[#B9A99B]">.</span>
                    </h1>

                    <p className="mt-7 max-w-lg text-[14px] leading-[1.9] text-[#D0C7C0] sm:text-[15px]">
                        Psikolojiye, duygulara ve insan ilişkilerine dair paylaşımlar.
                    </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#B5A69A]" />
            </section>

            {/* ÇOK YAKINDA */}
            <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:py-32">
                <div className="mx-auto max-w-5xl">

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

                        {/* SOL METİN */}
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#B5A69A]" />
                                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#98877B]">
                                    YAKINDA BURADA
                                </span>
                            </div>

                            <h2 className="max-w-xl font-serif text-[40px] font-normal leading-[1.2] tracking-tight text-[#292626] sm:text-[52px]">
                                Paylaşımlarımız <span className="italic text-[#98877B]">çok yakında</span> burada.
                            </h2>

                            <p className="mt-7 max-w-lg text-[15px] leading-[2] text-[#746C66]">
                                Instagram'da paylaştığım psikolojiye dair içerikleri, bilgilendirici gönderileri ve videoları yakında bu sayfadan da inceleyebileceksiniz.
                            </p>

                            <p className="mt-4 max-w-lg text-[14px] leading-[1.9] text-[#8A8078]">
                                Bu süreçte güncel paylaşımlarıma Instagram hesabım üzerinden ulaşabilirsiniz.
                            </p>

                            <a href="https://www.instagram.com/klinikpsk.eminekiyga/" target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center gap-4 bg-[#302C2A] px-7 py-4 text-[13px] font-medium text-[#F8F6F3] transition-colors duration-300 hover:bg-[#514A48]">
                                <FaInstagram size={18} />
                                Instagram'da Takip Et
                                <FiArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>

                        {/* SAĞ TEMSİLİ GALERİ */}
                        <div className="relative mx-auto w-full max-w-[420px]">

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">

                                <div className="flex aspect-[3/4] flex-col justify-between border border-[#E5DED6] bg-[#EDE7DF] p-5">
                                    <FiImage size={20} className="text-[#9A8B7D]" />
                                    <div>
                                        <span className="mb-2 block font-serif text-[27px] leading-tight text-[#514A48]">
                                            Duygular
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#9A8B7D]">
                                            PSİKOLOJİ
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-9 flex aspect-[3/4] flex-col justify-between border border-[#DCD2C8] bg-[#DCD2C8] p-5">
                                    <FiPlay size={21} className="text-[#76675B]" />
                                    <div>
                                        <span className="mb-2 block font-serif text-[27px] leading-tight text-[#514A48]">
                                            İlişkiler
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#76675B]">
                                            VİDEOLAR
                                        </span>
                                    </div>
                                </div>

                                <div className="-mt-9 flex aspect-[3/4] flex-col justify-between border border-[#E5DED6] bg-[#F0EBE5] p-5">
                                    <FiImage size={20} className="text-[#9A8B7D]" />
                                    <div>
                                        <span className="mb-2 block font-serif text-[27px] leading-tight text-[#514A48]">
                                            Farkındalık
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#9A8B7D]">
                                            PAYLAŞIMLAR
                                        </span>
                                    </div>
                                </div>

                                <div className="flex aspect-[3/4] flex-col justify-between border border-[#D4C8BC] bg-[#CFC1B3] p-5">
                                    <FaInstagram size={20} className="text-[#66584D]" />
                                    <div>
                                        <span className="mb-2 block font-serif text-[27px] leading-tight text-[#443B35]">
                                            Kendini Tanı
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#66584D]">
                                            INSTAGRAM
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 border-b border-l border-[#B5A69A] sm:block" />
                            <div className="absolute -right-5 -top-5 hidden h-20 w-20 border-r border-t border-[#B5A69A] sm:block" />

                        </div>

                    </div>
                </div>
            </section>

            {/* ALT BİLGİ ALANI */}
            <section className="border-t border-[#E9E3DC] bg-[#F1EDE8] px-6 py-10">
                <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

                    <div>
                        <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[#98877B]">
                            BİZİ TAKİP EDİN
                        </span>
                        <p className="font-serif text-xl text-[#514A48]">
                            @pskd.eminekiyga
                        </p>
                    </div>

                    <a href="https://www.instagram.com/klinikpsk.eminekiyga/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-[13px] font-medium text-[#514A48] transition-colors hover:text-[#98877B]">
                        Instagram Profiline Git
                        <FiArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </a>

                </div>
            </section>

        </main>
    )
}
