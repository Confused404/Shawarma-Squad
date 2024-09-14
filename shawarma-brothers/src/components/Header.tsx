"use client";
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navItems = [
        { name: 'Menu', href: '/menu' },
        { name: 'Location', href: '/location' },
        { name: 'About', href: '/about' },
        { name: 'Gift Cards', href: '/gift-cards' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-amber-100 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-800">Shawarma Delight</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-amber-900 hover:text-amber-700 transition duration-150 ease-in-out"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-amber-900">
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-amber-100 md:hidden">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-amber-900">
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center space-y-6 pt-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xl text-amber-900 hover:text-amber-700 transition duration-150 ease-in-out"
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}