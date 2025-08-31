import { useState } from "react";
import BackgroundDecor from "../../components/BackgroundDecor";
import { replicateInference } from "../../utils/replicateClient";

export default function SmartVideoWorkspace() {
  const [videoUrl, setVideoUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const processVideo = async () => {
    setLoading(true);
    // Contoh versi model AI Replicate (dummy)
    const model = "your-replicate-video-model-version";
    const res = await replicateInference(model, { video: videoUrl });
    setResult(res);
    setLoading(false);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundDecor />
      <div className="glass p-10 mx-auto mt-20 max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Smart Video Workspace</h1>
        <input
          type="text"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
          placeholder="Video URL"
          className="w-full mb-4 px-3 py-2 rounded border"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded" onClick={processVideo} disabled={loading}>
          {loading ? "Processing..." : "Proses Video"}
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
