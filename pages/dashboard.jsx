import BackgroundDecor from "../components/BackgroundDecor";

export default function Dashboard() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <main className="flex flex-col justify-center items-center min-h-screen relative">
        <div className="glass p-10 shadow-xl w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Workspace DSRT</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <a href="/workspace/video" className="rounded-2xl shadow-lg p-8 text-center bg-indigo-600 text-white hover:scale-105 transition">
              <span className="text-5xl mb-3 block">🎥</span>
              <h2 className="font-semibold text-xl mb-1">Smart Video</h2>
              <p className="mb-2">Workspace video AI.</p>
            </a>
            <a href="/workspace/photos" className="rounded-2xl shadow-lg p-8 text-center bg-pink-600 text-white hover:scale-105 transition">
              <span className="text-5xl mb-3 block">🖼️</span>
              <h2 className="font-semibold text-xl mb-1">Smart Photos</h2>
              <p className="mb-2">Workspace foto AI.</p>
            </a>
            <a href="/workspace/logo" className="rounded-2xl shadow-lg p-8 text-center bg-yellow-400 text-white hover:scale-105 transition">
              <span className="text-5xl mb-3 block">✨</span>
              <h2 className="font-semibold text-xl mb-1">Smart Logo</h2>
              <p className="mb-2 italic">Segera hadir!</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
