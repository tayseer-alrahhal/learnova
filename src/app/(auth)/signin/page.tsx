"use client";
import { LoginSchema } from '@/utils/validationSchemas';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PiStudent, PiBooks } from "react-icons/pi";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";



export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const route = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const validation = LoginSchema.safeParse({ email, password });
        if (!validation.success) {
            return toast.error(validation.error.errors[0].message);
        }
        setLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        })

        if (res?.ok) {
            route.push("/");
            toast.success("Signed in successfully. Welcome back! ✅");
        } else if (res?.status === 401) {
            toast.error("Sign in failed. Please check your credentials and try again. ❌");
            setLoading(false);
        } else {
            toast.error("Sign in failed. Please try again. ❌");
            setLoading(false);
        }

        setEmail("")
        setPassword("")

    }

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-md w-full bg-[var(--color-surface)] p-8 rounded-xl shadow-lg border-t-4 border-b-4 border-[var(--color-primary)]">
                <div className="flex items-center justify-center mb-6">
                    <PiBooks className="text-[var(--color-primary)] text-4xl mr-2" />
                    <h1 className="text-3xl font-bold text-[var(--color-primary)]">Learnova</h1>
                </div>

                <h2 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-2">Welcome Back</h2>
                <p className="text-center text-[var(--color-text-secondary)] mb-6">Sign in to continue your learning journey</p>

                {/* Google Sign In Button */}
                <button className="flex items-center justify-center cursor-pointer w-full border rounded-lg py-3 hover:bg-gray-100 transition"
                    onClick={() => { signIn("google") }}>
                    <FcGoogle size={24} className="mr-2" />
                    <span className="text-[var(--color-text-primary)] font-medium">Continue with Google</span>
                </button>

                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-3 text-sm text-[var(--color-text-secondary)]">or with email</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Email/Password Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Email Address</label>
                        <div className="relative">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                placeholder="you@example.com"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Password</label>
                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                placeholder="••••••••"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--color-text-secondary)]">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)]">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition 
                        ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] cursor-pointer'} 
                        text-white`}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    ></path>
                                </svg>
                                Signing in...
                            </>
                        ) : (
                            <>
                                <PiStudent className="mr-2" size={20} />
                                Sign In to Your Account
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center text-sm text-[var(--color-text-secondary)] mt-6">
                    New to LearnOva? <Link href="./signup" className="text-[var(--color-accent)] font-medium hover:underline">Create an account</Link>
                </p>
            </motion.div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}
