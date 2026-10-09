
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { blogPosts } from '@/app/data/blogPosts'

type BlogParams = {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts.find((item) => item.slug === slug)

    return {
        title: post?.title ?? 'Blog Yazısı',
        description: post?.excerpt ?? 'Blog detay sayfası',
    }
}

export default async function BlogDetailPage({ params }: BlogParams) {
    const { slug } = await params
    const post = blogPosts.find((item) => item.slug === slug)

    if (!post) return notFound()

    const recentPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 4)

    return (
        <main className="min-h-screen bg-[#F7F8F5] text-[#2D4035]">

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

                    <h1 className="max-w-4xl font-serif text-[38px] font-normal leading-[1.18] tracking-tight text-[#F8F6F3] sm:text-[52px] lg:text-[64px]">
                        {post.title}<span className="text-[#B9A99B]">.</span>
                    </h1>

                    <div className="mt-9 flex flex-wrap items-center gap-3 text-[11px] tracking-wide text-[#B9A99B]">
                        <Link href="/blog" className="transition-colors hover:text-white">
                            Blog Yazılarım
                        </Link>
                        <span className="h-px w-8 bg-[#8C8077]" />
                        <span>{post.date}</span>
                    </div>
                </div>

                {/* Alt sınır */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#B5A69A]" />
            </section>


            {/* MAKALE */}
            <section className="py-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:px-10">

                    {/* ANA YAZI */}
                    <div className="min-w-0">
                        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[22px] border border-[#E1E8E0] bg-white shadow-[0_20px_50px_-35px_rgba(35,65,45,0.2)]">
                            <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 850px" className="object-cover" />
                        </div>

                        <div className="mb-8 border-l-2 border-[#A6BCA9] pl-5">
                            <p className="text-[15px] leading-[1.85] text-[#64796A]">{post.excerpt}</p>
                        </div>

                        <article className="max-w-none text-[15px] leading-[1.95] text-[#46594B] sm:text-[16px] [&_p]:mb-5 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-[#2D4035] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:text-[#2D4035] [&_strong]:font-semibold [&_strong]:text-[#2D4035] [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#A6BCA9] [&_blockquote]:bg-white/60 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_a]:text-[#52775C] [&_a]:underline [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </article>

                        <div className="mt-14 border-t border-[#D7E0D7] pt-8">
                            <Link href="/blog" className="inline-flex items-center gap-3 text-[13px] font-medium text-[#52775C] transition-colors hover:text-[#2D4035]">
                                <FiArrowLeft /> Diğer Yazılara Dön
                            </Link>
                        </div>
                    </div>

                    {/* SAĞ SIDEBAR */}
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <div className="rounded-[20px] border border-[#E1E8E0] bg-white/80 p-7">
                            <div className="mb-6">
                                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#91A196]">Keşfet</span>
                                <h2 className="font-serif text-2xl text-[#2D4035]">Diğer Yazılar</h2>
                            </div>

                            <div className="divide-y divide-[#E5EBE5]">
                                {recentPosts.map((item) => (
                                    <Link key={item.slug} href={`/blog/${item.slug}`} className="group block py-5 first:pt-0 last:pb-0">
                                        <span className="mb-2 block text-[11px] text-[#91A196]">{item.date}</span>
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="font-serif text-[17px] leading-[1.45] text-[#354B3B] transition-colors group-hover:text-[#789581]">{item.title}</h3>
                                            <FiArrowUpRight className="mt-1 shrink-0 text-[#789581] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {recentPosts.length === 0 && (
                                <p className="text-sm text-[#68796E]">Diğer yazılar yakında burada yer alacak.</p>
                            )}
                        </div>
                    </aside>

                </div>
            </section>
        </main>
    )
}
