import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import BackgroundDecor from "../components/BackgroundDecor";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <div className="glass mx-auto mt-20 p-10 max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Profile</h1>
        {user ? (
          <div className="text-center">
            <p><b>Email:</b> {user.email}</p>
            <button className="mt-4 bg-red-500 px-4 py-2 rounded text-white" onClick={() => { supabase.auth.signOut(); window.location.href = "/"; }}>Logout</button>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    </div>
  );
}
