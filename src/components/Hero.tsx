import { motion } from 'framer-motion'

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-lg relative overflow-hidden'
    >
      <motion.div
        className='absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(100,255,218,0.1)_0%,transparent_70%)] top-[-200px] right-[-200px] pointer-events-none'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className='max-w-[900px]'>
        <motion.p
          className='text-accent text-lg font-medium mb-sm'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olá, meu nome é
        </motion.p>
        <motion.h1
          className='text-6xl md:text-6xl sm:text-4xl font-bold mb-sm leading-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ítalo Santos.
        </motion.h1>
        <motion.h2
          className='text-3xl md:text-3xl sm:text-2xl text-textSecondary mb-md'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Desenvolvedor Frontend Web & Mobile
        </motion.h2>
        <motion.p
          className='text-xl text-textSecondary max-w-[600px] leading-[1.8] mb-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Especializado em criar experiências digitais excepcionais. Atualmente
          focado em desenvolver aplicações web e mobile acessíveis e focadas no
          usuário.
        </motion.p>
        <motion.button
          className='py-sm px-lg text-lg font-semibold text-accent bg-transparent border-2 border-accent rounded cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-accent'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
        >
          Entre em Contato
        </motion.button>
      </div>
    </section>
  )
}
