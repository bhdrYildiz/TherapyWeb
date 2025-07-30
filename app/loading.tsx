'use client';

import { FiLoader } from "react-icons/fi";
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] text-[#5c5470]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4"
            >
                <FiLoader className="animate-spin w-12 h-12 text-[#2f3e46]" />
                <p className="text-lg font-cormorant">Sayfa yükleniyor...</p>
            </motion.div>
        </div>
    );
}