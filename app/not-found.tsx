'use client';

import Link from 'next/link';
import { IoAlertCircleOutline } from "react-icons/io5";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#edebfb] text-[#2f3e46] text-center px-4">
            <IoAlertCircleOutline className="w-16 h-16 text-[#2f3e46] mb-4" />
            <h1 className="text-4xl font-bold font-cormorant mb-2">404 - Sayfa Bulunamadı</h1>
            <p className="mb-6 text-[#2f3e46]">Aradığınız sayfa mevcut değil ya da taşınmış olabilir.</p>

            <Link
                href="/"
                className="bg-[#5c5470] hover:bg-[#ada3c9] text-[#1f2c42] font-semibold px-6 py-2 rounded transition"
            >
                Anasayfaya Dön
            </Link>
        </div>
    );
}