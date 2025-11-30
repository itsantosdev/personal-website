'use client'

import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Skills } from '../components/Skills'
import { About } from '../components/About'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
