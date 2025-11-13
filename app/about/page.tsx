'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCompass, FaShieldAlt, FaHeart } from 'react-icons/fa'

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
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/resim2.jpg"
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
                            Klinik Psikolog Emine Kıyga, lisans eğitimini Marmara Üniversitesi Psikolojik Danışmanlık ve Rehberlik Anabilim Dalı’nda onur öğrencisi olarak tamamlamıştır.
                            Ardından Psikoterapi Enstitüsü’nde üç yıl süren Bütüncül Psikoterapi eğitimine başlamıştır. Eğitimin ilk yılını tamamladıktan sonra eşzamanlı olarak İstanbul Aydın Üniversitesi Klinik Psikoloji Yüksek Lisans Programı’nda eğitimine başlamış olup tezini teslim ederek hem yüksek lisansını hem de Bütüncül Psikoterapi eğitimini başarıyla tamamlamıştır. Tez çalışmasında “Kaçıngan Bağlanma ile Kırılgan Narsisizm Arasındaki İlişkide Kendiliknesnesi İhtiyaçlarının Aracı Rolü” adlı konuyu ele almıştır.
                            <br />
                            <br />
                            Mesleki eğitimlerinde uzun soluklu eğitimler başta olmak üzere çeşitli eğitimler almış ve halen aktif olarak güncel eğitimlerden faydalanarak kendini geliştirmeye devam etmektedir. Eğitimlere ek olarak hem kendi terapi sürecinde geçmekte olup hem de süpervizyonlara aktif olarak devam etmektedir.
                            <br />
                            <br />
                            Klinikte çalıştığı grup ergen ve yetişkin danışanlar olmakla birlikte Üsküdar Belediyesi Çocuk Enstitüsü’nde çocuklara da gelişimsel destek amacıyla çeşitli çalışmalar yapmaktadır. Öğrencilik yıllarında Beşiktaş Rehberlik ve Araştırma Merkezi ve çeşitli özel klinikler başta olmak üzere birçok staj deneyimine sahiptir. Yetişkin ve ergen danışanlarla yüz yüze psikolojik danışma süreçlerini İstanbul/Kadıköy’de bulunan özel bir klinikte yürütmekte olup bunun yanı sıra online psikolojik danışma hizmeti de vermektedir.
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
                        className="text-3xl font-bold mb-12 text-[var(--color-deepPurple)]"
                    >
                        Çalışma Prensiplerim
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Danışan Odaklı Planlama",
                                description:
                                    "Her süreci ayrıntılı ayrıntılı anamnez süreciyle başlatır, seansı danışanın hedeflerine göre yapılandırırım.",
                                icon: FaCompass,
                            },
                            {
                                title: "Gizlilik ve Etik",
                                description:
                                    "Sürecin her aşamasında mesleki etik ilkelere bağlı kalarak güvenli ve sınırları net bir ilişki alanı kurarım.",
                                icon: FaShieldAlt,
                            },
                            {
                                title: "Bilimsel Temelli Yaklaşım",
                                description:
                                    "Danışanın duygularını regüle etmesine destek veren bilimsel, yargılayıcı olmayan bir terapi atmosferi sunarım.",
                                icon: FaHeart,
                            },
                        ].map(({ title, description, icon: Icon }, index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden bg-gradient rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left"
                            >
                                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-accentMint)] via-[#9dbbae] to-[var(--color-lavender)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-3 mb-4 text-[var(--color-deepPurple)]">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-[#d9e2dd]/70">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
                                <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--color-deepPurple)]/70">
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Eğitimler ve Deneyimler */}
            <section className="py-20 bg-white">
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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
                    >
                        Tamamladığı başlıca eğitimler şunlardır:
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Bütüncül Psikoterapi Eğitimi",
                                subtitle: "Psikiyatrist Dr. Tahir Özakkaş",
                                details: "Psikoterapi Enstitüsü | Teorik eğitim, vaka formülasyonu, süpervizyon"
                            },
                            {
                                title: "Psikodinamik Psikoterapi Temel Eğitimi",
                                subtitle: "Prof. Dr. Doğan Şahin",
                                details: "Aktarım, direnç ve içgörü temelli psikodinamik yaklaşım"
                            },
                            {
                                title: "EMDR 1. Düzey Uygulayıcı Eğitimi",
                                subtitle: "Prof. Dr. Emre Konuk",
                                details: "Davranış Bilimleri Enstitüsü | Eğitim + süpervizyon"
                            },
                            {
                                title: "Dissosiyatif Kimlik Bozukluğu Eğitimi",
                                subtitle: "Prof. Dr. Medaim Yanık",
                                details: "1. ve 2. Düzey + Süpervizyon | Parça çalışmaları ve entegrasyon"
                            },
                            {
                                title: "Bilişsel Davranışçı Terapi",
                                subtitle: "Dr. Hakan Türkçapar",
                                details: "BDT protokolleri, düşünce-duygu-davranış modeli"
                            },
                            {
                                title: "Gelişim Odaklı Psikoterapi",
                                subtitle: "Çocuk ve ergen gelişim süreçleri",
                                details: "Gelişimsel ihtiyaçlar, bağlanma dinamikleri"
                            },
                            {
                                title: "Psikodrama",
                                subtitle: "Grup ve bireysel uygulamalar",
                                details: "Isınma teknikleri, rol değişimi, katarsis"
                            },
                            {
                                title: "Kısa Süreli Çözüm Odaklı Terapi",
                                subtitle: "Çözüm odaklı yaklaşım",
                                details: "Danışan kaynaklarının keşfi ve güçlendirilmesi"
                            },
                            {
                                title: "Ergenlerde Kayıp ve Yas",
                                subtitle: "BDT yönelimli çalışma",
                                details: "Yas süreci, duygusal düzenleme, kaynak oluşturma"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden rounded-md bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-accentMint)] via-[#9dbbae] to-[var(--color-lavender)]" />
                                <h3 className="text-lg font-semibold text-[var(--color-deepPurple)] mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-medium">{item.subtitle}</p>
                                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.details}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-white/80 backdrop-blur border border-[#d9e2dd] rounded-md shadow-sm overflow-hidden"
                    >
                        <div className="bg-[var(--color-deepPurple)] px-8 py-6">
                            <h3 className="text-2xl font-semibold text-white tracking-wide">
                                Akademik Katılımlar ve Yayınlar
                            </h3>
                            <p className="text-white/90 mt-2 text-sm md:text-base leading-relaxed">
                                Eğitimlerin yanı sıra ulusal ve uluslararası düzeyde sempozyum ve kongrelere
                                konuşmacı ve dinleyici olarak aktif biçimde katılım sağlamaktadır.
                            </p>
                        </div>

                        <div className="px-8 py-6 space-y-6 text-gray-700">
                            <p className="leading-relaxed">
                                6. ve 8. Uluslararası Bütüncül Psikoterapi Kongreleri’nde sunulmuş ve onaylanmış iki bildirisi bulunmaktadır:
                            </p>

                            <ul className="space-y-3 text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-md bg-[var(--color-accentMint)]" />
                                    <span>
                                        “Mahler’in Ayrışma-Bireyleşme Kuramının Kültürümüz Perspektifinden İncelenmesi”
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-md bg-[var(--color-accentMint)]" />
                                    <span>
                                        “René Spitz’in Yetimhane Deneyinin Schore’un Nörogelişimsel Kuramı Perspektifinde İncelenmesi”
                                    </span>
                                </li>
                            </ul>

                            <div className="pt-4 border-t border-dashed border-[#d9e2dd]">
                                <h4 className="text-lg font-semibold text-[var(--color-deepPurple)]">
                                    Yayınlar
                                </h4>
                                <p className="mt-2 text-sm md:text-base leading-relaxed">
                                    Yüksek lisans tezi dışında, “Borderline Kişiliklerin Terapisinde Aktarım,
                                    Karşı Aktarım, Yansıtmalı Özdeşim ve Sağ Beyin” başlıklı hakemli makalesi
                                    yayımlanmıştır.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}

export default AboutPage
