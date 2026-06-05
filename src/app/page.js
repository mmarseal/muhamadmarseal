'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'

export default function Page() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      {splashDone && <div style={{ color: '#fff', padding: '2rem' }}>Home coming soon...</div>}
    </>
  )
}