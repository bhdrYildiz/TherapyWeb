'use client'

import React from 'react'
import Link from 'next/link'
import { workingAreasData } from '@/app/data/workingAreasData'

export const WorkingAreas = () => {
    return (
        <section className="w-full py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                    Çalışma Alanlarım
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {workingAreasData.map(({ slug, title, shortDescription, icon: Icon }, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-8 pl-20 shadow-sm border border-gray-200 transition-all duration-300 min-h-[220px] flex items-start hover:bg-[var(--color-accentMint)] hover:border-transparent hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[38px] text-[var(--color-accentMint)] group-hover:text-white transition-all duration-300">
                                <Icon />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-[#2f3e46] mb-2 group-hover:text-white transition-all duration-300">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-600 group-hover:text-white transition-all duration-300">
                                    {shortDescription}
                                </p>
                                <Link
                                    href={`/workingAreas/${slug}`}
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
