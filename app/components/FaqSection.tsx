'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
    {
        question: 'Psikolojide terapi nedir ?',
        answer:
            'Terapi, bireyin duygusal zorluklarını, stresini, kaygılarını ve diğer psikolojik sorunlarını profesyonel bir destekle çözümlemesine yardımcı olan bilimsel bir süreçtir.'
    },
    {
        question: 'Seans süresi nedir ?',
        answer:
            'Bir terapi seansı genellikle 45-50 dakika arasında sürer. Ancak bazı durumlarda bu süre terapiste ve terapi türüne göre değişebilir.'
    },
    {
        question: 'Terapi kaç seans sürer ?',
        answer:
            'Terapinin ne kadar süreceği konusunda net bir sayı vermek doğru bir yaklaşım değildir. Bu süreç her bireyin ruhsal yapısına özgü olarak değişkenlik gösteren dinamik bir süreçtir.'
    },
    {
        question: 'Seans ücretleri nedir ?',
        answer:
            'Seans ücretleri; terapistin deneyimi, lokasyonu ve sunulan hizmete göre değişiklik gösterir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
    },
    {
        question: 'Randevu nasıl alınır ?',
        answer:
            'Randevu almak için iletişim sayfamızdaki formu doldurabilir veya doğrudan WhatsApp/telefon aracılığıyla bize ulaşabilirsiniz.'
    }
]

export const FaqSection = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleIndex = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        )
    }

    return (
        <section className="w-full py-24 bg-[#f8f9fa]">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                    Sıkça Sorulan Sorular
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndexes.includes(idx)

                        return (
                            <div
                                key={idx}
                                className={`transition-all duration-300 ease-in-out border border-gray-200 rounded-md overflow-hidden shadow-sm ${isOpen ? 'bg-white shadow-lg' : 'bg-white'
                                    }`}
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleIndex(idx)}
                                    className="w-full flex justify-between cursor-pointer items-center px-6 py-5 text-left bg-[#2f3e46]/90 hover:bg-[#2f3e46]/80 transition-colors duration-300"
                                >
                                    <span className="text-lg font-medium text-white">
                                        {faq.question}
                                    </span>
                                    <FaChevronDown
                                        className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] py-4' : 'grid-rows-[0fr] py-0'
                                        }`}
                                    style={{ transitionProperty: 'grid-template-rows, padding' }}
                                >
                                    <div className="text-[#2f3e46] text-base overflow-hidden">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
