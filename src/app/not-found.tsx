import React from 'react';
import Link from 'next/link';
import { PiBooks, PiArrowLeft, PiMagnifyingGlass } from 'react-icons/pi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* 404 Graphic */}
        <div className="relative flex justify-center mb-8">
          <div className="text-[10rem] font-bold text-[var(--color-primary)]/10 leading-none">
            404
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center">
            <PiMagnifyingGlass className="text-[var(--color-primary)] text-6xl mb-2" />
            <p className="text-xl font-semibold text-[var(--color-text-primary)]">Page Not Found</p>
          </div>
        </div>

        {/* Book Icon */}
        <div className="flex justify-center mb-6">
          <PiBooks className="text-[var(--color-primary)] text-5xl" />
        </div>

        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
          Oops! Looks like this lesson is missing
        </h1>

        <p className="text-[var(--color-text-secondary)] mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for isn&apos;t in our curriculum. Let&apos;s get you back on track with your learning journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-secondary)] transition w-full sm:w-auto"
          >
            <PiArrowLeft />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition w-full sm:w-auto"
          >
            Explore Courses
          </Link>
        </div>

        <p className="mt-12 text-sm text-[var(--color-text-secondary)]">
          Need help? <Link href="/contact" className="text-[var(--color-accent)] hover:underline">Contact Support</Link>
        </p>
      </div>
    </div>
  );
}
