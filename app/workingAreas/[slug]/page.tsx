'use client'

import { workingAreasData } from '@/app/data/workingAreasData'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

export default function WorkingAreaDetailPage() {
    const { slug } = useParams()
    const area = workingAreasData.find(item => item.slug === slug)

    if (!area) return notFound()

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* HERO */}
            <section className="relative w-full h-[45vh] flex bg-fixed bg-center items-center justify-center" style={{ backgroundImage: "url('/images/hakkimdaBg.png')" }}>
                <div className="absolute inset-0" />
                <h1 className="relative z-10 text-[#2f3e46] text-2xl sm:text-3xl font-bold tracking-wide uppercase mt-12 text-center">{area.title}</h1>
            </section>

            {/* CONTENT */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
                    {/* SOL: İçerik */}
                    <div className="lg:col-span-8">
                        {/* İkon ve Başlık */}
                        <div className="flex items-center gap-4 mb-6">
                            {area.icon && (
                                <div className="text-[36px] text-[var(--color-accentMint)]">
                                    <area.icon />
                                </div>
                            )}
                            <h2 className="text-3xl font-bold text-[#2f3e46]">{area.title}</h2>
                        </div>

                        {/* Görsel (placeholder) */}
                        <div className="w-full h-[300px] bg-gray-200 rounded-lg shadow-inner mb-8 flex items-center justify-center">
                            <img
                                src={area.image}
                                alt={area.title}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Markdown İçerik */}
                        <article className="text-base text-gray-800 leading-relaxed space-y-4 prose max-w-none">
                            <ReactMarkdown>{area.longContent}</ReactMarkdown>
                        </article>
                    </div>

                    {/* SAĞ: Diğer çalışma alanları */}
                    <aside className="lg:col-span-4 mt-4">
                        <h3 className="text-xl font-semibold text-[#2f3e46] mb-4">Diğer Çalışma Alanlarım</h3>
                        <ul className="space-y-4">
                            {workingAreasData
                                .filter((item) => item.slug !== slug)
                                .slice(0, 5)
                                .map((item) => (
                                    <li key={item.slug}>
                                        <Link
                                            href={`/workingAreas/${item.slug}`}
                                            className="block bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
                                        >
                                            <span className="text-md font-medium text-[#2f3e46]">{item.title}</span>
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.shortDescription}</p>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </aside>
                </div>
            </section>
        </main>
    )
}
