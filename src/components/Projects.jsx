'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// EDIT PROJECT DATA DI SINI
// mockup: taruh file di public/mockups/namafile.png
// ─────────────────────────────────────────────
const projects = [
  {
    number: '01',
    title: 'Dompetin',
    description:
      'Personal finance PWA built end-to-end. Features real-time transaction management with Supabase RLS, AI-powered spending insights via Google Gemini 2.5 Flash, and full offline support through service workers.',
    stack: ['React', 'Vite', 'Tailwind', 'Supabase', 'Gemini API', 'PWA'],
    mockup: '/mockups/dompetin.png',
    github: 'https://github.com/mmarseal',
    live: null, // set null kalau ga ada live url
  },
  {
    number: '02',
    title: 'Askademia',
    description:
      'Q&A platform for students with SSR-optimized page loads, Clerk authentication, and structured content via Prisma ORM. Built with Next.js 14 App Router for SEO-friendly academic discussions.',
    stack: ['Next.js 14', 'Prisma', 'PostgreSQL', 'Clerk', 'ShadCN UI', 'UploadThing'],
    mockup: '/mockups/askademia.png',
    github: 'https://github.com/mmarseal',
    live: null,
  },
  {
    number: '03',
    title: 'DapurIbu',
    description:
      'Cross-platform recipe app with a RESTful API backend deployed on Vercel. Mobile UI built with React Native Expo, featuring recipe management and an EAS release pipeline.',
    stack: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    mockup: '/mockups/dapuribu.png',
    github: 'https://github.com/mmarseal',
    live: null,
  },
]

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

export default function Projects() {
  const sectionRef = useRef(null)
  const trackRef   = useRef(null)

  useGSAP(() => {
    const section = sectionRef.current
    const track   = trackRef.current

    // Total horizontal scroll distance
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

    const anim = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth + 200}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Fade in section label
    gsap.fromTo('.projects-label',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'expo.out',
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    )

    return () => { anim.scrollTrigger?.kill() }
  }, { scope: sectionRef })

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: '#0a0a0a',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Section label — pinned top left */}
      <div
        className="projects-label"
        style={{
          position: 'absolute',
          top: '2.5rem',
          left: '5rem',
          zIndex: 10,
          display: 'flex', alignItems: 'center', gap: '1rem',
          opacity: 0,
        }}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          02 / Projects
        </span>
        <div style={{ width: 40, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          height: '100vh',
          willChange: 'transform',
        }}
      >
        {/* Intro slide */}
        <div style={{
          flexShrink: 0,
          width: 'clamp(280px, 30vw, 400px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          paddingTop: '5rem',
        }}>
          <h2 style={{
            fontSize: 'clamp(2.8rem, 5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Selected<br />Work.
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280 }}>
            A few projects I built — scroll to explore.
          </p>
          {/* Scroll hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1rem' }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)',
            }}>→</div>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
              scroll
            </span>
          </div>
        </div>

        {/* Project cards */}
        {projects.map((p) => (
          <div
            key={p.number}
            style={{
              flexShrink: 0,
              width: 'clamp(700px, 75vw, 900px)',
              height: '75vh',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* LEFT — info */}
            <div style={{
              flex: '0 0 42%',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div>
                <span style={{
                  fontSize: '0.7rem', letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase',
                }}>
                  {p.number}
                </span>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                  lineHeight: 1.1,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  {p.description}
                </p>
              </div>

              <div>
                {/* Stack chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      fontSize: '0.72rem',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.04)',
                    }}>{s}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={btnSecondary}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                    }}
                  >
                    <GithubIcon /> Repository
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      style={btnPrimary}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                    >
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT — mockup */}
            <div style={{
              flex: 1,
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `radial-gradient(ellipse at 60% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)`,
            }}>
              {/* Ambient glow behind mockup */}
              <div style={{
                position: 'absolute',
                width: '60%', height: '50%',
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }} />

              {/* Mockup wrapper — slight perspective tilt */}
              <div style={{
                position: 'relative',
                width: '88%',
                height: '85%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'perspective(900px) rotateY(-4deg) rotateX(2deg)',
                transition: 'transform 0.4s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'perspective(900px) rotateY(-4deg) rotateX(2deg) scale(1)'
                }}
              >
                <img
                  src={p.mockup}
                  alt={p.title + ' mockup'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    borderRadius: '14px',
                    filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.7)) drop-shadow(0 8px 24px rgba(0,0,0,0.4))',
                  }}
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Placeholder */}
                <div style={{
                  display: 'none',
                  position: 'absolute', inset: 0,
                  alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.75rem',
                  color: 'rgba(255,255,255,0.12)',
                  fontSize: '0.75rem', letterSpacing: '0.06em',
                  border: '1px dashed rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="3"/>
                    <path d="m3 9 4-4 4 4 4-4 4 4"/>
                    <path d="M3 15h18"/>
                  </svg>
                  mockup coming soon
                </div>
              </div>

              {/* Bottom fade */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.5), transparent)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        ))}

        {/* CTA slide — View All */}
        <div style={{
          flexShrink: 0,
          width: 'clamp(260px, 28vw, 360px)',
          height: '75vh',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '2.5rem',
        }}>
          <p style={{
            fontSize: '0.75rem', letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase',
          }}>
            And more...
          </p>

          <div>
            <p style={{
              fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
              fontWeight: 800, lineHeight: 1.2,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}>
              Want to see everything I've built?
            </p>
            <a
              href="https://github.com/mmarseal"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.75rem 1.4rem',
                background: '#fff', color: '#0a0a0a',
                borderRadius: '100px', fontSize: '0.88rem', fontWeight: 600,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              <GithubIcon /> View all on GitHub
            </a>
          </div>

          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
            github.com/mmarseal
          </span>
        </div>

      </div>
    </section>
  )
}

const btnSecondary = {
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  padding: '0.55rem 1rem',
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.15)',
  color: 'rgba(255,255,255,0.55)',
  borderRadius: '100px', fontSize: '0.78rem', fontWeight: 400,
  textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
  cursor: 'pointer',
}

const btnPrimary = {
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  padding: '0.55rem 1rem',
  background: '#fff', color: '#0a0a0a',
  borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600,
  textDecoration: 'none', transition: 'opacity 0.2s',
  cursor: 'pointer',
}