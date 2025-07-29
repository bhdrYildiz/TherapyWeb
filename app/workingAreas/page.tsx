'use client'

import { motion } from 'framer-motion'
import { WorkingAreas } from '../components/WorkingAreas'

export default function TherapiesPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* HERO */}
            <section className="relative w-full h-[45vh] flex bg-fixed bg-center items-center justify-center" style={{ backgroundImage: "url('/images/terapilerBg.png')" }}>
                <div className="absolute inset-0" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-[#2f3e46] text-4xl sm:text-5xl font-bold tracking-wide uppercase mt-12 text-center"
                >
                    Terapiler
                </motion.h1>
            </section>

            {/* WORKING AREAS */}
            <WorkingAreas />
        </main>
    )
}
