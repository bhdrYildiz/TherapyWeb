'use client'

import { motion } from 'framer-motion'
import '@fortawesome/fontawesome-free/css/all.min.css'

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-800">

            {/* Banner */}
            <section className="relative w-full h-[45vh] flex bg-fixed bg-center items-center justify-center" style={{ backgroundImage: "url('/images/hakkimdaBg.png')" }}>
                <div className="absolute inset-0" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-[#2f3e46] text-2xl sm:text-3xl font-bold tracking-wide uppercase mt-12 text-center"
                >
                    İLETİŞİM
                </motion.h1>
            </section>

            {/* Bilgilendirme Yazısı */}
            <section className="py-16 bg-white text-gray-700">
                <div className="max-w-7xl mx-auto px-6 text-start space-y-6">
                    <h2 className="text-2xl font-semibold text-[#2f3e46]">Terapiler Hakkında</h2>
                    <p className="text-lg leading-relaxed">
                        Terapilerimi hem <strong>online</strong> hem de <strong>yüz yüze</strong> olarak gerçekleştirebiliyorum.
                        Online seanslar <strong>Zoom</strong> veya <strong>Google Meet</strong> üzerinden yapılmakta olup,
                        yüz yüze görüşmeler için randevu almanız yeterlidir. Size en uygun terapi yöntemini birlikte belirleyebiliriz.
                        Her danışanın süreci benzersizdir, bu nedenle size özel bir yol haritası oluşturmak temel hedefimizdir.
                    </p>
                </div>
            </section>

            {/* İletişim Bilgileri + Harita + Form */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 space-y-10">
                    {/* Başlık */}
                    <h2 className="text-3xl font-bold text-[#2f3e46] text-center lg:text-left">
                        İletişim Bilgileri
                    </h2>

                    {/* Grid: Sol Bilgiler - Sağ Form */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Sol: Kartlı Bilgiler */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: "fas fa-phone",
                                    label: "Telefon",
                                    value: "+90 538 543 83 24",
                                    href: "tel:+905385438324"
                                },
                                {
                                    icon: "fas fa-envelope",
                                    label: "E-Posta",
                                    value: "klnpskeminekiyga@outlook.com",
                                    href: "mailto:klnpskeminekiyga@outlook.com"
                                },
                                {
                                    icon: "fas fa-map-marker-alt",
                                    label: "Adres",
                                    value: "İstanbul, Türkiye"
                                }
                            ].map(({ icon, label, value, href }, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 bg-white shadow-md rounded-md">
                                    <i className={`${icon} text-2xl text-[#5c5470] mt-2`} />
                                    <div>
                                        <h4 className="font-semibold text-[#2f3e46]">{label}</h4>
                                        {href ? (
                                            <a href={href} className="text-gray-600 hover:underline">{value}</a>
                                        ) : (
                                            <p className="text-gray-600">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sağ: İletişim Formu */}
                        <div className="bg-white shadow-md rounded-md p-6 space-y-6">
                            <h3 className="text-xl font-semibold text-[#2f3e46]">İletişim Formu</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Adınız Soyadınız"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2f3e46]"
                                />
                                <input
                                    type="email"
                                    placeholder="E-posta Adresiniz"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2f3e46]"
                                />
                                <input
                                    type="text"
                                    placeholder="Konu"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2f3e46]"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Mesajınız"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2f3e46]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#5c5470] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#2f3e46] transition"
                                >
                                    Gönder
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto mt-16 px-2">
                        <div className="w-full h-[450px]">
                            <iframe
                                title="Psikoloji Merkezi Konumu"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.745219343224!2d29.0282374!3d40.987059499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb53520b3baf%3A0x18f61abe0f9826d5!2s%C3%96z%20Psikoloji!5e0!3m2!1str!2str!4v1755350747306!5m2!1str!2str"
                                className="w-full h-full shadow rounded-md"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default ContactPage;
