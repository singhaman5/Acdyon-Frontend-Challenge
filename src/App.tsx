import { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductShowcase from './components/ProductShowcase';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [toast, setToast] = useState<{ visible: boolean; exiting: boolean }>({
    visible: false,
    exiting: false,
  });

  // Easter egg: Ctrl+K / Cmd+K
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setToast({ visible: true, exiting: false });
      setTimeout(() => setToast({ visible: true, exiting: true }), 2700);
      setTimeout(() => setToast({ visible: false, exiting: false }), 3000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Scroll reveal — Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="reveal"><Features /></div>
        <div className="reveal"><HowItWorks /></div>
        <div className="reveal"><ProductShowcase /></div>
        <div className="reveal"><FinalCTA /></div>
      </main>
      <Footer />

      {/* Easter egg toast */}
      {toast.visible && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg shadow-lg
            ${toast.exiting ? 'toast-exit' : 'toast-enter'}`}
          role="status"
          aria-live="polite"
        >
          You found the weak area. 🎯
        </div>
      )}
    </>
  );
}
