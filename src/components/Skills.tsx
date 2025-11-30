import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

type SkillLevel = 'expert' | 'advanced' | 'intermediate'

interface Skill {
  name: string
  level: SkillLevel
}

interface SkillCategoryType {
  title: string
  icon: string
  skills: Skill[]
}

export const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories: SkillCategoryType[] = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: [
        { name: 'React', level: 'expert' },
        { name: 'TypeScript', level: 'expert' },
        { name: 'Next.js', level: 'intermediate' },
        { name: 'JavaScript', level: 'expert' },
        { name: 'HTML/CSS', level: 'expert' },
        { name: 'Tailwind CSS', level: 'intermediate' },
        { name: 'Emotion', level: 'advanced' },
      ],
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 'expert' },
        { name: 'Expo', level: 'advanced' },
        { name: 'iOS', level: 'advanced' },
        { name: 'Android', level: 'advanced' },
        { name: 'Styled Components', level: 'advanced' },
      ],
    },
    {
      title: 'Tools',
      icon: '⚙️',
      skills: [
        { name: 'React Query', level: 'advanced' },
        { name: 'Redux', level: 'advanced' },
        { name: 'MobX', level: 'advanced' },
        { name: 'React Hook Form', level: 'advanced' },
        { name: 'Git', level: 'advanced' },
        { name: 'Integração com APIs', level: 'advanced' },
      ],
    },
  ]

  const getSkillBadgeClasses = (level: SkillLevel) => {
    const baseClasses =
      'flex items-center gap-xs py-xs px-md rounded-[20px] text-text text-sm font-medium transition-all duration-150 hover:-translate-y-0.5 hover:shadow-accent'

    switch (level) {
      case 'expert':
        return `${baseClasses} bg-accent/15 border border-accent`
      case 'advanced':
        return `${baseClasses} bg-accent/10 border border-accent/40`
      case 'intermediate':
        return `${baseClasses} bg-accent/5 border border-accent/20`
    }
  }

  const getSkillDotClasses = (level: SkillLevel) => {
    const baseClasses = 'w-2 h-2 rounded-full'

    switch (level) {
      case 'expert':
        return `${baseClasses} bg-accent`
      case 'advanced':
        return `${baseClasses} bg-accent/70`
      case 'intermediate':
        return `${baseClasses} bg-accent/40`
    }
  }

  return (
    <section
      id='skills'
      ref={ref}
      className='min-h-screen py-xxl px-lg md:py-xxl md:px-lg sm:py-xl sm:px-md max-w-[1200px] mx-auto'
    >
      <motion.h2
        className="text-4xl md:text-4xl sm:text-3xl font-bold mb-xl flex items-center gap-md after:content-[''] after:flex-1 after:h-px after:bg-textSecondary after:opacity-30 after:max-w-[300px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Habilidades
      </motion.h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg'>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className='bg-secondary p-md rounded-lg border border-accent/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-accent-lg'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          >
            <h3 className='text-2xl font-semibold text-accent mb-md flex items-center gap-sm'>
              <span>{category.icon}</span>
              {category.title}
            </h3>
            <div className='flex flex-col gap-sm items-start'>
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={getSkillBadgeClasses(skill.level)}
                >
                  <span className={getSkillDotClasses(skill.level)} />
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
