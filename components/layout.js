// components/Layout.js
import React from 'react';
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href='/' className="text-2xl font-bold">Quizmaster JS</Link>
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