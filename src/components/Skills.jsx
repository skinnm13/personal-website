import { useRef } from 'react';
import { skills } from '../data/skills';
import useFadeIn from '../hooks/useFadeIn';
import './Skills.css';

export default function Skills() {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="fade-in">
          <p className="section-label">// what I work with</p>
          <h2 className="section-title">Skills</h2>
          <div className="skills__grid">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <h3 className="skill-group__title">{group.group}</h3>
                <div className="skill-group__chips">
                  {group.items.map((item) => (
                    <span key={item} className="tag skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
