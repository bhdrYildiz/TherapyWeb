
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '../data/blogPosts'
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'

export default function BlogPage() {
    const featuredPost = blogPosts[0]
    const otherPosts = blogPosts.slice(1)

    return (
        <main className="min-h-screen bg-[#F7F8F5] text-[#2D4035]">


            {/* HERO */}

            {/* HERO / BANNER */}
            <section className="relative isolate min-h-[390px] overflow-hidden bg-[#302C2A] text-white sm:min-h-[440px]">

                {/* Sağ dekoratif mimari çizgiler */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] overflow-hidden opacity-60">
                    <div className="absolute -right-[180px] -top-[340px] h-[850px] w-[850px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute -right-[110px] -top-[270px] h-[710px] w-[710px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute -right-[40px] -top-[200px] h-[570px] w-[570px] rounded-full border border-[#8C8077]/30" />
                    <div className="absolute right-[30px] top-[70px] h-[420px] w-[420px] rounded-full border border-[#8C8077]/20" />
                </div>

                {/* İnce çerçeve */}
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
                        Blog Yazılarım<span className="text-[#B9A99B]">.</span>
                    </h1>

                    <p className="mt-7 max-w-lg text-[14px] leading-[1.9] text-[#D0C7C0] sm:text-[15px]">
                        Psikolojiye, insan ilişkilerine ve iç dünyamıza dair bilimsel bilgiler, düşünceler ve farklı bakış açıları.
                    </p>
                </div>
                {/* Alt sınır */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#B5A69A]" />
            </section>


            {/* BLOG İÇERİĞİ */}
            <section className="relative py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">

                    <div className="mb-10 flex items-end justify-between gap-5 border-b border-[#D7E0D7] pb-5">
                        <div>
                            <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#78907F]">Yazılar ve Düşünceler</span>
                            <h2 className="font-serif text-3xl text-[#2D4035] sm:text-4xl">Son Yazılar</h2>
                        </div>
                        <span className="text-[12px] text-[#829487]">{blogPosts.length} Yazı</span>
                    </div>

                    {/* ÖNE ÇIKAN YAZI */}
                    {featuredPost && (
                        <Link href={`/blog/${featuredPost.slug}`} className="group mb-14 grid overflow-hidden rounded-[24px] border border-[#E1E8E0] bg-white shadow-[0_15px_50px_-35px_rgba(35,65,45,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-35px_rgba(35,65,45,0.25)] lg:grid-cols-2">
                            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px]">
                                <Image src={featuredPost.image} alt={featuredPost.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                                <span className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#789581]">Öne Çıkan Yazı</span>
                                <span className="mb-3 text-[12px] text-[#91A196]">{featuredPost.date}</span>
                                <h3 className="mb-5 font-serif text-3xl leading-[1.25] text-[#2D4035] sm:text-4xl">{featuredPost.title}</h3>
                                <p className="mb-8 text-[14px] leading-[1.9] text-[#68796E]">{featuredPost.excerpt}</p>
                                <span className="inline-flex items-center gap-3 self-start border-b border-[#789581] pb-2 text-[13px] font-medium text-[#476B51]">
                                    Yazıyı Oku <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            </div>
                        </Link>
                    )}

                    {/* DİĞER YAZILAR */}
                    {otherPosts.length > 0 && (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {otherPosts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E1E8E0] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(35,65,45,0.25)]">
                                    <div className="relative h-[230px] overflow-hidden">
                                        <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>

                                    <div className="flex flex-1 flex-col p-7">
                                        <span className="mb-3 text-[12px] text-[#91A196]">{post.date}</span>
                                        <h3 className="mb-4 font-serif text-[24px] leading-[1.3] text-[#2D4035]">{post.title}</h3>
                                        <p className="mb-7 line-clamp-3 text-[13px] leading-[1.85] text-[#68796E]">{post.excerpt}</p>
                                        <span className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-[#52775C]">
                                            Devamını Oku <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {blogPosts.length === 0 && (
                        <p className="py-16 text-center text-[#68796E]">Henüz yayımlanmış bir yazı bulunmuyor.</p>
                    )}
                </div>
            </section>
        </main>
    )
}
