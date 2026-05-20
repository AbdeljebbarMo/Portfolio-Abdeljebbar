import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-10 border-t border-line">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          © {new Date().getFullYear()} {personal.name} — Tous droits réservés
        </p>
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          Conçu et développé avec ♥ — {personal.location}
        </p>
      </div>
    </footer>
  );
}
