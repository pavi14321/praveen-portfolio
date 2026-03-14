import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      <div style={{ position: "fixed", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(110,231,183,0.05) 0%, transparent 70%)", filter: "blur(80px)", top: "-200px", left: "-200px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)", filter: "blur(80px)", bottom: "-100px", right: "-100px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}