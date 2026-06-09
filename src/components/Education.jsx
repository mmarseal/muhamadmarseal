'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    year: '2023 — Present',
    degree: 'S1 Informatics Engineering',
    institution: 'Universitas Pamulang',
    location: 'Tangerang Selatan, ID',
    score: '3.80',
    scoreLabel: 'GPA',
    scoreMax: '4.00',
    status: 'Ongoing',
    statusSemester: '6th semester',
    highlights: [
      'Focus on Full-Stack JavaScript & modern web architecture',
      'Active in software project development & academic research',
      'Led tech education program at SMK Fadillah (PkM)',
    ],
  },
  {
    year: '2019 — 2022',
    degree: 'Science (MIPA)',
    institution: 'SMA Negeri 1 Jonggol',
    location: 'Bogor, ID',
    score: '88',
    scoreLabel: 'Score',
    scoreMax: '100',
    status: 'Graduated',
    statusSemester: 'Class of 2022',
    highlights: [
      'Science major with focus on Mathematics & Natural Sciences',
      'Member & committee of school Badminton club',
      'Navigated studies through the COVID-19 pandemic — fully remote learning 2020–2021',
    ],
  },
]

const certifications = [
  {
    title: 'MERN Stack: All You Need to Know with Practical Project',
    issuer: 'Udemy',
    year: '2025',
    icon: '▲',
  },
  {
    title: 'Practical Next.js & React — Build a Real WebApp with Next.js',
    issuer: 'Udemy',
    year: '2025',
    icon: '◆',
  },
  {
    title: 'Complete JavaScript with HTML5, CSS3 from Zero to Expert',
    issuer: 'Udemy',
    year: '2025',
    icon: '●',
  },
]

