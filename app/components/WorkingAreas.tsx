'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { workingAreasData } from '@/app/data/workingAreasData'

export const WorkingAreas = () => {
    return (
        <section className="w-full py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                    Çalışma Alanlarım
                </h2>

                <h4 className="text-lg text-center text-[#2f3e46] mb-12">Psikoterapi sürecinde ergen ve yetişkin bireylerle; içsel çatışmalar, ilişkisel zorluklar, kimlik arayışları ve duygusal süreçler üzerinde derinlemesine çalışmaktadır. Aşağıda, sıklıkla destek sunduğu konular yer almaktadır:</h4>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {workingAreasData.map(({ title, longContent, icon: Icon }, idx) => {
                        const hasContent = longContent && longContent.trim().length > 0;

                        return (
                            <div
                                key={idx}
                                className="group relative bg-white p-6 pl-16 shadow-sm border border-gray-200 transition-all duration-300 h-[380px] flex flex-col hover:bg-[var(--color-accentMint)] hover:border-transparent hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="absolute left-4 top-6 text-[32px] text-[var(--color-accentMint)] group-hover:text-white transition-all duration-300">
                                    <Icon />
                                </div>

                                <div className="flex flex-col flex-1 min-h-0">
                                    <h3 className="text-lg font-semibold text-[#2f3e46] mb-3 group-hover:text-white transition-all duration-300 flex-shrink-0">
                                        {title}
                                    </h3>
                                    {hasContent && (
                                        <div className="text-sm text-gray-600 group-hover:text-white transition-all duration-300 prose prose-sm max-w-none overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                    ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                                                    li: ({ children }) => <li className="text-sm">{children}</li>,
                                                    h3: ({ children }) => <h3 className="text-base font-semibold mb-1 mt-2">{children}</h3>,
                                                }}
                                            >
                                                {longContent}
                                            </ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
