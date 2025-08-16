import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import { blogPosts } from '@/app/data/blogPosts'

type BlogParams = {
    params: Promise<{ slug: string }>
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

    return (
        <main className="min-h-screen bg-white text-gray-800">
            <section
                className="relative w-full h-[45vh] flex bg-fixed bg-center items-center justify-center"
                style={{ backgroundImage: "url('/images/hakkimdaBg.png')" }}
            >
                <h1 className="relative z-10 text-[#2f3e46] text-2xl sm:text-3xl font-bold tracking-wide uppercase mt-12 text-center">
                    {post.title}
                </h1>
            </section>

            <section className="py-16 bg-gray-50">
                <p className="max-w-7xl mx-auto px-6 items-start text-base text-gray-500 mb-4">
                    {post.date}
                </p>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8">
                        <h1 className="text-3xl font-bold text-[#2f3e46] mb-6">{post.title}</h1>

                        <div className="w-full h-[350px] relative mb-8">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full rounded-md"
                            />
                        </div>

                        <article className="text-base text-gray-800 leading-relaxed space-y-2 max-w-full">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </article>
                    </div>

                    <aside className="lg:col-span-4">
                        <h2 className="text-xl font-bold text-[#2f3e46] mt-2">Son Eklenenler</h2>
                        <ul className="space-y-4">
                            {blogPosts.slice(0, 4).map((item) => (
                                <li key={item.slug}>
                                    <a
                                        href={`/blog/${item.slug}`}
                                        className="flex flex-col gap-1 bg-white rounded-md shadow hover:shadow-md transition mt-6 p-4 border border-gray-100"
                                    >
                                        <span className="text-xs text-gray-500">{item.date}</span>
                                        <p className="text-md font-medium text-[#2f3e46] leading-snug">
                                            {item.title}
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>
        </main>
    )
}