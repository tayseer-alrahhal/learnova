'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MailCheck } from 'lucide-react';

export default function EmailVerificationNoticePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-[var(--color-surface)] rounded-2xl shadow-2xl p-8 md:p-10"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-[var(--color-primary-light)] bg-opacity-30 p-4 rounded-full">
            <MailCheck size={56} className="text-white" />
          </div>

          <h2 className="text-3xl font-extrabold text-[var(--color-text-primary)]">
            Please Verify Your Email
          </h2>

          <p className="text-[var(--color-text-secondary)] max-w-sm">
            We&apos;ve sent a confirmation link to your email address. Please check your inbox (and spam folder) to verify and activate your account.
          </p>

          <button
            onClick={() => {/* Resend logic here */}}
            className="w-full cursor-pointer md:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 px-6 rounded-xl font-medium transition duration-200"
          >
            Resend Verification Email
          </button>

          <Link
            href="/"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] underline transition-colors duration-200 text-sm"
          >
            Return to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
