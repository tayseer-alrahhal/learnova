import React from 'react'

export default function Spinner() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-10 h-10 rounded-full border-4 border-[var(--color-surface-hover)] border-t-[var(--color-primary)] animate-spin" />

                {/* Inner ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6   rounded-full border-4 border-[var(--color-surface-hover)] border-t-[var(--color-secondary)] animate-spin" style={{ animationDirection: 'reverse' }} />

                {/* Center dot */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] animate-pulse" /> */}
            </div>
        </div>
    )
}
