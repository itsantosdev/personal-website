import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id='contact'
      ref={ref}
      className='py-md px-lg md:py-md md:px-lg sm:py-xl sm:px-md max-w-[800px] mx-auto flex flex-col justify-center items-center text-center'
    >
      <motion.p
        className='text-accent text-base font-medium mb-sm'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Qual o próximo passo?
      </motion.p>
      <motion.h2
        className='text-5xl md:text-5xl sm:text-3xl font-bold mb-md'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Entre em Contato
      </motion.h2>
      <motion.p
        className='text-lg text-textSecondary leading-[1.8] mb-xl max-w-[600px]'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Estou sempre aberto a novas oportunidades e projetos interessantes. Se
        você tem uma pergunta ou apenas quer dizer oi, minha caixa de entrada
        está sempre aberta. Vou fazer o meu melhor para responder!
      </motion.p>
      <motion.a
        href='mailto:itsantosdev@outlook.com'
        className='py-md px-xl text-lg font-semibold text-accent bg-transparent border-2 border-accent rounded cursor-pointer transition-all duration-300 no-underline inline-block hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-accent'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Diga Olá
      </motion.a>
      <motion.div
        className='flex gap-lg mt-xl'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href='https://github.com/italofsan'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-textSecondary text-2xl transition-all duration-150 hover:text-accent hover:-translate-y-1'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/italofsan/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-textSecondary text-2xl transition-all duration-150 hover:text-accent hover:-translate-y-1'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
          </svg>
        </a>
      </motion.div>
      <footer className='mt-lg pt-lg border-t border-accent/10 text-textSecondary text-sm'>
        <p>Desenvolvido por Ítalo Santos • 2025</p>
      </footer>
    </section>
  )
}
