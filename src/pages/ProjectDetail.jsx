import { useParams, useNavigate } from "react-router-dom";

const projectData = {
  "hotel-management-system": {
    title: "Hotel Management System",
    status: "Live",
    link: "https://praveenhotel.mooo.com/",
    color: "#6ee7b7",
    tags: ["React", "Node.js", "MySQL", "Express", "REST API"],
    description: "A comprehensive full-stack hotel management solution handling room bookings, guest management, billing, inventory, and staff operations. Deployed and live with real-world usage.",
    features: [
      "Room booking and availability management",
      "Guest check-in and check-out system",
      "Billing and invoice generation",
      "Staff and inventory management",
      "Admin dashboard with analytics",
      "REST API backend with JWT authentication",
    ],
    challenges: "Building a real-time room availability system that handles concurrent bookings without conflicts. Solved using database-level locking and optimistic concurrency control.",
    outcome: "Successfully deployed and used in production. The system handles real hotel operations with live data.",
  },
  "ai-google-ads-manager": {
    title: "AI-Powered Google Ads Manager",
    status: "Ongoing",
    link: null,
    color: "#a78bfa",
    tags: ["AI/ML", "Google Ads API", "React", "Python", "Node.js"],
    description: "An intelligent Google Ads management platform powered by AI. Automates campaign creation, bid optimization, and performance analysis using machine learning to maximize ROI for advertisers.",
    features: [
      "AI-driven campaign creation and optimization",
      "Automated bid management using ML models",
      "Performance analytics and reporting dashboard",
      "Google Ads API integration",
      "Real-time ROI tracking",
      "Smart audience targeting suggestions",
    ],
    challenges: "Integrating Google Ads API with real-time ML inference while keeping latency low. Currently optimizing the data pipeline for speed.",
    outcome: "Ongoing project — core features under active development.",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#0a0a0f" }}>
        <h2 style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", fontSize: "32px", marginBottom: "16px" }}>Project not found</h2>
        <button onClick={() => navigate("/")} style={{ color: "#6ee7b7", fontFamily: "Syne, sans-serif", background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20" style={{ background: "#0a0a0f" }}>
      <div className="max-w-4xl mx-auto px-6">

        <button
          onClick={() => navigate("/")}
          style={{ color: "#64748b", fontFamily: "Syne, sans-serif", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "40px", background: "none", border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6ee7b7")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          Back to Portfolio
        </button>

        <div className="p-8 rounded-2xl mb-8" style={{ background: "#111118", border: "1px solid #1e1e2e", borderTop: `3px solid ${project.color}` }}>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <span style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}25`, padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
              {project.status}
            </span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                style={{ background: "linear-gradient(135deg, #6ee7b7, #a78bfa)", color: "#0a0a0f", padding: "10px 20px", borderRadius: "8px", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
                View Live Site
              </a>
            )}
          </div>

          <h1 style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", fontSize: "36px", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            {project.title}
          </h1>
          <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.8" }}>{project.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
            <h3 style={{ fontFamily: "Syne, sans-serif", color: project.color, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Features</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.features.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#94a3b8", fontSize: "14px" }}>
                  <span style={{ color: project.color, flexShrink: 0, marginTop: "3px" }}>▸</span>{f}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="p-6 rounded-2xl" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", color: project.color, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tags.map((t) => (
                  <span key={t} style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20`, padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontFamily: "Syne, sans-serif" }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", color: project.color, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Key Challenge</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7" }}>{project.challenges}</p>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", color: project.color, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Outcome</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7" }}>{project.outcome}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}