import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import BackgroundDecor from "../components/BackgroundDecor";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else window.location.href = "/dashboard";
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <div className="glass p-8 rounded-2xl shadow-2xl w-full max-w-sm mx-auto mt-24">
        <h1 className="text-center text-2xl font-bold mb-6">DSRT Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-lg border bg-white/30 text-black placeholder:text-gray-500 outline-none"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-lg border bg-white/30 text-black placeholder:text-gray-500 outline-none"/>
        <button onClick={handleLogin} className="w-full bg-pink-600 hover:bg-pink-700 py-2 rounded-lg font-bold mb-4">Login</button>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <div className="flex justify-between text-sm">
          <a href="/reset" className="underline">Forgot Password</a>
          <a href="/register" className="underline">Register</a>
        </div>
        <div className="mt-4 text-center">
          <a href="/" className="text-xs underline">Tutup</a>
        </div>
      </div>
    </div>
  );
}
