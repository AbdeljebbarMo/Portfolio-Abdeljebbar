import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { personal } from '../data/content';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-20">
      {/* Décor arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <div
          className="absolute bottom-10 -left-20 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--fg)' }}
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto w-full"
      >
        {/* Bandeau top : location + disponibilité */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12 flex-wrap">
          <span className="label">{personal.location}</span>
          <span className="h-px flex-1 bg-line max-w-32" />
          {personal.available && (
            <span className="flex items-center gap-2 label">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Disponible
            </span>
          )}
        </motion.div>

        {/* Layout 2 colonnes : texte + photo */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Colonne gauche : texte */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              variants={fadeUp}
              className="display-text text-5xl sm:text-7xl md:text-8xl lg:text-8xl mb-8"
            >
              <span className="block">{personal.firstName}</span>
              <em className="italic text-accent block">{personal.lastName}</em>
            </motion.h1>

            <motion.div variants={fadeUp} className="space-y-6 mb-10">
              <div>
                <p className="label mb-2">— Rôle</p>
                <p className="font-serif text-2xl md:text-3xl">{personal.role}</p>
              </div>
              <div>
                <p className="label mb-2">— À propos</p>
                <p className="text-lg leading-relaxed max-w-md text-muted">{personal.tagline}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300"
                style={{ color: 'var(--bg)', backgroundColor: 'var(--fg)' }}
              >
                Me contacter
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-8 py-4 border border-line rounded-full font-mono text-xs uppercase tracking-widest hover:border-fg transition-colors"
              >
                Voir mes projets
              </a>
            </motion.div>
          </div>

          {/* Colonne droite : photo avec décorations */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 sm:w-80 md:w-96 aspect-[3/4]">
              {/* Cadre décoratif arrière (rotation légère) */}
              <motion.div
                initial={{ opacity: 0, rotate: -8 }}
                animate={{ opacity: 1, rotate: -6 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute inset-0 border-2 rounded-2xl"
                style={{ borderColor: 'var(--accent)' }}
              />

              {/* Cadre principal avec photo */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative w-full h-full rounded-2xl overflow-hidden border border-line group"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={personal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay subtil au survol */}
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              </motion.div>

              {/* Badge "FULL-STACK" en bas */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full border font-mono text-[10px] uppercase tracking-widest backdrop-blur-sm"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--bg) 80%, transparent)',
                  borderColor: 'var(--line)',
                }}
              >
                ✦ Full-Stack
              </motion.div>

              {/* Étoile décorative en haut à droite */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.3, duration: 0.6, type: 'spring' }}
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
              >
                ✦
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Indicateur scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="hidden md:flex absolute bottom-0 right-6 md:right-10 flex-col items-center gap-3"
        >
          <span className="label rotate-90 origin-center mb-8">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiArrowDown className="text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
