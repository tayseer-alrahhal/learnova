'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function VerificationSuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-[var(--color-surface)] rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2 
              }}
            >
              <div className="rounded-full bg-[var(--color-primary-light)] bg-opacity-20 p-3">
                <CheckCircle size={48} className="text-[var(--color-primary)]" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-[var(--color-text-primary)] text-center"
            >
              Email Verified Successfully!
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[var(--color-text-secondary)] text-center"
            >
              Your account has been activated. You can now access all features of LearnOva.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full pt-4"
            >
              <Link 
                href="/signin" 
                className="block w-full text-center py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium rounded-lg transition-all duration-200"
              >
                Sign In to Your Account
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link 
                href="/" 
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors duration-200"
              >
                Return to Home
              </Link>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ delay: 0.7 }}
          className="bg-[var(--color-primary-light)] bg-opacity-10 p-4"
        >
          <p className="text-[var(--color-text-secondary)] text-sm text-center">
            Thank you for joining LearnOva! We&apos;re excited to have you on board.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
