import { useState } from "react";
import BackgroundDecor from "../../components/BackgroundDecor";
import { replicateInference } from "../../utils/replicateClient";

export default function SmartLogoWorkspace() {
  const [brand, setBrand] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateLogo = async () => {
    setLoading(true);
    // Contoh versi model AI Replicate (dummy)
    const model = "your-replicate-logo-model-version";
    const res = await replicateInference(model, { brand });
    setResult(res);
    setLoading(false);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <div className="glass p-10 mx-auto mt-20 max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-yellow-700 text-center">Smart Logo Workspace</h1>
        <input
          type="text"
          value={brand}
          onChange={e => setBrand(e.target.value)}
          placeholder="Nama Brand / Logo"
          className="w-full mb-4 px-3 py-2 rounded border"
        />
        <button className="bg-yellow-400 text-white px-4 py-2 rounded" onClick={generateLogo} disabled={loading}>
          {loading ? "Generating..." : "Generate Logo"}
        </button>
        {result && (
          <div className="mt-6 bg-white rounded p-4 shadow">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
        <div className="mt-6 text-center text-yellow-700 italic">Segera hadir fitur premium!</div>
      </div>
    </div>
  );
}
