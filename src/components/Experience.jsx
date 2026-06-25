import { useRef } from 'react';
import { experience } from '../data/experience';
import useFadeIn from '../hooks/useFadeIn';
import './Experience.css';

export default function Experience() {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={ref} className="fade-in">
          <p className="section-label">// work history</p>
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <div className="timeline__header">
                    <div>
                      <h3 className="timeline__role">{job.role}</h3>
                      <p className="timeline__company">{job.company}</p>
                    </div>
                    <div className="timeline__meta">
                      <span className="timeline__dates">{job.dates}</span>
                      <span className="timeline__location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="timeline__bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
