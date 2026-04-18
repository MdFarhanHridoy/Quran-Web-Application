'use client';

import Link from 'next/link';

interface HeaderProps {
  onSettingsClick: () => void;
}

export default function Header({ onSettingsClick }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg sm:text-2xl lg:text-4xl font-bold text-stone-800 hover:text-emerald-700 transition-colors"
          >
            The Holy Quran
          </Link>
          <button
            onClick={onSettingsClick}
            className="px-3 py-2 sm:px-4 bg-stone-800 text-white text-sm sm:text-base rounded-lg hover:bg-stone-900 transition-colors"
            aria-label="Open Settings"
          >
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
}
