import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const leftLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Ministries', href: '#ministries' },
];
const rightLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#location' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:px-10">
        {/* Logo – left on mobile, centered on desktop */}
        <a href="#home" className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <span className="text-brand-400 text-xl leading-none">&#10013;</span>
          <span className="text-lg font-bold tracking-tight text-white">Worship</span>
        </a>

        {/* Spacer pushes burger to right on mobile */}
        <div className="flex-1 lg:hidden" />

        {/* Left nav – desktop */}
        <nav className="hidden flex-1 gap-8 lg:flex">
          {leftLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] font-medium tracking-wide text-white/70 transition hover:text-white">{l.label}</a>
          ))}
        </nav>

        {/* Right nav – desktop */}
        <nav className="hidden flex-1 justify-end gap-8 lg:flex">
          {rightLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] font-medium tracking-wide text-white/70 transition hover:text-white">{l.label}</a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="text-white/70 lg:hidden" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 px-6 pb-5 pt-3 lg:hidden">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-white/70 hover:text-white">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
