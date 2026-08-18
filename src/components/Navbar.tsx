import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-200
        ${scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-surface-200 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <nav className="container-main flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="group text-xl font-bold text-neutral-900 tracking-tight" aria-label="PrepIQ home">
          Prep<span className="text-accent-600 inline-block transition-transform duration-200 group-hover:-rotate-3 group-hover:text-accent-500">IQ</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#cta" className="btn-primary hidden md:inline-flex">
          Start Preparing
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-neutral-700 hover:text-neutral-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white z-40">
          <nav className="container-main py-6 flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-base text-neutral-700 hover:text-neutral-900 border-b border-surface-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-primary mt-4 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Start Preparing
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
