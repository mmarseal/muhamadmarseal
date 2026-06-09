'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'



export default function Page() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      {splashDone && (
        <>
          <Home />
          <About />
          <Projects />
          <Education />
          <Contact />
        </>
      )}
    </>
  )
}