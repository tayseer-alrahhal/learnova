"use client"
import { signIn } from 'next-auth/react'

export default function SigninWithGoogle() {
    return (
        <button type='button' onClick={() => { signIn("google") }}>Sign in with Google</button>
    )
}
