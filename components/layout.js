// components/Layout.js
import React from 'react';
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo/Title */}
          <Link href='/' className="text-2xl font-bold">Quizmaster JS</Link>

          {/* Main Menu */}
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} Quizmaster JS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
