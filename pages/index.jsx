import BackgroundDecor from "../components/BackgroundDecor";

export default function Landing() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="glass p-10 mx-4 mt-16 shadow-xl">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow">
            Selamat Datang di <span className="text-pink-300">DSRT</span>
          </h1>
          <p className="text-lg mb-6 text-white/80">
            Digital Smart Revise Technology: Workspace AI untuk editing foto, video, logo, dan data dengan keamanan maksimal.
          </p>
          <div className="flex gap-4 justify-center mb-2">
            <a href="/login" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full shadow-lg text-white font-semibold hover:scale-105 transition">Login</a>
            <a href="/register" className="px-6 py-3 bg-white/30 text-white rounded-full font-semibold hover:bg-white/50 transition">Register</a>
          </div>
          <span className="mt-2 text-xs text-white/70">#SmartAI #Workspace #Secure</span>
        </div>
      </section>
    </div>
  );
}
