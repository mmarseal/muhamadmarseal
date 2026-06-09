'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [
  {
    label: 'Email',
    value: 'mpurwosyahputra@gmail.com',
    display: 'mpurwosyahputra\n@gmail.com',
    href: 'mailto:mpurwosyahputra@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'muhamad-marseal',
    display: 'muhamad-marseal',
    href: 'https://linkedin.com/in/muhamad-marseal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'mmarseal',
    display: 'mmarseal',
    href: 'https://github.com/mmarseal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@m.marsell_',
    display: '@m.marsell_',
    href: 'https://instagram.com/m.marsell_',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef  = useRef(null)
  const bigTextRef  = useRef(null)
  const [copied, setCopied]   = useState(false)
  const [hovered, setHovered] = useState(null)

  function copyEmail() {
    navigator.clipboard.writeText('mpurwosyahputra@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  useGSAP(() => {
    // Section label
    gsap.fromTo('.contact-label',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )

    // Big headline — letter by letter stagger
    gsap.fromTo('.contact-word',
      { opacity: 0, y: 60, rotateX: -40 },
      {
        opacity: 1, y: 0, rotateX: 0,
        duration: 0.9, stagger: 0.07, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-headline', start: 'top 82%' },
      }
    )

    // Sub line
    gsap.fromTo('.contact-sub',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', delay: 0.3,
        scrollTrigger: { trigger: '.contact-headline', start: 'top 75%' } }
    )

    // Links stagger
    gsap.fromTo('.contact-link-item',
      { opacity: 0, x: -24 },
      {
        opacity: 1, x: 0, duration: 0.55, stagger: 0.08, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-links', start: 'top 85%' }
      }
    )

    // Divider line expand
    gsap.fromTo('.contact-divider',
      { scaleX: 0 },
      {
        scaleX: 1, duration: 1.2, ease: 'expo.out', transformOrigin: 'left',
        scrollTrigger: { trigger: '.contact-divider', start: 'top 90%' }
      }
    )

    // Footer items
    gsap.fromTo('.footer-item',
      { opacity: 0, y: 12 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-footer', start: 'top 95%' }
      }
    )

    // Parallax on big bg text
    gsap.to(bigTextRef.current, {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, { scope: sectionRef })

  const headline = ["Let's", "build", "something."]

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ background: '#0a0a0a', position: 'relative', overflow: 'hidden', paddingBottom: 0 }}
    >
      {/* Parallax bg word */}
      <div
        ref={bigTextRef}
        style={{
          position: 'absolute', bottom: '8%', left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(7rem, 18vw, 16rem)',
          fontWeight: 900, letterSpacing: '-0.05em',
          color: 'rgba(255,255,255,0.025)',
          userSelect: 'none', pointerEvents: 'none',
          whiteSpace: 'nowrap', lineHeight: 1,
        }}
      >
        CONTACT
      </div>

      <div style={{ padding: '6rem 5rem 0', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <div className="contact-label" style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '5rem', opacity: 0,
        }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
            04 / Contact
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Big headline */}
        <div
          className="contact-headline"
          style={{
            perspective: '800px',
            marginBottom: '2rem',
            overflow: 'hidden',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: '-0.04em',
            display: 'flex', flexWrap: 'wrap', gap: '0 0.3em',
          }}>
            {headline.map((word, i) => (
              <span
                key={i}
                className="contact-word"
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  color: i === 2 ? 'rgba(255,255,255,0.25)' : '#fff',
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Sub */}
        <p
          className="contact-sub"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: '4rem',
            opacity: 0,
          }}
        >
          Open for internship, freelance, and full-time opportunities.
          Whether it's a project, a question, or just saying hi — my inbox is always open.
        </p>

        {/* CTA email button */}
        <button
          onClick={copyEmail}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '1rem 2rem',
            background: copied ? 'rgba(74,222,128,0.15)' : '#fff',
            color: copied ? '#4ade80' : '#0a0a0a',
            border: copied ? '1px solid rgba(74,222,128,0.3)' : '1px solid transparent',
            borderRadius: '100px',
            fontSize: '1rem', fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            marginBottom: '5rem',
            letterSpacing: '-0.01em',
          }}
        >
          {copied ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copied to clipboard!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Copy email address
            </>
          )}
        </button>

        {/* Links grid */}
        <div
          className="contact-links"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
            marginBottom: '5rem',
          }}
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="contact-link-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: hovered === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: '1px solid',
                borderColor: hovered === i ? 'rgba(255,255,255,0.1)' : 'transparent',
                textDecoration: 'none',
                color: '#fff',
                transition: 'background 0.18s, border-color 0.18s',
                opacity: 0,
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: '12px', flexShrink: 0,
                background: hovered === i ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: hovered === i ? '#fff' : 'rgba(255,255,255,0.5)',
                transition: 'background 0.18s, color 0.18s',
              }}>
                {link.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '0.7rem', letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
                  marginBottom: '2px',
                }}>{link.label}</p>
                <p style={{
                  fontSize: '0.9rem', fontWeight: 500,
                  color: hovered === i ? '#fff' : 'rgba(255,255,255,0.7)',
                  transition: 'color 0.18s',
                }}>{link.value}</p>
              </div>
              <span style={{
                fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)',
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? 'translate(0, 0)' : 'translate(-4px, 4px)',
                transition: 'opacity 0.18s, transform 0.18s',
              }}>↗</span>
            </a>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="contact-divider"
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.08)',
            transformOrigin: 'left',
            marginLeft: '5rem', marginRight: '5rem',
          }}
        />
        <div
          className="contact-footer"
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1rem',
            padding: '1.75rem 5rem 2rem',
          }}
        >
          <span className="footer-item" style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', opacity: 0 }}>
            marsel.dev
          </span>
          <span className="footer-item" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', opacity: 0 }}>
            Designed &amp; built by Muhamad Marseal
          </span>
          <span className="footer-item" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', opacity: 0 }}>
            Tangerang Selatan, ID · {new Date().getFullYear()}
          </span>
        </div>
      </div>

    </section>
  )
}