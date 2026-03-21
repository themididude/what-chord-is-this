import { useState } from 'react'

export function About() {
  const [open, setOpen] = useState(false)

  return (
    <div className="about-wrap">
      <button className="about-btn" onClick={() => setOpen(prev => !prev)}>
        what is this? {open ? '↑' : '↓'}
      </button>

      {open && (
        <div className="about-content">

          <h2 className="desc animate__animated animate__fadeInDown"> what chord is this?</h2>
          <p className="about-text">A tool to identify unknown chords by selecting notes on a guitar neck, piano, or note picker.</p>

          <h4 className="why-do-this animate__animated animate__fadeInDown"> Why build this?</h4>
          <p className="about-text">
            During songwriting, I often build chord progressions by feel, tweaking
            and moving things around until something actually clicks. This process sometimes
            leads to chords I can't really identify or notate correctly. So i've built this tool to solve that exact issue: given a set of notes on
            a guitar or piano, tell me the exact chord I'm playing.
          </p>
          <h3><WavyText text="developed by themididude!" /></h3>
          
          <p></p>

          <div className="about-socials">
            <a href="https://instagram.com/8luh8" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com/themididude" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/luciano-garcia-boub%C3%A9e-085b5937b/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function WavyText({ text }: { text: string }) {
  return (
    <span className="wavy-wrap">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="wavy"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}