import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-10 py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-20">
          <div className="md:col-span-3">
            <p className="label mb-4">04 / Projets</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-text text-4xl md:text-6xl">
              Travaux <em className="italic text-accent">réalisés</em>.
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative border border-line rounded-2xl p-8 md:p-12 hover:border-fg transition-all duration-500 overflow-hidden"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 + 0.3 }}
                style={{ backgroundColor: project.accent }}
              />

              <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-2">
                  <p className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, '0')} / {project.year}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted leading-relaxed mb-6 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1 rounded-full border border-line"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:flex-col gap-3 md:items-end justify-end">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"
                    >
                      <FaGithub /> <span className="font-mono uppercase tracking-wider text-xs">GitHub</span>
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"
                    >
                      <HiOutlineExternalLink />{' '}
                      <span className="font-mono uppercase tracking-wider text-xs">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
