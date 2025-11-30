import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

import conectaSusa from '../assets/projects/conecta-susa.png'
import timesheetApp from '../assets/projects/timesheet-app.png'

interface Project {
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
}

export const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects: Project[] = [
    {
      title: 'Timesheet WebApp',
      description:
        'Uma aplicação web desenvolvida com foco em produtividade e controle de ponto. Permite o registro de horários de entrada, saída e almoço, além de exibir a diferença entre as horas trabalhadas e a carga horária esperada no dia. O projeto aplica boas práticas de desenvolvimento frontend, priorizando experiência do usuário, organização de código e componentização.',
      // image:
      //   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      image: timesheetApp,
      tags: ['React', 'TypeScript', 'Material UI', 'Firebase'],
      live: 'https://italofsan-timesheet.netlify.app/',
      featured: true,
    },
    {
      title: 'Conecta SUSA',
      description:
        'Uma aplicação web voltada para o gerenciamento e acompanhamento de animais. Permite o cadastro completo de pets e o monitoramento de vacinas, histórico de consultas e doenças. O projeto demonstra boa arquitetura de componentes, organização de estados e experiência de uso fluida e intuitiva.',
      // image:
      //   'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
      image: conectaSusa,
      tags: ['React', 'TypeScript', 'Material UI'],
      github: 'https://github.com/italofsan/conecta-susa',
      live: 'https://conectasusa.netlify.app',
      featured: true,
    },
    {
      title: 'Outro Projeto 1',
      description:
        'Dashboard de análise de dados com gráficos interativos e relatórios em tempo real.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['Next.js', 'Chart.js', 'Tailwind'],
    },
    {
      title: 'Outro Projeto 2',
      description:
        'API RESTful escalável com documentação completa e testes automatizados.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Outro Projeto 3',
      description:
        'Sistema de gerenciamento de conteúdo com editor WYSIWYG e upload de mídia.',
      image:
        'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&h=300&fit=crop',
      tags: ['React', 'Redux', 'AWS S3'],
    },
    {
      title: 'Outro Projeto 4',
      description:
        'Landing page responsiva com animações e otimização para SEO.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      id='projects'
      ref={ref}
      className='min-h-screen py-xxl px-lg md:py-xxl md:px-lg sm:py-xl sm:px-md max-w-[1200px] mx-auto'
    >
      <motion.h2
        className="text-4xl md:text-4xl sm:text-3xl font-bold mb-md flex items-center gap-md after:content-[''] after:flex-1 after:h-px after:bg-textSecondary after:opacity-30 after:max-w-[300px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Projetos
      </motion.h2>
      <motion.p
        className='text-textSecondary text-lg mb-xl'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Alguns projetos que desenvolvi recentemente
      </motion.p>

      {/* Featured Projects */}
      <div className='grid gap-xl mb-xxl'>
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-12 gap-md items-center relative md:grid-cols-12 sm:flex sm:flex-col ${
              index % 2 === 1 ? 'rtl' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div
              className={`col-span-7 relative rounded-lg overflow-hidden bg-secondary group ${
                index % 2 === 1 ? 'ltr' : ''
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover grayscale brightness-[0.7] transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100'
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-accent opacity-20 transition-opacity duration-300 group-hover:opacity-0' />
            </div>
            <div
              className={`col-span-5 flex flex-col gap-sm z-10 md:col-span-5 sm:p-md sm:bg-secondary sm:rounded-lg ${
                index % 2 === 1 ? 'ltr' : ''
              }`}
            >
              <p className='text-accent text-sm font-medium'>
                Projeto em Destaque
              </p>
              <h3 className='text-2xl font-bold text-text mb-xs'>
                {project.title}
              </h3>
              <div className='bg-secondary p-md rounded-lg text-textSecondary text-base leading-[1.7] shadow-lg sm:bg-transparent sm:p-0 sm:shadow-none'>
                {project.description}
              </div>
              <ul className='flex flex-wrap gap-sm list-none'>
                {project.tags.map((tag, tagIndex) => (
                  <li
                    key={tagIndex}
                    className='text-textSecondary text-sm font-mono'
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className='flex gap-md mt-sm'>
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text hover:text-accent transition-colors duration-200'
                    aria-label='GitHub'
                  >
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text hover:text-accent transition-colors duration-200'
                    aria-label='Live Demo'
                  >
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <motion.h3
        className='text-3xl font-bold mb-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Outros Projetos
      </motion.h3>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg'>
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            className='bg-secondary p-lg rounded-lg border border-accent/10 flex flex-col gap-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-accent-lg'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <div className='w-full h-[200px] rounded-lg overflow-hidden mb-sm'>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className='w-full h-full object-cover'
              />
            </div>
            <h4 className='text-xl font-semibold text-text'>{project.title}</h4>
            <p className='text-textSecondary text-sm leading-[1.6] flex-1'>
              {project.description}
            </p>
            <ul className='flex flex-wrap gap-xs list-none mt-auto'>
              {project.tags.map((tag, tagIndex) => (
                <li
                  key={tagIndex}
                  className='text-textSecondary text-xs font-mono'
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
