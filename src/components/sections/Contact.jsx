import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-num mb-3">05 — Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", letterSpacing: "-0.02em" }}>
            Lets <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "15px", maxWidth: "480px" }}>
            Whether you have a project in mind, want to collaborate, or just want to say hi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl relative overflow-hidden" style={{ background: "#111118", border: "1px solid #1e1e2e" }}>
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: "linear-gradient(90deg, #6ee7b7, #a78bfa, transparent)" }} />
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0" }}>Open to opportunities</h3>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7", marginBottom: "24px" }}>
              Available for freelance projects, full-time roles, and exciting collaborations.
            </p>
            
              href="mailto:praveenshivashankar99@gmail.com"
              style={{ background: "linear-gradient(135deg, #6ee7b7, #a78bfa)", color: "#0a0a0f", fontFamily: "Syne, sans-serif", padding: "14px 24px", borderRadius: "12px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "12px" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              <Mail size={16} />
              Send me an email
              <ArrowRight size={15} />
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: Mail, label: "Email", value: "praveenshivashankar99@gmail.com", href: "mailto:praveenshivashankar99@gmail.com", color: "#6ee7b7" },
              { icon: Github, label: "GitHub", value: "github.com/praveen-shivashankar", href: "https://github.com/praveen-shivashankar", color: "#a78bfa" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/praveen-shivashankar", href: "https://linkedin.com/in/praveen-shivashankar", color: "#93c5fd" },
              { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India", href: null, color: "#f9a8d4" },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="card-hover" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", borderRadius: "12px", background: "#111118", border: "1px solid #1e1e2e" }}>
                <div style={{ background: color + "20", border: "1px solid " + color + "30", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={17} style={{ color: color }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "#475569", fontSize: "11px", fontFamily: "Syne, sans-serif", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none", display: "block" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; }}
                    >{value}</a>
                  ) : (
                    <p style={{ color: "#94a3b8", fontSize: "14px" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
