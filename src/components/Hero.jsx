import { useEffect, useState } from 'react';
import './Hero.css';

const TYPEWRITER_TEXTS = [
  'Computer Engineering',
  'Embedded Systems',
  'Cloud Automation',
];

function useTypewriter(texts, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_TEXTS);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">Michael Skinner</h1>
          <p className="hero__typewriter">
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>
          <p className="hero__subtitle">
            B.Eng Co-Op · McMaster University · Class of 2026
          </p>
          <div className="hero__ctas">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <a className="btn btn-outline" href="/Resume_June_2026.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero__avatar-wrap">
          <img
            src="https://avatars.githubusercontent.com/u/97812241?v=4"
            alt="Michael Skinner"
            className="hero__avatar"
            loading="eager"
          />
        </div>
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
