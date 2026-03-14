export default function Footer() {
  return (
    <footer className="py-8 text-center" style={{ borderTop: "1px solid #111118" }}>
      <p style={{ color: "#334155", fontSize: "13px", fontFamily: "DM Sans, sans-serif" }}>
        Designed and built by{" "}
        <span style={{ color: "#6ee7b7", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
          Praveen Shivashankar
        </span>
        {" "}· {new Date().getFullYear()}
      </p>
    </footer>
  );
}