import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { contact } from '../data/content';

// 🔐 EmailJS — IDs configurés
const EMAILJS_SERVICE_ID = 'service_8ags8it';
const EMAILJS_TEMPLATE_ID = 'template_52c5gwr';
const EMAILJS_PUBLIC_KEY = 'IIuHOas8A_pPWcMqT';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // ✅ Initialiser EmailJS au montage du composant
  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      // Format de l'heure : "19 mai 2026 à 20:45"
      const now = new Date();
      const time = now.toLocaleString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: time,
          reply_to: form.email,
        }
      );

      console.log('✅ EmailJS success:', result);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      // Log détaillé pour debug
      console.error('❌ EmailJS error:', err);
      console.error('Status:', err?.status);
      console.error('Text:', err?.text);

      // Message d'erreur précis selon le code
      let msg = "Erreur lors de l'envoi. ";
      if (err?.status === 400) msg += "Vérifie les variables du template (name, email, message, time).";
      else if (err?.status === 401 || err?.status === 403) msg += "Public Key invalide ou domaine non autorisé.";
      else if (err?.status === 404) msg += "Service ID ou Template ID introuvable.";
      else if (err?.status === 412) msg += "Service Gmail/Outlook non connecté dans EmailJS.";
      else if (err?.status === 422) msg += "Variable manquante dans le template.";
      else if (err?.text) msg += `(${err.text})`;
      else msg += "Vérifie la console (F12) pour plus de détails.";

      setErrorMsg(msg);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="md:col-span-3">
            <p className="label mb-4">05 / Contact</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-text text-4xl md:text-7xl">
              Travaillons <em className="italic text-accent">ensemble</em>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-10"
          >
            <div>
              <p className="label mb-3">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="font-serif text-xl md:text-2xl hover:text-accent transition-colors inline-flex items-center gap-3 break-all"
              >
                <HiOutlineMail className="flex-shrink-0" /> {contact.email}
              </a>
            </div>

            <div>
              <p className="label mb-3">Téléphone</p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="font-serif text-2xl md:text-3xl hover:text-accent transition-colors inline-flex items-center gap-3"
              >
                <HiOutlinePhone /> {contact.phone}
              </a>
            </div>

            <div>
              <p className="label mb-3">Réseaux</p>
              <div className="space-y-2">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between max-w-md py-3 border-b border-line hover:border-fg transition-colors group gap-4"
                  >
                    <span className="font-mono text-sm uppercase tracking-wider">{social.name}</span>
                    <span className="text-muted group-hover:text-accent transition-colors text-sm truncate">
                      {social.handle} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-7 space-y-6 p-8 rounded-2xl border border-line"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <div>
              <label className="label block mb-2">Nom</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-line py-3 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="label block mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-line py-3 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="label block mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-line py-3 outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-60"
              style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}
            >
              {status === 'idle' && (
                <>
                  Envoyer <span className="transition-transform group-hover:translate-x-1">→</span>
                </>
              )}
              {status === 'sending' && 'Envoi…'}
              {status === 'sent' && '✓ Message envoyé'}
            </button>

            {errorMsg && (
              <p className="font-mono text-xs text-red-500 mt-2">
                {errorMsg}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
