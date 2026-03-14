import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ background: "#0a0a0f" }}>
      <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "120px", fontWeight: 800, lineHeight: 1, background: "linear-gradient(135deg, #6ee7b7, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        404
      </h1>
      <h2 style={{ fontFamily: "Syne, sans-serif", color: "#e2e8f0", fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>Page Not Found</h2>
      <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "32px", maxWidth: "400px" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{ background: "linear-gradient(135deg, #6ee7b7, #a78bfa)", color: "#0a0a0f", padding: "12px 28px", borderRadius: "8px", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer" }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        Back to Home
      </button>
    </div>
  );
}