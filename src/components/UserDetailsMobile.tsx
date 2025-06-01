'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { User, LogOut } from 'lucide-react'


export default function UserDetails() {
    const { data: session, status } = useSession()


    const isLoading = status === 'loading'
    const isAuthenticated = status === 'authenticated'

    return (
        <div className="">
            <div className="flex items-center justify-between overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:opacity-90 transition-all duration-200">
                <div className='flex items-center'>
                    <div className="rounded-full overflow-hidden border-2 border-blue-500 w-10 h-10 bg-gray-100 shadow-md cursor-pointer">
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
                                <User size={24} className="text-blue-500" />
                            </div>
                        )}
                    </div>

                    <div className="px-4">
                        <p className="text-sm text-left font-medium text-gray-800">
                            {session?.user?.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-500">
                            {session?.user?.email || ''}
                        </p>
                    </div>
                </div>

                <Link
                    href="/"
                    className="flex items-center  text-sm text-red-500"
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    <LogOut className="mr-2" size={20} />
                </Link>
            </div>
        </div>
    )
}