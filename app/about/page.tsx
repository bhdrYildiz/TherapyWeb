'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero */}
            <section className="relative w-full h-[45vh] flex bg-fixed bg-center items-center justify-center" style={{ backgroundImage: "url('/images/hakkimdaBg.png')" }}>
                <div className="absolute inset-0" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-[#2f3e46] text-2xl sm:text-3xl font-bold tracking-wide uppercase mt-12 text-center"
                >
                    Hakkımda
                </motion.h1>
            </section>

            {/* Hakkımda */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/Eminekiyga.jpg"
                            alt="Psikolog Emine Kiyga"
                            width={500}
                            height={500}
                            className="rounded-md shadow-lg object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold mb-6">Ben Kimim?</h2>
                        <p className="text-gray-700 leading-relaxed text-base">
                            Psikoterapist olarak dinamik, güleryüzlü ve alanındaki güncel gelişmeleri takip eden ve öğrenmeye ve her zaman gelişmeye açıktır. Lisans döneminde ve sonrasında psikoloji alanında çeşitli eğitim ve deneyimlerle kendisini geliştirmeye devam etmektedir.                            <br />
                            Mezun olduğundan beri hem yüz yüze hem de online olarak etik kurallar ve sınırlar çerçevesinde aktif bir şekilde danışan görmektedir. Yetişkin gruplarla bireysel psikoterapiler yürütmektedir. <br />
                            Bilişsel Davranışçı Terapi, EMDR gibi bilimsel yöntemlerle bireysel danışmanlık veriyorum. Amacım, danışanlarımın kendilerini daha iyi tanımalarına ve yaşamlarında daha sağlıklı kararlar almalarına yardımcı olmak.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Yaklaşım */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12"
                    >
                        Çalışma Yaklaşımım
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Bilimsel Yaklaşım",
                                description:
                                    "Güncel ve kanıta dayalı terapi yöntemleriyle danışanlarıma destek sunarım.",
                            },
                            {
                                title: "Gizlilik İlkesi",
                                description:
                                    "Danışan gizliliği en öncelikli ilkelerimden biridir.",
                            },
                            {
                                title: "Empati ve Anlayış",
                                description:
                                    "Danışanlarımla empatik ve yargılayıcı olmayan bir ortamda çalışırım.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Eğitimler ve Deneyimler */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        Eğitimler ve Deneyimler
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Psikoloji Lisans Eğitimi",
                                institution: "X Üniversitesi, 2014 - 2018",
                                type: "Eğitim"
                            },
                            {
                                title: "Klinik Psikoloji Yüksek Lisansı",
                                institution: "Y Üniversitesi, 2019 - 2021",
                                type: "Eğitim"
                            },
                            {
                                title: "Bilişsel Davranışçı Terapi (BDT) Sertifikası",
                                institution: "Türk Psikologlar Derneği, 2020",
                                type: "Sertifika"
                            },
                            {
                                title: "EMDR 1. ve 2. Düzey Uygulayıcı Eğitimi",
                                institution: "EMDR Derneği, 2021",
                                type: "Sertifika"
                            },
                            {
                                title: "Uzman Klinik Psikolog – ABC Psikoloji Merkezi",
                                institution: "İstanbul, 2021 – Halen",
                                type: "Deneyim"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white max-w-5xl p-5 border-l-4 border-[var(--color-deepPurple)] shadow-sm hover:shadow-md rounded-md"
                            >
                                <h3 className="text-xl font-semibold text-[var(--color-deepPurple)]">{item.title}</h3>
                                <p className="text-gray-600">{item.institution}</p>
                                <span className="inline-block mt-2 text-sm px-3 py-1 bg-[var(--color-deepPurple)] text-white rounded-full">
                                    {item.type}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default AboutPage
