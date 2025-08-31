import { useState } from "react";
import BackgroundDecor from "../../components/BackgroundDecor";
import { replicateInference } from "../../utils/replicateClient";

export default function SmartPhotosWorkspace() {
  const [photoUrl, setPhotoUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const processPhoto = async () => {
    setLoading(true);
    // Contoh versi model AI Replicate (dummy)
    const model = "your-replicate-photo-model-version";
    const res = await replicateInference(model, { image: photoUrl });
    setResult(res);
    setLoading(false);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <div className="glass p-10 mx-auto mt-20 max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-pink-700 text-center">Smart Photos Workspace</h1>
        <input
          type="text"
          value={photoUrl}
          onChange={e => setPhotoUrl(e.target.value)}
          placeholder="Photo URL"
          className="w-full mb-4 px-3 py-2 rounded border"
        />
        <button className="bg-pink-600 text-white px-4 py-2 rounded" onClick={processPhoto} disabled={loading}>
          {loading ? "Processing..." : "Proses Foto"}
        </button>
        {result && (
          <div className="mt-6 bg-white rounded p-4 shadow">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
