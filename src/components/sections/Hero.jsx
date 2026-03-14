import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = ["Full Stack Developer", "React Developer", "Node.js Engineer", "Problem Solver"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    const i = displayed.length;
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">

          <div className="animate-fade-up opacity-0 delay-1 mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: "rgba(110,231,183,0.08)", border: "1px solid rgba(110,231,183,0.2)", color: "#6ee7b7" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#6ee7b7", boxShadow: "0 0 8px #6ee7b7" }} />
              Available for opportunities
            </span>
          </div>

          <h1
            className="animate-fade-up opacity-0 delay-2 text-5xl md:text-7xl font-bold leading-none mb-4"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            Hi, I am <span className="gradient-text">Praveen</span>
            <br />
            <span style={{ color: "#e2e8f0" }}>Shivashankar</span>
          </h1>

          <div className="animate-fade-up opacity-0 delay-3 mb-6 h-10 flex items-center">
            <span
              className="text-xl md:text-2xl font-medium cursor-blink"
              style={{ color: "#94a3b8", fontFamily: "Syne, sans-serif" }}
            >
              {displayed}
            </span>
          </div>

          <p
            className="animate-fade-up opacity-0 delay-4 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "#64748b" }}
          >
            Passionate full-stack developer specializing in building exceptional digital experiences.
            I craft performant web applications with clean code and intuitive interfaces.
          </p>

          <div className="animate-fade-up opacity-0 delay-5 flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ background: "linear-gradient(135deg, #6ee7b7, #a78bfa)", color: "#0a0a0f", fontFamily: "Syne, sans-serif", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View Projects
            </button>
            
              href="mailto:praveenshivashankar99@gmail.com"
              style={{ background: "transparent", color: "#e2e8f0", border: "1px solid #1e1e2e", fontFamily: "Syne, sans-serif", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-block" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6ee7b7"; e.currentTarget.style.color = "#6ee7b7"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get In Touch
            </a>
          </div>

          <div className="animate-fade-up opacity-0 delay-5 flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/praveen-shivashankar", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/praveen-shivashankar", label: "LinkedIn" },
              { icon: Mail, href: "mailto:praveenshivashankar99@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#111118", border: "1px solid #1e1e2e", color: "#64748b", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#6ee7b7"; e.currentTarget.style.borderColor = "rgba(110,231,183,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.transform = "translateY(0)"; }}
                title={label}
              >
                <Icon size={17} />
              </a>
            ))}
            <div style={{ width: "1px", height: "20px", background: "#1e1e2e" }} />
            <span style={{ color: "#475569", fontSize: "12px" }}>Bengaluru, India</span>
          </div>

        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "#334155" }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "0.1em", fontFamily: "Syne, sans-serif", textTransform: "uppercase" }}>Scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}