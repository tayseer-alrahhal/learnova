"use client";

import { useSession } from "next-auth/react";
import { PiUser, PiGear, PiBookOpen, PiCertificate, PiChartLine } from "react-icons/pi";
import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
    const { data: session } = useSession();
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview", icon: PiUser },
        { id: "courses", label: "My Courses", icon: PiBookOpen },
        { id: "progress", label: "Progress", icon: PiChartLine },
        { id: "certificates", label: "Certificates", icon: PiCertificate },
        { id: "settings", label: "Settings", icon: PiGear },
    ];

    return (
        <div className="min-h-screen bg-[var(--color-background)] py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Profile Header */}
                <div className="bg-[var(--color-surface)] rounded-xl shadow-lg p-6 mb-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center overflow-hidden">
                            {session?.user?.image ? (
                                <Image
                                    src={session.user.image}
                                    alt={`${session.user.name || 'User'}'s avatar`}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <span className="text-3xl text-white">
                                    {session?.user?.name?.[0]?.toUpperCase() || "U"}
                                </span>
                            )}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
                                {session?.user?.name || "User"}
                            </h1>
                            <p className="text-[var(--color-text-secondary)]">
                                {session?.user?.email || "user@example.com"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-64 bg-[var(--color-surface)] rounded-xl shadow-lg p-4">
                        <nav className="space-y-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id
                                            ? "bg-[var(--color-primary)] text-white"
                                            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]"
                                            }`}
                                    >
                                        <Icon size={20} />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 bg-[var(--color-surface)] rounded-xl shadow-lg p-6">
                        {activeTab === "overview" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Profile Overview</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-[var(--color-surface-hover)] p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Enrolled Courses</h3>
                                        <p className="text-2xl font-bold text-[var(--color-primary)]">0</p>
                                    </div>
                                    <div className="bg-[var(--color-surface-hover)] p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Completed Courses</h3>
                                        <p className="text-2xl font-bold text-[var(--color-success)]">0</p>
                                    </div>
                                    <div className="bg-[var(--color-surface-hover)] p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Certificates</h3>
                                        <p className="text-2xl font-bold text-[var(--color-accent)]">0</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "courses" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">My Courses</h2>
                                <p className="text-[var(--color-text-secondary)]">You haven&apos;t enrolled in any courses yet.</p>
                            </div>
                        )}

                        {activeTab === "progress" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Learning Progress</h2>
                                <p className="text-[var(--color-text-secondary)]">Your learning progress will appear here.</p>
                            </div>
                        )}

                        {activeTab === "certificates" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Certificates</h2>
                                <p className="text-[var(--color-text-secondary)]">Your certificates will appear here.</p>
                            </div>
                        )}

                        {activeTab === "settings" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Account Settings</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                                            Display Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                            defaultValue={session?.user?.name || ""}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                            defaultValue={session?.user?.email || ""}
                                            disabled
                                        />
                                    </div>
                                    <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
