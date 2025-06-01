"use client"
import React from 'react'
import { signOut } from 'next-auth/react'

export default function Signout() {
    return (
        <button type='button' className='cursor-pointer'  onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
    )
}
