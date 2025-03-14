"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const links = [
    {name: "Home", path: "/"},
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"},
]

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold mr-2">KvobjeSoft</span>
                        </div>
                    </div>
                    
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map(link => (
                            <Link key={link.name} href={link.path} className="hover:text-gray-300 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image src="/KS2.png" width={50} height={50} alt="KvobjeSoft Logo" />
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            className="text-white hover:text-gray-300 focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map(link => (
                            <Link 
                                key={link.name} 
                                href={link.path} 
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}