export default function Education() {
  const sectionRef = useRef(null)
  const [activeCert, setActiveCert] = useState(null)

  useGSAP(() => {
    // Section label
    gsap.fromTo('.edu-label',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )

    // Left column
    gsap.fromTo('.edu-left',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
    )

    // Right column
    gsap.fromTo('.edu-right',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
    )

    // GPA counter
    gsap.fromTo('.gpa-number',
      { innerText: 0 },
      {
        innerText: 3.80,
        duration: 1.6,
        ease: 'power2.out',
        snap: { innerText: 0.01 },
        scrollTrigger: { trigger: '.gpa-number', start: 'top 85%' },
        onUpdate() {
          const el = document.querySelector('.gpa-number')
          if (el) el.textContent = parseFloat(this.targets()[0].innerText).toFixed(2)
        },
      }
    )

    // Cert items stagger
    gsap.fromTo('.cert-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.cert-list', start: 'top 80%' }
      }
    )

    // Timeline line draw
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1, duration: 1.2, ease: 'expo.out', transformOrigin: 'top',
        scrollTrigger: { trigger: '.timeline-line', start: 'top 75%' }
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{ padding: '6rem 5rem', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}
    >
      {/* Faint big text background */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(8rem, 20vw, 18rem)',
        fontWeight: 900, letterSpacing: '-0.05em',
        color: 'rgba(255,255,255,0.02)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap', lineHeight: 1,
      }}>
        EDU
      </div>

      {/* Section label */}
      <div className="edu-label" style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        marginBottom: '4rem', opacity: 0,
      }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          03 / Education
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Main layout */}
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* LEFT — timeline of all education entries */}
        <div className="edu-left" style={{ flex: '0 0 auto', width: 'clamp(300px, 50%, 520px)', opacity: 0 }}>

          {education.map((edu, idx) => {
            const isFirst = idx === 0
            const isLast  = idx === education.length - 1
            const dotColor = isFirst ? '#4ade80' : 'rgba(255,255,255,0.4)'
            const dotGlow  = isFirst ? '0 0 8px rgba(74,222,128,0.5)' : 'none'

            return (
              <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                {/* Stem */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%',
                    background: isFirst ? '#4ade80' : '#fff',
                    flexShrink: 0,
                    boxShadow: isFirst
                      ? '0 0 0 4px rgba(74,222,128,0.15)'
                      : '0 0 0 4px rgba(255,255,255,0.08)',
                  }} />
                  {!isLast && (
                    <div className="timeline-line" style={{
                      width: 1, height: 80, marginTop: '8px',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.04))',
                      transformOrigin: 'top',
                    }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingBottom: isLast ? 0 : '2.5rem' }}>
                  {/* Year badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.72rem', letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '100px', padding: '3px 10px',
                    marginBottom: '1rem',
                  }}>
                    {isFirst && (
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#4ade80',
                        boxShadow: '0 0 0 2px rgba(74,222,128,0.2)',
                        display: 'inline-block',
                      }} />
                    )}
                    {edu.year}
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                    fontWeight: 800, lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    marginBottom: '0.3rem',
                  }}>
                    {edu.degree}
                  </h2>

                  <p style={{
                    fontSize: '1rem', fontWeight: 500,
                    color: 'rgba(255,255,255,0.55)', marginBottom: '0.15rem',
                  }}>
                    {edu.institution}
                  </p>

                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>
                    {edu.location}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                    {edu.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <span style={{
                          width: 4, height: 4, borderRadius: '50%',
                          background: 'rgba(255,255,255,0.25)',
                          flexShrink: 0, marginTop: '8px',
                        }} />
                        <p style={{ fontSize: '0.855rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.45)' }}>
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Score card */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '1.5rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px', padding: '0.9rem 1.4rem',
                  }}>
                    <div>
                      <p style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {edu.scoreLabel}
                      </p>
                      {isFirst ? (
                        <p className="gpa-number" style={{
                          fontSize: '2.2rem', fontWeight: 900,
                          letterSpacing: '-0.04em', lineHeight: 1,
                        }}>
                          0.00
                        </p>
                      ) : (
                        <p style={{
                          fontSize: '2.2rem', fontWeight: 900,
                          letterSpacing: '-0.04em', lineHeight: 1,
                        }}>
                          {edu.score}
                        </p>
                      )}
                      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', marginTop: '3px' }}>
                        out of {edu.scoreMax}
                      </p>
                    </div>
                    <div style={{ width: '1px', height: 52, background: 'rgba(255,255,255,0.08)' }} />
                    <div>
                      <p style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Status
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                          width: 7, height: 7, borderRadius: '50%',
                          background: isFirst ? '#4ade80' : 'rgba(255,255,255,0.4)',
                          boxShadow: isFirst ? '0 0 8px rgba(74,222,128,0.6)' : 'none',
                          display: 'inline-block',
                        }} />
                        <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{edu.status}</span>
                      </div>
                      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', marginTop: '3px' }}>
                        {edu.statusSemester}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* RIGHT — certifications */}
        <div className="edu-right cert-list" style={{ flex: 1, minWidth: 280, opacity: 0 }}>

          <p style={{
            fontSize: '0.72rem', letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Certifications
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-item"
                onMouseEnter={() => setActiveCert(i)}
                onMouseLeave={() => setActiveCert(null)}
                style={{
                  opacity: 0,
                  padding: '1.25rem 1.5rem',
                  borderRadius: '14px',
                  background: activeCert === i ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeCert === i ? 'rgba(255,255,255,0.1)' : 'transparent',
                  cursor: 'default',
                  transition: 'background 0.2s, border-color 0.2s',
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 36, height: 36, borderRadius: '10px', flexShrink: 0,
                  background: activeCert === i ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)',
                  transition: 'background 0.2s',
                }}>
                  {cert.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '0.9rem', fontWeight: 500,
                    lineHeight: 1.4, marginBottom: '4px',
                    color: activeCert === i ? '#fff' : 'rgba(255,255,255,0.75)',
                    transition: 'color 0.2s',
                  }}>
                    {cert.title}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{cert.issuer}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'inline-block' }} />
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{cert.year}</span>
                  </div>
                </div>

                {/* Arrow on hover */}
                <span style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.25)',
                  opacity: activeCert === i ? 1 : 0,
                  transform: activeCert === i ? 'translateX(0)' : 'translateX(-6px)',
                  transition: 'opacity 0.2s, transform 0.2s',
                  paddingTop: '2px',
                }}>
                  ↗
                </span>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.25)',
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}>
              "The best way to learn is to build something you actually care about."
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}