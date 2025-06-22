"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, GraduationCap, Play, Sparkles, TrendingUp, Users, Award } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
            {/* Interactive Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(67,97,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(67,97,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>

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
                    className="fixed w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                />
            </div>

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Animated Tagline */}
                            <div className="group animate-fade-in-up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
                                    <span className="text-blue-600 font-semibold text-sm tracking-wide">
                                        Transforming Education for Everyone
                                    </span>
                                </div>
                            </div>

                            {/* Interactive Main Headline */}
                            <div className="animate-fade-in-up-delay">
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                    Learn Without{" "}
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                                            Limits
                                        </span>
                                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    </span>
                                </h1>
                            </div>

                            {/* Enhanced Description */}
                            <div className="animate-fade-in-up-delay-2">
                                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-lg">
                                    Discover a world of knowledge with our{" "}
                                    <span className="font-semibold text-blue-600">interactive courses</span>,{" "}
                                    <span className="font-semibold text-purple-600">expert instructors</span>, and a{" "}
                                    <span className="font-semibold text-cyan-600">supportive community</span> designed to help you achieve
                                    your learning goals.
                                </p>
                            </div>

                            {/* Advanced CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
                                <Button
                                    size="lg"
                                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <GraduationCap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span className="relative z-10">Explore Courses</span>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group relative overflow-hidden border-2 border-blue-200 text-blue-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    <Play className="mr-2 h-4 w-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="relative z-10">Watch Demo</span>
                                </Button>
                            </div>

                            {/* Interactive Stats */}
                            <div className="flex items-center gap-6 pt-4 animate-fade-in-up-delay-4">
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div
                                            key={num}
                                            className="group w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                                        >
                                            <span className="group-hover:scale-110 transition-transform duration-200">{num}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-700 font-semibold">10,000+ students already learning</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <TrendingUp className="h-4 w-4 text-green-500" />
                                        <span>Growing by 500+ weekly</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Right Content - Interactive Card */}
                        <div className="relative animate-fade-in-up-delay-2">
                            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-8 lg:p-12 text-white border-0 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-[1.02] cursor-pointer">
                                {/* Glassmorphism Overlay */}
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Animated Grade Badge */}
                                <div className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    <span className="text-white font-bold text-lg">A+</span>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </div>

                                {/* Interactive Content */}
                                <div className="relative z-10 space-y-6 pt-8">
                                    <div className="space-y-3">
                                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:scale-105 transition-transform duration-300">
                                            Interactive Learning Experience
                                        </h3>
                                        <p className="text-white/90 text-lg group-hover:text-white transition-colors duration-300">
                                            Engage with our cutting-edge interactive platform
                                        </p>
                                    </div>

                                    {/* Feature Icons */}
                                    <div className="grid grid-cols-3 gap-4 mt-8">
                                        {[
                                            { icon: Clock, label: "24/7 Access" },
                                            { icon: Users, label: "Live Sessions" },
                                            { icon: Award, label: "Certificates" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="group/item flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                                            >
                                                <item.icon className="h-6 w-6 text-white group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300" />
                                                <span className="text-xs font-medium text-white/80 group-hover/item:text-white transition-colors duration-300">
                                                    {item.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Advanced Floating Elements */}
                                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-white/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse-slow group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow group-hover:scale-125 transition-transform duration-700"></div>

                                {/* Interactive Particles */}
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            left: `${20 + Math.random() * 60}%`,
                                            top: `${20 + Math.random() * 60}%`,
                                            animationDelay: `${Math.random() * 2}s`,
                                        }}
                                    />
                                ))}
                            </Card>

                            {/* Enhanced Decorative Elements */}
                            <div className="absolute -z-10 top-8 left-8 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                            <div className="absolute -z-10 bottom-12 right-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping animation-delay-1000"></div>
                            <div className="absolute -z-10 top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-float-slow animation-delay-2000 opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Custom Styles */}
            <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-25px) translateX(5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fade-in-up 1s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-up-delay-2 { animation: fade-in-up 1s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-up-delay-3 { animation: fade-in-up 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-fade-in-up-delay-4 { animation: fade-in-up 1s ease-out 0.8s forwards; opacity: 0; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-random { animation: float-random 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        .hover\\:shadow-4xl:hover {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.25), 0 30px 60px -30px rgba(67, 97, 238, 0.3);
        }
      `}</style>
        </section>
    )
}
