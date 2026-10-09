
'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { workingAreasData } from '@/app/data/workingAreasData'

export const WorkingAreas = () => {
    return (
        <section
            id="calisma-alanlari"
            className="relative w-full overflow-hidden py-20 lg:py-24 bg-[#F7F8F5]"
        >

            {/* ARKA PLAN GÖRSELİ */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/arkaplan.jpg')] bg-cover bg-center bg-no-repeat" />

            {/* OKUNABİLİRLİK İÇİN HAFİF KATMAN */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-white/35" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">

                {/* BÖLÜM BAŞLIĞI */}
                <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">

                    <div className="mb-4 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-[#91A596]" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#78907F]">
                            Psikoloji ve İnsan
                        </span>

                        <span className="h-px w-10 bg-[#91A596]" />
                    </div>

                    <h2 className="font-serif text-4xl tracking-tight text-[#2D4035] sm:text-5xl">
                        Çalışma Alanlarım
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-[1.75] text-[#68796E] sm:text-[15px]">
                        İnsanların duygu dünyaları, düşünce biçimleri,
                        ilişkileri ve yaşam deneyimleri birbirinden farklıdır.
                        Psikolojik süreçleri anlamak; bireyin içsel yaşantısını,
                        ilişkisel örüntülerini ve karşılaştığı güçlükleri
                        bütüncül bir bakış açısıyla ele almayı gerektirir.
                        Aşağıda mesleki çalışma konularına ilişkin
                        bilgilere yer verilmektedir.
                    </p>
                </div>

                {/* ÇALIŞMA ALANLARI */}
                <div className="border-t border-[#D7E0D7]">

                    {workingAreasData.map(({ title, longContent, icon: Icon }, idx) => {
                        const number = String(idx + 1).padStart(2, '0')
                        const hasContent = Boolean(longContent?.trim())

                        return (
                            <article
                                key={`${title}-${idx}`}
                                className="group relative border-b border-[#D7E0D7] py-7 lg:py-9"
                            >

                                {/* HOVER ARKA PLANI */}
                                <div className="pointer-events-none absolute -inset-x-3 inset-y-1 rounded-2xl bg-white/0 transition-all duration-500 group-hover:bg-white/65 group-hover:shadow-[0_15px_45px_-35px_rgba(35,65,45,0.18)] lg:-inset-x-6" />

                                {/* ÜÇ SÜTUNLU YAPI */}
                                <div className="relative z-10 grid grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-3 sm:grid-cols-[65px_minmax(0,1fr)_65px] sm:gap-5 lg:grid-cols-[110px_minmax(0,1fr)_110px] lg:gap-8">

                                    {/* SOL: NUMARA */}
                                    <div className="flex h-full items-center justify-center">
                                        <span className="font-serif text-3xl font-light leading-none text-[#B7C8B9] transition-colors duration-300 group-hover:text-[#6E9179] sm:text-4xl lg:text-6xl">
                                            {number}
                                        </span>
                                    </div>

                                    {/* ORTA: BAŞLIK VE METİN */}
                                    <div className="mx-auto w-full max-w-[850px] text-center">

                                        <h3 className="mb-3 font-serif text-[23px] leading-tight tracking-tight text-[#2D4035] sm:text-[27px] lg:text-[32px]">
                                            {title}
                                        </h3>

                                        {hasContent && (
                                            <div className="mx-auto max-w-[780px] text-center text-[13px] leading-[1.65] text-[#4D6053] sm:text-[14px] lg:text-[14.5px] [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-[#354F3D] [&_ul]:my-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_li]:text-center [&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:font-semibold [&_h3]:text-[#354F3D]">
                                                <ReactMarkdown>
                                                    {longContent}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </div>

                                    {/* SAĞ: MEVCUT İKONLAR */}
                                    <div className="flex h-full items-center justify-center">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D5E0D6] bg-white/75 text-[20px] text-[#789581] transition-all duration-300 group-hover:border-[#9FB8A4] group-hover:bg-[#EAF0EA] group-hover:text-[#456B50] sm:h-14 sm:w-14 sm:text-[26px] lg:h-16 lg:w-16 lg:text-[30px]">
                                            <Icon />
                                        </div>
                                    </div>

                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
