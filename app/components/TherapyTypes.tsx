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
        title: "Online Terapi",
        description:
            `Online terapi; terapistin danışan ile internet aracılığıyla görüntülü görüşme platformlarında konuşarak gerçekleştirdiği psikoterapi biçimidir. Online terapide de tıpkı yüz yüze terapide olduğu gibi danışan ve terapistin birbirlerini duyup görebileceği ve görüşmelerin yalnızca bu iki taraf açısından duyulabileceği ofis ortamı sağlanmalıdır.`,
        link: "contact"
    },
    {
        id: 2,
        icon: GiFaceToFace,
        title: "Yüz Yüze Terapi",
        description:
            `Psikoterapi: Eğitimli bir ruh sağlığı profesyonelinin hasta/danışanın mevcut yakınmalarını ortadan kaldırmak veya geriletmek, rahatsızlık veren davranış örüntülerini düzeltmek ve olumlu kişilik gelişimini teşvik etmek amacıyla, her iki tarafın da bilerek profesyonel bir ilişki kurduğu psikolojik tedavidir.`,
        link: "contact"
    }
]

export const TherapyTypes = () => {
    return (
        <section className="w-full py-20 bg-white shadow-[inset_0_5px_15px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl relative w-full h-auto mx-auto px-6 space-y-16">
                <h2 className="text-2xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                    Terapi Yöntemleri
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
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

                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                            Hizmetlerim
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Bireysel Psikoterapi",
                                paragraphs: [
                                    `Bireysel psikoterapi; kişinin kendisini, duygularını, düşüncelerini ve ilişkilerini daha derinlemesine anlamasını sağlayan bir süreçtir. Terapi süreci yalnızca semptomlarla çalışmayı değil, bu semptomların altında yatan duygusal çatışmaları, geçmiş yaşantıların bugünkü etkilerini ve tekrar eden ilişki örüntülerini anlamayı hedefler.`,
                                    `Bu süreçte kişinin iç dünyasına odaklanılarak; kaygı, depresyon, ilişki problemleri, özdeğer düşüklüğü, öfke, yas ve benzeri duygusal zorlukların kökenini keşfetmesine yardımcı olunur. Amaç; bireyin kendisiyle daha sağlıklı bir ilişki kurması, duygusal farkındalığını artırması ve kurduğu ilişkilerde daha bütünlüklü bir denge oluşturabilmesine yardımcı olmaktır.`,
                                    `Bireysel terapi, yalnızca bir "sorunu çözme" alanı değil, kişinin kendini tanıma, içsel özgürleşme ve dönüşüm yolculuğudur.`
                                ],
                            },
                            {
                                title: "Ergenlerle Psikoterapi",
                                paragraphs: [
                                    `Ergenlik dönemi, kimlik arayışının, duygusal iniş çıkışların ve bağımsızlaşma isteğinin ön planda olduğu kritik bir süreçtir. Bu dönemde gençler; aileyle iletişim, özgüven, arkadaş ilişkileri, sınav kaygısı veya öfke gibi konularda zorlanabilmektedirler.`,
                                    `Ergen psikoterapisi, gencin kendini ifade edebilmesini, duygularını tanımasını, sağlıklı sınırlar koyabilmesini ve yaşadığı zorluklarla sağlıklı bir biçimde başa çıkabilmesini destekler.`,
                                    `Bu süreç, ergenin içsel dünyasını anlamlandırmasına ve sağlıklı kimlik gelişimini desteklemesine katkıda bulunarak özerk birey olma sürecinde profesyonel bir destek sunar.`
                                ],
                            },
                        ].map(({ title, paragraphs }) => (
                            <div
                                key={title}
                                className="relative overflow-hidden rounded-md border border-[#e3ebe7] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                            >
                                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[var(--color-accentMint)] via-[#9dbbae] to-[var(--color-lavender)]" />
                                <div className="pl-4">
                                    <h4 className="text-xl font-semibold text-[#2f3e46] mb-4">
                                        {title}
                                    </h4>
                                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                        {paragraphs.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}
