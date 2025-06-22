"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PiGraduationCap, PiArrowRight, PiPlayCircle } from 'react-icons/pi'

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-2 rounded-full font-medium text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Transforming Education for Everyone
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Learn Without <span className="text-[var(--color-primary)]">Limits</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-[var(--color-text-secondary)] max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Discover a world of knowledge with our interactive courses, expert instructors, and a supportive community designed to help you achieve your learning goals.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/courses"
                                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-all duration-200 group"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <PiGraduationCap className="mr-2 text-xl" />
                                Explore Courses
                                <motion.span
                                    animate={{ x: isHovered ? 4 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <PiArrowRight className="ml-2" />
                                </motion.span>
                            </Link>

                            <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-medium hover:bg-[var(--color-primary)]/5 transition-all duration-200">
                                <PiPlayCircle className="mr-2 text-xl" />
                                Learn More
                            </Link>
                        </motion.div>

                        <motion.div
                            className="flex items-center space-x-4 pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <span className="text-xs font-medium text-[var(--color-primary)]">{i}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)]"><span className="font-semibold">10,000+</span> students already learning</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Interactive Elements */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-[4/3] max-w-lg mx-auto">
                            {/* Placeholder for hero image - replace with your actual image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] opacity-80"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center p-6">
                                    <h3 className="text-2xl font-bold mb-2">Interactive Learning Experience</h3>
                                    <p className="text-white/80">Engage with our interactive platform</p>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <span className="text-[var(--color-primary)] text-xl font-bold">A+</span>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-6 left-6 w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg"
                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            >
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6V12L16 14" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="12" r="9" stroke="var(--color-primary)" strokeWidth="2" />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -z-10 w-72 h-72 bg-[var(--color-secondary-light)]/30 rounded-full -top-10 -right-10 blur-3xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -z-10 w-64 h-64 bg-[var(--color-primary-light)]/20 rounded-full -bottom-10 -left-10 blur-3xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
