import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { nav, personal } from '../data/content';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b border-line' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 80%, transparent)' : 'transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span
            className="flex items-center justify-center w-10 h-10 rounded-full font-serif font-medium text-base tracking-tight transition-transform group-hover:scale-105"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
          >
            AM
          </span>
          <span className="font-serif text-xl tracking-tight hidden sm:inline">
            {personal.firstName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-fg transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Basculer le thème"
            className="p-2 rounded-full border border-line hover:border-fg transition-colors"
          >
            {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-full border border-line"
          >
            {open ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg border-t border-line"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm uppercase tracking-widest text-muted hover:text-fg transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
