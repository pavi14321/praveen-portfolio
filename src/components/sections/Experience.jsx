const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2023 — Present",
    type: "Full-time",
    desc: "Building and deploying full-stack web applications for clients. Specializing in React frontends with Node.js backends, delivering end-to-end solutions from design to deployment.",
    highlights: [
      "Developed Hotel Management System at praveenhotel.mooo.com",
      "Building AI-powered Google Ads Manager (ongoing)",
      "Delivered 5+ client projects with production deployments",
    ],
    color: "#6ee7b7",
  },
  {
    role: "React Developer Intern",
    company: "Tech Startup",
    period: "2022 — 2023",
    type: "Internship",
    desc: "Built responsive React applications, integrated RESTful APIs, and contributed to frontend architecture. Collaborated in agile sprints with cross-functional teams.",
    highlights: [
      "Built 3 major frontend modules used in production",
      "Improved page load time by 35% through code splitting",
      "Contributed to component library with 20+ reusable components",
    ],
    color: "#a78bfa",
  },
  {
    role: "B.E. Computer Science",
    company: "Engineering College",
    period: "2019 — 2023",
    type: "Education",
    desc: "Completed Bachelor of Engineering in Computer Science with strong fundamentals in data structures, algorithms, database management, and software engineering.",
    highlights: [
      "Graduated with distinction",
      "Final year project: Web-based inventory management system",
      "Active member of coding club",
    ],
    color: "#f9a8d4",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-num mb-3">04 — Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", letterSpacing: "-0.02em" }}>
            My <span className="gradient-text">Journey</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "15px", maxWidth: "480px" }}>
            From education to production — a timeline of how I have grown as a developer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-4 bottom-4 w-px" style={{ background: "linear-gradient(to bottom, #6ee7b7, #a78bfa, #f9a8d4)" }} />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-8 md:gap-12 relative">
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "6px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: exp.color, boxShadow: `0 0 12px ${exp.color}80`, position: "relative", zIndex: 10 }} />
                </div>
                <div className="flex-1 p-6 rounded-2xl card-hover mb-2" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0" }}>{exp.role}</h3>
                      <p style={{ color: exp.color, fontSize: "14px", fontWeight: 600, fontFamily: "Syne, sans-serif" }}>{exp.company}</p>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                      <span style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}25`, fontFamily: "Syne, sans-serif", fontWeight: 600, padding: "4px 10px", borderRadius: "999px", fontSize: "12px" }}>
                        {exp.type}
                      </span>
                      <span style={{ color: "#475569", fontSize: "13px" }}>{exp.period}</span>
                    </div>
                  </div>
                  <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{exp.desc}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#94a3b8" }}>
                        <span style={{ color: exp.color, marginTop: "4px", flexShrink: 0 }}>▸</span>{h}
                      </li>
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