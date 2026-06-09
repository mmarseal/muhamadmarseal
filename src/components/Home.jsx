'use client'

import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const navLinks = ['About', 'Projects', 'Contact']

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/m.marsell_?igsh=czRzcjNxeTNicmJj',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/muhamad-marseal',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mmarseal',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
]

export default function Home() {
  const container = useRef(null)
  const [avatarHovered, setAvatarHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const hoverTimeout = useRef(null)

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl.fromTo('.nav-logo',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6 }
    )
    .fromTo('.nav-item',
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.55, stagger: 0.07 },
      '<+0.1'
    )
    .fromTo('.nav-avatar',
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.5 },
      '-=0.3'
    )
    .fromTo('.hero-left > *',
      { opacity: 0, y: 44 },
      { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
      '-=0.15'
    )
    .fromTo('.hero-right',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.85 },
      '-=0.55'
    )
  }, { scope: container })

  return (
    <div ref={container} style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>

      {/* NAVBAR */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: isMobile ? '1.1rem 1.5rem' : '1.25rem 5rem',
      }}>

        {/* Logo */}
        <div className="nav-logo" style={{
          fontFamily: 'monospace', fontSize: '1.05rem',
          fontWeight: 700, letterSpacing: '-0.01em',
          opacity: 0, color: '#fff',
        }}>
          marsel.dev
        </div>

        {/* Desktop links */}
        <div style={{ display: isMobile ? 'none' : 'flex', gap: '2.5rem' }}>
          {navLinks.map(link => (
            <a
              key={link}
              className="nav-item"
              href={'#' + link.toLowerCase()}
              style={{
                fontSize: '0.92rem', fontWeight: 400,
                color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none', opacity: 0,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = '#fff' }}
              onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.55)' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side: avatar (desktop) + hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

          {/* Avatar — desktop only */}
          <div
            className="nav-avatar"
            style={{ position: 'relative', opacity: 0 }}
            onMouseEnter={() => {
              clearTimeout(hoverTimeout.current)
              setAvatarHovered(true)
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => setAvatarHovered(false), 400)
            }}
          >
            <div style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', cursor: 'pointer',
            }}>
              <img src="/avatar.jpg" alt="Marseal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Socials popup */}
            <div style={{
              position: 'absolute', top: 'calc(100% + 10px)', right: 0,
              background: 'rgba(18,18,18,0.96)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px', padding: '6px',
              display: 'flex', gap: '4px',
              opacity: avatarHovered ? 1 : 0,
              transform: avatarHovered ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.94)',
              transition: avatarHovered
                ? 'opacity 0.2s, transform 0.22s cubic-bezier(0.34,1.4,0.64,1)'
                : 'opacity 0.35s 0.15s, transform 0.35s 0.15s cubic-bezier(0.4,0,0.2,1)',
              pointerEvents: avatarHovered ? 'all' : 'none',
              zIndex: 100,
            }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: '9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px', color: '#fff',
              display: isMobile ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '5px', alignItems: 'flex-end',
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block', height: '1.5px', background: '#fff',
              width: menuOpen ? '22px' : '22px',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              transition: 'transform 0.25s, width 0.25s',
            }} />
            <span style={{
              display: 'block', height: '1.5px', background: '#fff',
              width: '16px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }} />
            <span style={{
              display: 'block', height: '1.5px', background: '#fff',
              width: '22px',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              transition: 'transform 0.25s',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: '#0a0a0a',
        zIndex: 50,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem 2rem',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.35s, transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute', top: '1.4rem', right: '1.5rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#fff', fontSize: '1.5rem', lineHeight: 1,
          }}
        >
          ✕
        </button>

        <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', marginBottom: '2.5rem' }}>
          marsel.dev
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={'#' + link.toLowerCase()}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 'clamp(2.2rem, 10vw, 3.5rem)',
                fontWeight: 800,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.35s ${0.1 + i * 0.07}s, transform 0.35s ${0.1 + i * 0.07}s`,
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Socials at bottom */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '2rem', display: 'flex', gap: '1rem' }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '3rem 1.5rem' : '5rem 5rem 3rem',
        minHeight: isMobile ? 'unset' : 'calc(100vh - 70px)',
        gap: isMobile ? '2.5rem' : '4rem',
      }}>

        <div className="hero-left" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 5.2rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Full-Stack Developer refining the craft of interfaces &amp; experience.
          </h1>

          <p style={{
            fontSize: '1rem', lineHeight: 1.75,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '460px',
          }}>
            Informatics Engineering student building scalable, user-centric web &amp; mobile products — MERN, Next.js, and everything in between.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
            <a
              href="/portfolio.pdf" download
              style={{
                padding: '0.7rem 1.4rem', background: '#fff', color: '#0a0a0a',
                borderRadius: '100px', fontSize: '0.88rem', fontWeight: 600,
                textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Portfolio
            </a>
            <a
              href="/CV_Muhamad_Marseal.pdf" download
              style={{
                padding: '0.7rem 1.4rem', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.65)',
                borderRadius: '100px', fontSize: '0.88rem', fontWeight: 400,
                textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s', display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
              }}
            >
              CV
            </a>
          </div>
        </div>

        {/* Photo card */}
        <div className="hero-right" style={{
          flexShrink: 0,
          width: isMobile ? '100%' : 'clamp(260px, 28vw, 340px)',
          aspectRatio: isMobile ? '4 / 3' : '3 / 4',
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden', position: 'relative',
          opacity: 0,
        }}>
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <img src="/photo.jpg" alt="Muhamad Marseal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)',
            borderRadius: '0 0 24px 24px',
          }} />
          <div style={{
            position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          }}>
            <div>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '2px' }}>Muhamad Marseal</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>Tangerang Selatan, ID</p>
            </div>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.2)',
            }} />
          </div>
        </div>

      </section>
    </div>
  )
}