import React from 'react';
import Link from 'next/link';
import { PiBooks, PiInstagramLogo, PiFacebookLogo, PiTwitterLogo, PiYoutubeLogo } from 'react-icons/pi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-surface)] border-t border-gray-200">
            <div className="container mx-auto px-4 py-12">
                {/* Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <PiBooks className="text-[var(--color-primary)] text-3xl mr-2" />
                            <span className="text-2xl font-bold text-[var(--color-primary)]">Learnova</span>
                        </div>
                        <p className="text-[var(--color-text-secondary)] text-sm">
                            Empowering minds through accessible, quality education for all learners.
                        </p>
                        <div className="flex items-center space-x-4 pt-2">
                            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]" aria-label="Facebook">
                                <PiFacebookLogo size={22} />
                            </a>
                            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]" aria-label="Twitter">
                                <PiTwitterLogo size={22} />
                            </a>
                            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]" aria-label="Instagram">
                                <PiInstagramLogo size={22} />
                            </a>
                            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]" aria-label="YouTube">
                                <PiYoutubeLogo size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Learning</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/courses" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    All Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/tutorials" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Tutorials
                                </Link>
                            </li>
                            <li>
                                <Link href="/webinars" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Webinars
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Student Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact/Support */}
                    <div>
                        <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    Feedback
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:support@learnova.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                                    support@learnova.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-gray-200 pt-8 pb-8">
                    <div className="max-w-md mx-auto">
                        <h3 className="text-[var(--color-text-primary)] font-semibold text-center mb-3">
                            Join our newsletter
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-sm text-center mb-4">
                            Get the latest updates on new courses, teaching tips, and educational resources.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            />
                            <button
                                type="submit"
                                className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-secondary)] transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-secondary)]">
                    <div className="mb-4 md:mb-0">
                        &copy; {currentYear} Learnova. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link href="/terms" className="hover:text-[var(--color-primary)]">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="hover:text-[var(--color-primary)]">
                            Privacy Policy
                        </Link>
                        <Link href="/cookies" className="hover:text-[var(--color-primary)]">
                            Cookie Policy
                        </Link>
                        <Link href="/accessibility" className="hover:text-[var(--color-primary)]">
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
