'use client'

import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const hobbies = [
  { text: 'Working out',      emoji: '🏋️' },
  { text: 'Side projects',    emoji: '🚀' },
  { text: 'Listening to music', emoji: '🎧' },
  { text: 'Coffee',           emoji: '☕' },
  { text: 'Tech blogs',       emoji: '📖' },
]

const codeLines = [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '  <meta charset="UTF-8" />',
  "  <title>Hi, I'm Marseal!</title>",
  '</head>',
  '<body>',
  "  <h1>Let's build.</h1>",
  '</body>',
]

// SVG fallback for icons not in devicon
const ShadcnIcon = () => (
  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const ExpressIcon = () => (
  <svg width="35" height="35" viewBox="0 0 24 24" fill="rgba(255,255,255,0.75)">
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.865-.668L21.4 9.37l-3.511 4.682zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.348c-.059-.277-.11-.558-.138-.838zm1.114-.238h9.375c-.096-2.337-1.385-4.082-4.118-4.123C3.763 7.17 1.324 9.01 1.116 11.338z"/>
  </svg>
)

const allSkills = [
  { name: 'JavaScript', devicon: 'javascript' },
  { name: 'TypeScript', devicon: 'typescript' },
  { name: 'Python',     devicon: 'python' },
  { name: 'PHP',        devicon: 'php' },
  { name: 'C++',        devicon: 'cplusplus' },
  { name: 'React',      devicon: 'react' },
  { name: 'Next.js',    devicon: 'nextjs' },
  { name: 'Tailwind',   devicon: 'tailwindcss' },
  { name: 'ShadCN',     devicon: null, CustomIcon: ShadcnIcon },
  { name: 'Node.js',    devicon: 'nodejs' },
  { name: 'Express',    devicon: null, CustomIcon: ExpressIcon },
  { name: 'Prisma',     devicon: 'prisma' },
  { name: 'PostgreSQL', devicon: 'postgresql' },
  { name: 'MySQL',      devicon: 'mysql' },
  { name: 'MongoDB',    devicon: 'mongodb' },
  { name: 'Supabase',   devicon: 'supabase' },
  { name: 'Git',        devicon: 'git' },
  { name: 'GitHub',     devicon: 'github' },
  { name: 'Figma',      devicon: 'figma' },
  { name: 'Postman',    devicon: 'postman' },
  { name: 'Vercel',     devicon: 'vercel' },
  { name: 'VS Code',    devicon: 'vscode' },
]

const marqueeItems = [...allSkills, ...allSkills]

export default function About() {
  const container = useRef(null)
  const [hobbyIndex, setHobbyIndex] = useState(0)
  const [animState, setAnimState] = useState('visible')

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('exit')
      setTimeout(() => {
        setHobbyIndex(i => (i + 1) % hobbies.length)
        setAnimState('enter')
        setTimeout(() => setAnimState('visible'), 320)
      }, 280)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    gsap.fromTo('.bento-cell',
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 78%',
        }
      }
    )
  }, { scope: container })

  const hobby = hobbies[hobbyIndex]
  const slideStyle = {
    exit:    { opacity: 0, transform: 'translateY(-36px)' },
    enter:   { opacity: 0, transform: 'translateY(36px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  }[animState]

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 2.5rem;
          animation: marquee 32s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .cell-summary  { grid-row: span 2; }
        .cell-like     { grid-column: span 2; }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
          }
          .cell-summary  { grid-row: span 1; grid-column: span 2; }
          .cell-like     { grid-column: span 2; }
          .cell-single   { grid-column: span 1; }
        }

        @media (max-width: 480px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .cell-summary  { grid-column: span 1; }
          .cell-like     { grid-column: span 1; }
          .cell-single   { grid-column: span 1; }
        }

        .about-section {
          padding: 6rem 5rem;
        }
        @media (max-width: 768px) {
          .about-section { padding: 4rem 1.5rem; }
        }
      `}</style>

      <section id="about" ref={container} className="about-section" style={{ background: '#0a0a0a' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
            01 / About
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <div className="bento-grid">

          {/* Summary */}
          <div className="bento-cell cell-summary" style={{ ...cell, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 280 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
              Full-Stack developer{' '}
              <span style={{ color: 'rgba(255,255,255,0.28)', fontWeight: 400 }}>
                with a love for building meaningful products.
              </span>
            </h2>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.45)' }}>
              Passionate about clean code, great UX, and the intersection of design and engineering. I build things that work well and feel even better.
            </p>
          </div>

          {/* Based In */}
          <div className="bento-cell cell-single" style={{ ...cell, position: 'relative', overflow: 'hidden', minHeight: 150 }}>
            <p style={labelStyle}>Based In</p>
            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.65rem)', fontWeight: 800, marginTop: '0.5rem', lineHeight: 1.2 }}>
              Tangerang Selatan
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Indonesia 🇮🇩</p>
            <div style={{ position: 'absolute', bottom: '-24px', right: '-20px', display: 'flex', gap: '4px', opacity: 0.07 }}>
              {[56, 44, 64, 44, 56].map((size, i) => (
                <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: '1.2rem', right: '1.2rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
          </div>

          {/* What inspires */}
          <div className="bento-cell cell-single" style={{ ...cell, minHeight: 150 }}>
            <p style={labelStyle}>What inspires me?</p>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '0.4rem', marginBottom: '0.85rem' }}>
              Building tools to help people.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.45)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: '5px', padding: '7px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.75 }} />
                ))}
              </div>
              <div style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.66rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.35)', maxHeight: 105, overflow: 'hidden' }}>
                {codeLines.map((line, i) => (
                  <div key={i} style={{ whiteSpace: 'pre' }}>
                    <span style={{ color: 'rgba(255,255,255,0.13)', marginRight: '10px', userSelect: 'none' }}>
                      {String(i + 1).padStart(2, ' ')}
                    </span>
                    <span style={{ color: line.startsWith('<') ? '#7dd3fc' : line.includes('Marseal') ? '#86efac' : 'rgba(255,255,255,0.38)' }}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-cell cell-like" style={{ ...cell, overflow: 'hidden', minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ ...labelStyle, marginBottom: '0.5rem' }}>I also like...</p>
            <div style={{ overflow: 'hidden', height: '4rem' }}>
              <p style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                display: 'flex', alignItems: 'center', gap: '12px',
                lineHeight: 1,
                ...slideStyle,
                transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.28s',
              }}>
                {hobby.text}
                <span style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>{hobby.emoji}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Marquee strip */}
        <div className="bento-cell" style={{
          ...cell,
          marginTop: '14px',
          overflow: 'hidden',
          padding: '1.4rem 0',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #0a0a0a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #0a0a0a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div className="marquee-track">
            {marqueeItems.map((skill, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                {skill.devicon
                  ? <i className={`devicon-${skill.devicon}-plain colored`} style={{ fontSize: '2.2rem' }} title={skill.name} />
                  : <skill.CustomIcon />
                }
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

const cell = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '1.5rem',
  opacity: 0,
}

const labelStyle = {
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'rgba(255,255,255,0.3)',
}
