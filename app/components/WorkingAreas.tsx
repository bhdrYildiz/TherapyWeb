'use client'

import React from 'react'
import { GiBrain, GiNightSleep, GiHeartInside } from 'react-icons/gi'
import { MdOutlinePsychology, MdOutlinePsychologyAlt } from 'react-icons/md'
import { FaRegSadCry, FaHeartbeat } from 'react-icons/fa'
import { PiExamBold } from 'react-icons/pi'
import { IoPeopleOutline } from 'react-icons/io5'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import Link from 'next/link'

const topics = [
    {
        title: 'Anksiyete Bozuklukları (Kaygı Bozukluğu)',
        description: 'Sürekli endişe, huzursuzluk ve panik haliyle baş etmekte zorlanan bireyler için kişiye özel terapi yaklaşımları sunuyorum.',
        icon: MdOutlinePsychology
    },
    {
        title: 'Obsesif Kompulsif Bozukluk (Takıntı Hastalığı)',
        description: 'Zihni sürekli meşgul eden takıntılı düşünceler ve tekrar eden davranışlarla başa çıkmanıza yardımcı oluyorum.',
        icon: MdOutlinePsychologyAlt
    },
    {
        title: 'Depresyon ve Duygu Durum Bozuklukları',
        description: 'Çöküntü hali, isteksizlik ve umutsuzluk gibi duygularla baş edebilmek için profesyonel destek sunuyorum.',
        icon: FaRegSadCry
    },
    {
        title: 'Panik Atak ve Panik Bozukluk',
        description: 'Aniden ortaya çıkan yoğun kaygı nöbetleri ve panik ataklara karşı etkili psikoterapi yaklaşımları uyguluyorum.',
        icon: GiBrain
    },
    {
        title: 'Travma Sonrası Stres Bozukluğu (TSSB)',
        description: "Geçmiş travmaların bugünkü yaşamınıza etkilerini azaltmak için EMDR ve diğer terapötik tekniklerle çalışıyorum.",
        icon: GiHeartInside
    },
    {
        title: 'Yeme Bozuklukları',
        description: "Yeme davranışlarındaki bozulmaların arkasındaki psikolojik nedenleri birlikte keşfedip çözüm odaklı ilerliyoruz.",
        icon: FaHeartbeat
    },
    {
        title: 'İlişki ve Evlilik Problemleri',
        description: "Çiftler arasında yaşanan iletişim sorunları, çatışmalar ve duygusal kopukluklarla ilgili destek sağlıyorum.",
        icon: IoPeopleOutline
    },
    {
        title: 'Uyku Bozuklukları',
        description: "Uyumakta güçlük, sık uyanma ya da kabuslarla ilgili sorunlara karşı bireysel terapi uygulamaları yapıyorum.",
        icon: GiNightSleep
    },
    {
        title: 'Sınav Kaygısı ve Performans Problemleri',
        description: "Sınav anında yaşanan kaygı, odaklanma sorunları ve düşük performans için destekleyici teknikler sunuyorum.",
        icon: PiExamBold
    },
    {
        title: 'Özgüven Problemleri ve Özsaygı Sorunları',
        description: "Kendine güven eksikliği ve değersizlik hissiyle baş etme süreçlerinde terapötik destek sunuyorum.",
        icon: HiOutlineUserGroup
    }
]

export const WorkingAreas = () => {
    return (
        <section className="w-full py-20 bg-[#edebfb]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                    Çalışma Alanlarım
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {topics.map(({ title, description, icon: Icon }, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#f8f9fa] p-8 pl-20 shadow-sm border border-gray-200 transition-all duration-300 min-h-[220px] flex items-start hover:bg-[var(--color-accentMint)] hover:border-transparent hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* ICON */}
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[38px] text-[var(--color-accentMint)] group-hover:text-white transition-all duration-300">
                                <Icon />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-[#2f3e46] mb-2 group-hover:text-white transition-all duration-300">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-600 group-hover:text-white transition-all duration-300">
                                    {description}
                                </p>
                                <Link
                                    href="#"
                                    className="mt-4 text-sm font-medium text-[var(--color-accentMint)] group-hover:text-white inline-flex items-center transition-all duration-300 hover:scale-y-125 underline"
                                >
                                    Daha Fazlası →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
