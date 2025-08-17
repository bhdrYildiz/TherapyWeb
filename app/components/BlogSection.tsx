'use client'

import React from 'react'
import Link from 'next/link'

type BlogPost = {
    id: number
    title: string
    slug: string
    date: string
    excerpt: string
    image: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Kaygı Bozukluklarıyla Nasıl Baş Edebiliriz?',
        slug: 'kaygi-bozukluklari',
        date: '2025-07-20',
        excerpt: 'Anksiyete bozukluklarının belirtileri, nedenleri ve başa çıkma yolları hakkında detaylı bilgiler bu yazıda sizi bekliyor.',
        image: '/images/resim11.png',
    },
    {
        id: 2,
        title: 'EMDR Terapisi Nedir ve Kimler İçin Uygundur?',
        slug: 'emdr-terapisi-nedir',
        date: '2025-07-10',
        excerpt: 'Travma sonrası stres bozukluğu gibi durumlarda kullanılan EMDR terapisinin temel prensiplerini ve sürecini anlattık.',
        image: '/images/resim13.png',
    },
    {
        id: 3,
        title: 'Online Terapi Gerçekten Etkili mi?',
        slug: 'online-terapi-etkili-mi',
        date: '2025-06-28',
        excerpt: 'Online terapinin yüz yüze terapiye göre avantajları ve sınırlarını keşfedin.',
        image: '/images/resim14.png',
    },
]

export const BlogSection = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl uppercase font-bold text-center text-[#2f3e46] mb-12">
                    Blog Yazılarım
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
                    Psikoloji ve danışmanlık üzerine kaleme aldığım içeriklerimi keşfedin.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 border border-gray-200"
                        >
                            <div className="overflow-hidden h-48">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#2f3e46] mb-1">{post.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                                <p className="text-base text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-[var(--color-accentMint)] font-semibold hover:underline"
                                >
                                    Devamını Oku →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href="/blog"
                    className="block mx-auto w-fit mt-12 text-[var(--color-accentMint)] font-semibold hover:underline"
                >
                    Tüm Yazıları Gör →
                </Link>
            </div>
        </section>
    )
}
