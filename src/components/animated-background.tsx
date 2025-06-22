"use client"

import { useState, useEffect } from "react"

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(67,97,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(67,97,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move" />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float-random"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                />
            ))}

            {/* Interactive Cursor Glow */}
            <div
                className="fixed w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                }}
            />

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-30" />
            <div className="absolute bottom-32 right-16 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping animation-delay-1000 opacity-30" />
            <div className="absolute top-1/2 left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float-slow animation-delay-2000 opacity-20" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse opacity-25" />
            <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-float-slow animation-delay-3000 opacity-15" />

            {/* Large Background Blurs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-teal-400/5 rounded-full blur-3xl animate-float-slow animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>
    )
}
