"use client"
// components/Header.tsx
import Link from 'next/link';
import { PiBooks, PiGraduationCap, PiNotebook } from "react-icons/pi";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import UserDetails from './UserDetails';
import { motion, AnimatePresence } from 'framer-motion';
import UserDetailsMobile from './UserDetailsMobile';
import { Layers, MessageCircleWarning, Settings, User, Users } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();


    const isActive = (path: string) => {
        return pathname === path ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)]';
    };

    return (
        <header className="bg-[var(--color-surface)] shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <PiBooks className="text-[var(--color-primary)] text-3xl" />
                    <span className="text-2xl font-bold text-[var(--color-primary)]">
                        Learnova
                    </span>
                </Link>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/courses" className={`${isActive('/courses')} hover:text-[var(--color-primary)] font-medium transition flex items-center`}>
                        <PiNotebook className="mr-1" />
                        Courses
                    </Link>
                    <Link href="/resources" className={`${isActive('/resources')} hover:text-[var(--color-primary)] font-medium transition`}>
                        Resources
                    </Link>
                    <Link href="/community" className={`${isActive('/community')} hover:text-[var(--color-primary)] font-medium transition`}>
                        Community
                    </Link>
                    <Link href="/about" className={`${isActive('/about')} hover:text-[var(--color-primary)] font-medium transition`}>
                        About
                    </Link>
                </nav>

                {/* Buttons - Desktop */}
                {session ? (
                    <div className='hidden md:flex items-center space-x-4'>
                        <UserDetails />
                    </div>
                ) : (
                    status !== "loading" ? (
                        <div className="hidden md:flex items-center space-x-4">
                            <Link href="/signin" className="px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-medium transition">
                                Sign In
                            </Link>
                            <Link href="/signup" className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] font-medium transition flex items-center">
                                <PiGraduationCap className="mr-1" />
                                Sign Up
                            </Link>
                        </div>
                    ) : (
                        <div>
                        </div>
                    )
                )}

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-[var(--color-text-primary)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {/* Mobile Sidebar Menu with Animation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="md:hidden fixed inset-0 bg-black/50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            className="md:hidden fixed inset-y-0 right-0 w-full bg-[var(--color-surface)] shadow-xl z-50 flex flex-col"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            {/* Close button */}
                            <div className="flex justify-between items-center flex-row-reverse p-4 border-b border-gray-200">
                                <button onClick={() => setMobileMenuOpen(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                                    <PiBooks className="text-[var(--color-primary)] text-2xl" />
                                    <span className="text-xl font-bold text-[var(--color-primary)]">
                                        Learnova
                                    </span>
                                </Link>

                            </div>

                            {/* Brand/Logo */}
                            {/* <div className="p-4 border-b border-gray-200">
                                <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                                    <PiBooks className="text-[var(--color-primary)] text-2xl" />
                                    <span className="text-xl font-bold text-[var(--color-primary)]">
                                        Learnova
                                    </span>
                                </Link>
                            </div> */}

                            {/* Navigation */}
                            <nav className="flex-1 overflow-y-auto p-4">
                                <div className="flex flex-col space-y-4">
                                    <Link
                                        href="/courses"
                                        className={`${isActive('/courses')} hover:text-[var(--color-primary)] font-medium transition flex items-center p-2 rounded-lg hover:bg-gray-100`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <PiNotebook className="mr-2" size={20} />
                                        Courses
                                    </Link>
                                    <Link
                                        href="/resources"
                                        className={`${isActive('/resources')} hover:text-[var(--color-primary)] font-medium transition flex items-center p-2 rounded-lg hover:bg-gray-100`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Layers className="mr-2" size={20} />
                                        Resources
                                    </Link>
                                    <Link
                                        href="/community"
                                        className={`${isActive('/community')} hover:text-[var(--color-primary)] font-medium transition flex items-center p-2 rounded-lg hover:bg-gray-100`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Users className="mr-2" size={20} />
                                        Community
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={`${isActive('/about')} hover:text-[var(--color-primary)] font-medium transition flex items-center p-2 rounded-lg hover:bg-gray-100`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <MessageCircleWarning className="mr-2" size={20} />
                                        About
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className={`${isActive('/profile')} hover:text-[var(--color-primary)] font-medium transition flex items-center p-2 rounded-lg hover:bg-gray-100`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <User className="mr-2" size={20} />
                                        Profile
                                    </Link>
                                    <Link
                                        href="/settings"
                                        className={`${isActive('/settings')} hover:text-[var(--color-primary)] font-medium transition flex items-center p-2 rounded-lg hover:bg-gray-100`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Settings className="mr-2" size={20} />
                                        Settings
                                    </Link>
                                </div>
                            </nav>

                            {/* Auth Buttons */}
                            <div className="p-4 border-t border-gray-200">
                                {session ? (
                                    <div className="py-2">
                                        <UserDetailsMobile />
                                    </div>
                                ) : (
                                    status !== "loading" && (
                                        <div className="flex flex-col space-y-2">
                                            <Link
                                                href="/signin"
                                                className="px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] text-center hover:bg-[var(--color-primary)] hover:text-white transition"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Sign In
                                            </Link>
                                            <Link
                                                href="/signup"
                                                className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-center hover:bg-[var(--color-secondary)] transition flex items-center justify-center"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <PiGraduationCap className="mr-1" />
                                                Sign Up
                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
