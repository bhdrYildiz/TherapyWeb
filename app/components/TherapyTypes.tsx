'use client'

import Link from 'next/link'
import { GiFaceToFace } from "react-icons/gi"
import { MdComputer } from "react-icons/md"
import { IconType } from 'react-icons'

type TherapyItem = {
    id: number
    icon: IconType
    title: string
    description: string
    link: string
}

const therapies: TherapyItem[] = [
    {
        id: 1,
        icon: MdComputer,
        title: 'Online Terapi',
        description:
            'Online terapi; terapistin danışan ile internet aracılığıyla görüntülü görüşme platformlarında konuşarak gerçekleştirdiği psikoterapi biçimidir. Online terapide de tıpkı yüz yüze terapide olduğu gibi danışan ve terapistin birbirlerini duyup görebileceği ve görüşmelerin yalnızca bu iki taraf açısından duyulabileceği ofis ortamı sağlanmalıdır.',
        link: 'contact'
    },
    {
        id: 2,
        icon: GiFaceToFace,
        title: 'Yüz Yüze Terapi',
        description:
            'Psikoterapi: Eğitimli bir ruh sağlığı profesyonelinin hasta/danışanın mevcut yakınmalarını ortadan kaldırmak veya geriletmek, rahatsızlık veren davranış örüntülerini düzeltmek ve olumlu kişilik gelişimini teşvik etmek amacıyla, her iki tarafın da bilerek profesyonel bir ilişki kurduğu psikolojik tedavidir.',
        link: 'contact'
    }
]

export const TherapyTypes = () => {
    return (
        <section className="w-full py-20 bg-white shadow-[inset_0_5px_15px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl relative w-full h-[400px] mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-[#2f3e46] mb-12 uppercase">
                    Terapi Yöntemleri
                </h2>

                <div className="grid gap-10 md:grid-cols-2 h-[320px]">
                    {therapies.map(({ id, icon: Icon, title, description, link }) => (
                        <div
                            key={id}
                            className="group flex gap-4 bg-white shadow-lg p-6 border-b border-transparent transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] hover:border-b-[var(--color-accentMint)] hover:translate-x-2 hover:-translate-y-2 hover:bg-[#f8f9fa]"
                        >
                            {/* ICON */}
                            <div className="flex-shrink-0 text-[48px] text-[var(--color-accentMint)]">
                                <Icon />
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-4 text-[#2f3e46]">
                                    {title}
                                </h3>
                                <p className="text-base text-gray-700 mt-2">
                                    {description}
                                </p>
                                <Link
                                    href={link}
                                    className="inline-block text-base font-semibold text-[var(--color-accentMint)] mt-4 group-hover:underline transition-colors"
                                >
                                    Randevu Al
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
