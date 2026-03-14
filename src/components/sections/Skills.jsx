import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend", color: "#6ee7b7",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 72 },
    ],
  },
  {
    category: "Backend", color: "#a78bfa",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Database & Tools", color: "#f9a8d4",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL / PostgreSQL", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 68 },
      { name: "AWS (EC2, S3)", level: 65 },
    ],
  },
];

const techBadges = ["React", "Node.js", "Express", "MongoDB", "MySQL", "Python", "Tailwind", "Git", "Docker", "AWS", "REST API", "JWT", "Redux", "Vite", "Linux", "Postman"];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span style={{ color: "#cbd5e1", fontSize: "13px" }}>{name}</span>
        <span style={{ color: "#475569", fontSize: "12px", fontFamily: "Syne, sans-serif" }}>{level}%</span>
      </div>
      <div style={{ height: "3px", background: "#1e1e2e", borderRadius: "999px", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: "999px", background: `linear-gradient(90deg, ${color}, ${color}99)`, width: animate ? `${level}%` : "0%", transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-num mb-3">02 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", letterSpacing: "-0.02em" }}>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "15px", maxWidth: "480px" }}>
            A curated set of technologies I use to build full-stack products from idea to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group) => (
            <div key={group.category} className="p-6 rounded-2xl card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "14px", fontWeight: 700, color: group.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        <div>
          <p style={{ color: "#334155", fontSize: "12px", fontFamily: "Syne, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}