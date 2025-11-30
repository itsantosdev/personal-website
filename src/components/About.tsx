import { useRef } from 'react'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'

import myPhoto from '../assets/my-photo.jpg'

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const technologies = [
    'React',
    'React Native',
    'TypeScript',
    'Next.js',
    'JavaScript',
    'React Query',
  ]

  return (
    <section
      id='about'
      ref={ref}
      className='min-h-screen py-xxl px-lg md:py-xxl md:px-lg sm:py-xl sm:px-md max-w-[1200px] mx-auto'
    >
      <motion.h2
        className="text-4xl md:text-4xl sm:text-3xl font-bold mb-xl flex items-center gap-md after:content-[''] after:flex-1 after:h-px after:bg-textSecondary after:opacity-30 after:max-w-[300px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Sobre Mim
      </motion.h2>
      <div className='grid grid-cols-[3fr_2fr] md:grid-cols-[3fr_2fr] sm:grid-cols-1 gap-xl'>
        <motion.div
          className='flex flex-col gap-md'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className='text-lg text-textSecondary leading-[1.8]'>
            Olá! Sou um desenvolvedor frontend apaixonado por criar experiências
            digitais que fazem a diferença. Minha jornada no desenvolvimento web
            começou há seis anos e desde então tenho me dedicado a construir
            aplicações que são não apenas bonitas, mas também funcionais e
            acessíveis.
          </p>
          <p className='text-lg text-textSecondary leading-[1.8]'>
            Trabalho tanto com desenvolvimento web quanto mobile, sempre
            aplicando as melhores práticas e tecnologias mais modernas. Acredito
            que o código limpo e a atenção aos detalhes são fundamentais para
            criar produtos de qualidade.
          </p>
          <p className='text-lg text-textSecondary leading-[1.8]'>
            Aqui estão algumas tecnologias com as quais trabalho recentemente:
          </p>
          <ul className='grid grid-cols-2 gap-sm mt-md list-none'>
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="text-textSecondary text-base flex items-center gap-xs before:content-['▹'] before:text-accent before:text-xl"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className='relative max-w-[300px] md:max-w-[300px] sm:max-w-[250px] justify-self-center group'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative rounded-lg overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-accent after:opacity-30 after:transition-opacity after:duration-300 group-hover:after:opacity-0">
            <Image
              src={myPhoto}
              alt='Profile'
              className='w-full h-auto block rounded-lg'
            />
          </div>
          <div className='image-border absolute top-5 left-5 right-[-20px] bottom-[-20px] border-2 border-accent rounded-lg z-[-1] transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5' />
        </motion.div>
      </div>
    </section>
  )
}
