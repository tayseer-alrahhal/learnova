"use client"

import { useEffect, useState } from "react"
import { motion } from 'framer-motion'


export default function MouseMove() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div>
            {/* Interactive Cursor */}
            <motion.div
                className="max-md:hidden fixed w-10 h-10 border-2 border-[var(--color-primary)] rounded-full pointer-events-none z-50"
                style={{
                    left: mousePosition.x - 16,
                    top: mousePosition.y - 16,
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
        </div>
    )
}
