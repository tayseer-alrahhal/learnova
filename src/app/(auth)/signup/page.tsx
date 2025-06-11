"use client";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PiBooks } from "react-icons/pi";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { RegisterSchema } from '@/utils/validationSchemas';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";


export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('student'); // Default role is student
    const route = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = { name, email, password, role };

        const validation = RegisterSchema.safeParse(user);
        if (!validation.success) {
            return toast.error(validation.error.errors[0].message);
        }

        setLoading(true)

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })

        const data = await res.json();

        if (res.ok) {
            setLoading(false);
            toast.success(data.message);
            route.push("/verify-message");
        } else if (res.status === 400) {
            setLoading(false);
            toast.error(data.message);
        } else if (res.status === 500) {
            setLoading(false);
            toast.error(data.message);
        }

        setName("");
        setEmail("");
        setPassword("");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-md w-full bg-[var(--color-surface)] p-8 rounded-xl shadow-lg my-5">
                <div className="flex items-center justify-center mb-6">
                    <PiBooks className="text-[var(--color-primary)] text-4xl mr-2" />
                    <h1 className="text-3xl font-bold text-[var(--color-primary)]">Learnova</h1>
                </div>

                <h2 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-2">Join Our Learning Community</h2>
                <p className="text-center text-[var(--color-text-secondary)] mb-6">Create an account to start your educational journey</p>

                {/* Google Sign Up Button */}
                <button
                    className="flex items-center justify-center cursor-pointer w-full border rounded-lg py-3 hover:bg-gray-100 transition"
                    onClick={() => { signIn("google") }}
                >
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
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Full Name</label>
                        <div className="relative">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                placeholder="John Doe"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
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
                    
                    {/* Role Selection */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">I am a</label>
                        <div className="flex space-x-4">
                            <div 
                                className={`flex-1 p-3 border rounded-lg cursor-pointer flex items-center justify-center transition ${role === 'student' ? 'bg-[var(--color-primary)] text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => setRole('student')}
                            >
                                <span className="font-medium">Student</span>
                            </div>
                            <div 
                                className={`flex-1 p-3 border rounded-lg cursor-pointer flex items-center justify-center transition ${role === 'teacher' ? 'bg-[var(--color-primary)] text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => setRole('teacher')}
                            >
                                <span className="font-medium">Teacher</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300 rounded" />
                        <label htmlFor="terms" className="ml-2 block text-sm text-[var(--color-text-secondary)]">
                            I agree to the <a href="#" className="text-[var(--color-primary)]">Terms of Service</a> and <a href="#" className="text-[var(--color-primary)]">Privacy Policy</a>
                        </label>
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition 
                            ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] cursor-pointer"
                            } text-white`}
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
                                Creating...
                            </>
                        ) : (
                            <>
                                <PiBooks className="mr-2" size={20} />
                                Create Your Account
                            </>
                        )}
                    </button>

                </form>

                <p className="text-center text-sm text-[var(--color-text-secondary)] mt-6">
                    Already have an account? <Link href="./signin" className="text-[var(--color-accent)] font-medium hover:underline">Sign in</Link>
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
