import { ExternalLink, Sparkles, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "AI-Powered Google Ads Manager",
    desc: "An intelligent Google Ads management platform powered by AI. Automates campaign creation, bid optimization, and performance analysis using machine learning to maximize ROI.",
    tags: ["AI/ML", "Google Ads API", "React", "Python", "Node.js"],
    status: "ongoing", statusLabel: "Ongoing",
    link: null, slug: "ai-google-ads-manager", featured: true, color: "#a78bfa",
  },
  {
    title: "Hotel Management System",
    desc: "A comprehensive full-stack hotel management solution handling room bookings, guest management, billing, inventory, and staff operations. Deployed and live.",
    tags: ["React", "Node.js", "MySQL", "Express", "REST API"],
    status: "live", statusLabel: "Live",
    link: "https://praveenhotel.mooo.com/", slug: "hotel-management-system", featured: true, color: "#6ee7b7",
  },
  {
    title: "E-Commerce Platform",
    desc: "A modern full-stack e-commerce app with product catalog, cart management, secure payments, and admin dashboard. Features JWT auth and real-time inventory updates.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    status: "complete", statusLabel: "Complete",
    link: null, slug: null, featured: false, color: "#6ee7b7",
  },
  {
    title: "Task Management App",
    desc: "A collaborative project management tool with drag-and-drop kanban boards, real-time updates, team collaboration features, and deadline tracking.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    status: "complete", statusLabel: "Complete",
    link: null, slug: null, featured: false, color: "#f9a8d4",
  },
  {
    title: "Weather Dashboard",
    desc: "A responsive weather application with 7-day forecasts, location-based weather, interactive charts for temperature trends, and severe weather alerts.",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    status: "complete", statusLabel: "Complete",
    link: null, slug: null, featured: false, color: "#93c5fd",
  },
  {
    title: "Blog CMS Platform",
    desc: "A content management system for bloggers with rich text editing, media uploads, SEO optimization, analytics dashboard, and multi-author support.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    status: "complete", statusLabel: "Complete",
    link: null, slug: null, featured: false, color: "#fcd34d",
  },
];

function StatusBadge({ status, label }) {
  const styles = {
    ongoing: { bg: "rgba(167,139,250,0.1)", color: "#a78bfa", border: "rgba(167,139,250,0.2)" },
    live: { bg: "rgba(110,231,183,0.1)", color: "#6ee7b7", border: "rgba(110,231,183,0.2)" },
    complete: { bg: "rgba(100,116,139,0.1)", color: "#94a3b8", border: "rgba(100,116,139,0.2)" },
  };
  const s = styles[status] || styles.complete;
  return (
    <span style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontFamily: "Syne, sans-serif", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: 600 }}>
      {status === "ongoing" && <Clock size={10} />}
      {status === "live" && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6ee7b7", boxShadow: "0 0 6px #6ee7b7", display: "inline-block" }} />}
      {label}
    </span>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-num mb-3">03 — Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", letterSpacing: "-0.02em" }}>
            Things I have <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "15px", maxWidth: "480px" }}>
            A selection of projects ranging from ongoing AI ventures to fully deployed production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <div
              key={project.title}
              className="group relative p-7 rounded-2xl card-hover overflow-hidden"
              style={{ background: "#111118", border: "1px solid #1e1e2e", cursor: project.slug ? "pointer" : "default" }}
              onClick={() => project.slug && navigate(`/project/${project.slug}`)}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <StatusBadge status={project.status} label={project.statusLabel} />
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        style={{ background: "#0a0a0f", border: "1px solid #1e1e2e", color: "#64748b", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7b7")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                      >
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <div style={{ background: "#0a0a0f", border: "1px solid #1e1e2e", color: "#2d3748", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ExternalLink size={14} />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", display: "flex", alignItems: "center", gap: "8px" }}>
                  {project.status === "ongoing" && <Sparkles size={16} style={{ color: "#a78bfa" }} />}
                  {project.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} style={{ background: "#0a0a0f", color: "#64748b", border: "1px solid #1e1e2e", padding: "4px 10px", borderRadius: "6px", fontSize: "12px" }}>{t}</span>
                  ))}
                </div>
                {project.slug && (
                  <p style={{ color: project.color, fontSize: "12px", marginTop: "16px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
                    View details →
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((project) => (
            <div key={project.title} className="p-6 rounded-2xl card-hover" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
              <div className="flex items-start justify-between mb-4">
                <div style={{ background: `${project.color}15`, border: `1px solid ${project.color}25`, width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                  {project.title.includes("E-Commerce") ? "🛒" : project.title.includes("Task") ? "📋" : project.title.includes("Weather") ? "🌤️" : "📝"}
                </div>
                <span style={{ color: "#1e2d3d", fontSize: "11px", fontFamily: "Syne, sans-serif" }}>Link soon</span>
              </div>
              <h3 className="font-bold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "#cbd5e1", fontSize: "15px" }}>{project.title}</h3>
              <p style={{ color: "#475569", fontSize: "13px", lineHeight: "1.65", marginBottom: "14px" }}>{project.desc.slice(0, 90)}...</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((t) => (
                  <span key={t} style={{ background: "#0a0a0f", color: "#475569", border: "1px solid #1a1a2a", padding: "2px 8px", borderRadius: "4px", fontSize: "12px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}