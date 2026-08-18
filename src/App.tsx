import { useEffect, useState, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TryQuestion from './components/TryQuestion';
import ProductShowcase from './components/ProductShowcase';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Konami Code sequence: ↑↑↓↓←→←→BA
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export default function App() {
  const [toast, setToast] = useState<{ visible: boolean; exiting: boolean; message: string }>({
    visible: false,
    exiting: false,
    message: '',
  });
  const konamiIndex = useRef(0);

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, exiting: false, message });
    setTimeout(() => setToast((t) => ({ ...t, exiting: true })), 2700);
    setTimeout(() => setToast({ visible: false, exiting: false, message: '' }), 3000);
  }, []);

  // Easter egg: Konami Code (↑↑↓↓←→←→BA)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[konamiIndex.current];
      if (e.key === expected || e.key.toLowerCase() === expected) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI_SEQUENCE.length) {
          konamiIndex.current = 0;
          showToast('🎮 You found the easter egg. Now go practice graphs.');
        }
      } else {
        konamiIndex.current = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showToast]);

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
      { threshold: 0.1 }
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
        <div className="reveal"><TryQuestion /></div>
        <div className="reveal"><ProductShowcase /></div>
        <div className="reveal"><FinalCTA /></div>
      </main>
      <Footer />

      {/* Toast notification */}
      {toast.visible && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg shadow-lg
            ${toast.exiting ? 'toast-exit' : 'toast-enter'}`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
