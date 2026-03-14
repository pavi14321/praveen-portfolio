import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          style={{ fontFamily: "Syne, sans-serif", background: "none", border: "none", cursor: "pointer", fontSize: "18px", fontWeight: 700 }}
          onClick={() => navigate("/")}
        >
          <span className="gradient-text">PS</span>
          <span style={{ color: "#94a3b8", fontWeight: 400, fontSize: "14px", marginLeft: "8px" }}>Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="nav-link">
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            style={{ background: "rgba(110,231,183,0.1)", color: "#6ee7b7", border: "1px solid rgba(110,231,183,0.2)", fontFamily: "Syne, sans-serif", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(110,231,183,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(110,231,183,0.1)")}
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: "rgba(10,10,15,0.97)", borderBottom: "1px solid #1e1e2e" }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ textAlign: "left", color: "#cbd5e1", fontWeight: 500, fontSize: "16px", fontFamily: "Syne, sans-serif", background: "none", border: "none", cursor: "pointer" }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}