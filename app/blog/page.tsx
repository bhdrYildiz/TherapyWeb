'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '../data/blogPosts'
import { motion } from 'framer-motion'

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            <section className="relative w-full h-[45vh] flex bg-fixed bg-center items-center justify-center" style={{ backgroundImage: "url('/images/hakkimdaBg.png')" }}>
                <div className="absolute inset-0" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-[#2f3e46] text-4xl sm:text-5xl font-bold tracking-wide uppercase mt-12 text-center"
                >
                    Blog Yazılarım
                </motion.h1>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 text-[#2f3e46]">{post.title}</h2>
                                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                                <span className="text-[var(--color-accentMint)] font-medium underline">Devamını Oku →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
