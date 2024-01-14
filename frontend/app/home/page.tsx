"use client"

import Hero from '@/components/main/Hero'
import Image from 'next/image'
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-7 flex flex-col items-center gap-6 text-6xl font-bold text-white max-w-[60px] w-auto h-auto"
      >
        <span>
          <span className="text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            P.E.P.P.E.R.
          </span>
        </span>
      </motion.div>
    </div>
  )
}