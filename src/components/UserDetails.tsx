'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { User, LogOut, Settings } from 'lucide-react'
import Signout from './Signout'

export default function UserDetails() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { data: session, status } = useSession()

    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const isLoading = status === 'loading'
    const isAuthenticated = status === 'authenticated'

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className=" flex items-center justify-center rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:opacity-90 transition-all duration-200 cursor-pointer"
                disabled={isLoading}
                aria-label="User menu"
            >
                <div className="rounded-full overflow-hidden border-2 border-blue-500 w-10 h-10 bg-gray-100 shadow-md">
                    {isLoading ? (
                        <div className="w-full h-full bg-gray-200 animate-pulse" />
                    ) : isAuthenticated && session?.user?.image ? (
                        <Image
                            src={session.user.image}
                            alt={`${session.user.name || 'User'}'s avatar`}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                            {/* <User size={24} className="text-blue-500" /> */}

                            <span className="text-2xl text-blue-500">
                                {session?.user?.name?.[0]?.toUpperCase() || "U"}
                            </span>
                        </div>
                    )}
                </div>
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-xl py-2 z-50 border border-gray-200 transform transition-all duration-200 ease-out">
                    {isAuthenticated && session?.user && (
                        <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-800 truncate">
                                {session.user.name || 'User'}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                                {session.user.email || ''}
                            </p>
                        </div>
                    )}

                    <div className="py-1">
                        <Link
                            href="/profile"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <User className="mr-2" size={16} />
                            Profile
                        </Link>

                        <Link
                            href="/settings"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <Settings className="mr-2" size={16} />
                            Settings
                        </Link>
                    </div>

                    <div className="py-1 border-t border-gray-100">
                        {isAuthenticated ? (
                            <Link
                                href=""
                                className="flex items-center cursor-pointer  px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                <LogOut className="mr-2" size={16} />
                                <Signout />
                            </Link>
                        ) : (
                            <Link
                                href="/api/auth/signin"
                                className="flex items-center px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                <LogOut className="mr-2" size={16} />
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}