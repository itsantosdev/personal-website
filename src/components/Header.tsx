import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contato' },
  ]

  return (
    <motion.header
      ref={headerRef}
      className='fixed top-0 left-0 right-0 py-md px-lg bg-primary/95 backdrop-blur-md z-[1000] border-b border-accent/10 md:px-md sm:px-sm sm:py-sm'
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

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-lg'>
          {menuItems.map((item) => (
            <motion.a
              key={item.id}
              className="text-text no-underline font-medium text-base relative cursor-pointer transition-colors duration-300 hover:text-accent after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className='flex md:hidden flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer bg-transparent border-none z-[1001]'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <motion.span
            className='w-full h-0.5 bg-accent rounded-full'
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className='w-full h-0.5 bg-accent rounded-full'
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className='w-full h-0.5 bg-accent rounded-full'
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className='fixed left-0 right-0 bg-secondary/98 backdrop-blur-md border-b border-accent/10 shadow-xl md:hidden'
              style={{ top: `${headerHeight}px` }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex flex-col py-md px-lg gap-sm'>
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    className='text-text no-underline font-medium text-lg py-sm px-md rounded cursor-pointer transition-colors duration-300 hover:text-accent hover:bg-accent/10'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
