
'use client'

import React from 'react'
import { FiPhone, FiMail, FiArrowUpRight, FiArrowRight } from 'react-icons/fi'

export default function ContactPage() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const name = String(formData.get('name') || '')
        const email = String(formData.get('email') || '')
        const subject = String(formData.get('subject') || '')
        const message = String(formData.get('message') || '')

        const body = `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`

        const mailtoLink = `mailto:klnpskeminekiyga@outlook.com?subject=${encodeURIComponent(subject || 'İletişim Formu')}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoLink
    }

    return (
        <main className="min-h-screen bg-[#F8F6F3] text-[#292626]">


            {/* HERO / BANNER */}
            <section className="relative isolate min-h-[390px] overflow-hidden bg-[#302C2A] text-white sm:min-h-[440px]">

                {/* Sağ dekoratif mimari çizgiler */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] overflow-hidden opacity-60">
                    <div className="absolute -right-[180px] -top-[340px] h-[850px] w-[850px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute -right-[110px] -top-[270px] h-[710px] w-[710px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute -right-[40px] -top-[200px] h-[570px] w-[570px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute right-[30px] top-[70px] h-[420px] w-[420px] rounded-full border border-[#8C8077]/20" />
                </div>

                {/* İnce çerçeve çizgileri */}
                <div className="pointer-events-none absolute inset-x-6 bottom-8 top-24 border border-white/10 sm:inset-x-12" />

                {/* İçerik */}
                <div className="relative z-10 mx-auto flex min-h-[390px] max-w-7xl flex-col justify-center px-12 pb-14 pt-32 sm:min-h-[440px] sm:px-20 lg:px-24">

                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-9 bg-[#B9A99B]" />
                        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C7B9AC]">
                            EMİNE KIYGA · KLİNİK PSİKOLOG
                        </span>
                    </div>

                    <h1 className="font-serif text-[56px] font-normal leading-[1.08] tracking-tight text-[#F8F6F3] sm:text-[76px] lg:text-[94px]">
                        İletişim<span className="text-[#B9A99B]">.</span>
                    </h1>

                    <p className="mt-7 max-w-md text-[14px] leading-[1.9] text-[#D0C7C0] sm:text-[15px]">
                        Sorularınız ve bilgi talepleriniz için iletişime geçebilirsiniz.
                    </p>
                </div>

                {/* Alt sınır */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#B5A69A]" />
            </section>


            {/* İLETİŞİM ALANI */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-6xl px-6 lg:px-10">

                    <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                        {/* SOL TARAF */}
                        <div className="lg:pt-8">

                            <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#A09287]">
                                İLETİŞİM BİLGİLERİ
                            </span>

                            <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-[#292626] sm:text-4xl">
                                İletişime Geçin
                            </h2>

                            <p className="mb-12 max-w-md text-[14px] leading-[1.9] text-[#746C66]">
                                Mesleki çalışmalar ve çalışma alanları hakkında bilgi almak için aşağıdaki iletişim kanallarını kullanabilirsiniz.
                            </p>

                            {/* TELEFON */}
                            <a href="tel:+905385438324" className="group flex items-center gap-5 border-b border-[#E0D9D1] py-6">
                                <FiPhone size={20} className="shrink-0 text-[#98877B]" />

                                <div className="min-w-0 flex-1">
                                    <span className="mb-1 block text-[11px] uppercase tracking-[0.12em] text-[#A09287]">Telefon</span>
                                    <span className="text-[15px] text-[#514A48]">+90 538 543 83 24</span>
                                </div>

                                <FiArrowUpRight size={18} className="text-[#A09287] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>

                            {/* E-POSTA */}
                            <a href="mailto:klnpskeminekiyga@outlook.com" className="group flex items-center gap-5 border-b border-[#E0D9D1] py-6">
                                <FiMail size={20} className="shrink-0 text-[#98877B]" />

                                <div className="min-w-0 flex-1">
                                    <span className="mb-1 block text-[11px] uppercase tracking-[0.12em] text-[#A09287]">E-posta</span>
                                    <span className="break-all text-[14px] text-[#514A48]">klnpskeminekiyga@outlook.com</span>
                                </div>

                                <FiArrowUpRight size={18} className="shrink-0 text-[#A09287] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>

                        </div>

                        {/* SAĞ TARAF: FORM */}
                        <div className="border border-[#E9E3DC] bg-white p-7 sm:p-10 lg:p-12">

                            <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#A09287]">
                                MESAJ OLUŞTURUN
                            </span>

                            <h2 className="mb-4 font-serif text-3xl font-normal text-[#292626] sm:text-4xl">
                                İletişim Formu
                            </h2>

                            <p className="mb-9 text-[13px] leading-[1.85] text-[#8A8078]">
                                Aşağıdaki bilgileri doldurarak e-posta uygulamanızda mesajınızı hazırlayabilirsiniz.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* AD SOYAD */}
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-[12px] font-medium text-[#514A48]">
                                        Adınız Soyadınız
                                    </label>

                                    <input id="name" name="name" type="text" autoComplete="name" placeholder="Adınız ve soyadınız" required className="w-full rounded-sm border border-[#E4DED7] bg-[#FAF9F7] px-4 py-3.5 text-[14px] text-[#292626] outline-none transition-colors placeholder:text-[#A99E95] focus:border-[#98877B]" />
                                </div>

                                {/* E-POSTA */}
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-[12px] font-medium text-[#514A48]">
                                        E-posta Adresiniz
                                    </label>

                                    <input id="email" name="email" type="email" autoComplete="email" placeholder="ornek@eposta.com" required className="w-full rounded-sm border border-[#E4DED7] bg-[#FAF9F7] px-4 py-3.5 text-[14px] text-[#292626] outline-none transition-colors placeholder:text-[#A99E95] focus:border-[#98877B]" />
                                </div>

                                {/* KONU */}
                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-[12px] font-medium text-[#514A48]">
                                        Konu
                                    </label>

                                    <input id="subject" name="subject" type="text" placeholder="Mesajınızın konusu" required className="w-full rounded-sm border border-[#E4DED7] bg-[#FAF9F7] px-4 py-3.5 text-[14px] text-[#292626] outline-none transition-colors placeholder:text-[#A99E95] focus:border-[#98877B]" />
                                </div>

                                {/* MESAJ */}
                                <div>
                                    <label htmlFor="message" className="mb-2 block text-[12px] font-medium text-[#514A48]">
                                        Mesajınız
                                    </label>

                                    <textarea id="message" name="message" rows={5} placeholder="Mesajınızı buraya yazabilirsiniz..." required className="w-full resize-y rounded-sm border border-[#E4DED7] bg-[#FAF9F7] px-4 py-3.5 text-[14px] leading-relaxed text-[#292626] outline-none transition-colors placeholder:text-[#A99E95] focus:border-[#98877B]" />
                                </div>
                                {/* BUTON */}
                                <button type="submit" className="group flex w-full cursor-pointer items-center justify-center gap-3 bg-[#292626] px-6 py-4 text-[13px] font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#514A48]">
                                    Gönder
                                    <FiArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
