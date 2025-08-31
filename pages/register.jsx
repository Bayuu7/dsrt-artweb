import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import BackgroundDecor from "../components/BackgroundDecor";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else setSuccess("Registrasi berhasil, silakan cek email.");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <div className="glass p-8 rounded-2xl shadow-2xl w-full max-w-sm mx-auto mt-24">
        <h1 className="text-center text-2xl font-bold mb-6">DSRT Register</h1>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-lg border bg-white/30 text-black placeholder:text-gray-500 outline-none"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-lg border bg-white/30 text-black placeholder:text-gray-500 outline-none"/>
        <button onClick={handleRegister} className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-bold mb-4">Register</button>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
        <div className="flex justify-between text-sm">
          <a href="/login" className="underline">Login</a>
        </div>
        <div className="mt-4 text-center">
          <a href="/" className="text-xs underline">Tutup</a>
        </div>
      </div>
    </div>
  );
}
