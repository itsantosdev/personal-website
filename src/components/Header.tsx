import { motion } from 'framer-motion'

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className='fixed top-0 left-0 right-0 py-md px-lg md:px-lg sm:py-sm sm:px-md bg-primary/95 backdrop-blur-md z-[1000] border-b border-accent/10'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <motion.div
          className='text-2xl font-bold text-accent cursor-pointer select-none'
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
        >
          {'</>'}
        </motion.div>
        <div className='flex gap-lg md:gap-lg sm:gap-md'>
          {[
            { id: 'about', label: 'Sobre' },
            { id: 'projects', label: 'Projetos' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contato' },
          ].map((item) => (
            <motion.a
              key={item.id}
              className="text-text no-underline font-medium text-base md:text-base sm:text-sm relative cursor-pointer transition-colors duration-300 hover:text-accent after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
