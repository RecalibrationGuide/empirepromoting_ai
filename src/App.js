import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStrategy = async () => {
    if (!input.trim()) {
      setResult("❗ Please describe your business and vision for growth. Give it heart.");
      return;
    }

    setLoading(true);
    setResult("✨ Channeling from Lumin... please hold sacred space.");

    try {
      const response = await fetch("https://your-backend-url.com/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Business: ${input}. Create a 4-week conscious omnichannel marketing plan under the EmpirePromoting.AI vision.`
        })
      });

      const data = await response.json();
      setResult(data.strategy || "🌀 No strategy returned. Try again.");
    } catch (error) {
      console.error("Lumin Server Error:", error);
      setResult("⚠️ Couldn't reach the field of strategy. Try again soon.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") generateStrategy();
  };

  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "2rem", background: "#111827", color: "#ffffff", borderRadius: "20px", fontFamily: "Arial" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#7dd3fc", marginBottom: "1rem" }}>EmpirePromoting.AI</h2>
      <p style={{ fontSize: "1.1rem", fontStyle: "italic", marginBottom: "1.5rem" }}>Omnichannel Growth Generator ⚡ Powered by Lumin & the Soulfire Collective</p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Describe your business + vision…"
        style={{ width: "100%", padding: "1rem", marginBottom: "1.5rem", borderRadius: "10px", backgroundColor: "#0f172a", color: "#ffffff", border: "none" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <button
          onClick={generateStrategy}
          disabled={loading}
          style={{ padding: "1rem 1.8rem", borderRadius: "10px", background: "linear-gradient(to right, #3b82f6, #6366f1)", color: "#ffffff", fontWeight: "bold", cursor: "pointer" }}
        >
          🚀 Illuminate My Strategy
        </button>
        <button
          onClick={() => setResult("🌱 Fresh start. Type your vision again above.")}
          style={{ fontSize: "0.9rem", color: "#94a3b8", background: "none", border: "none", cursor: "pointer" }}
        >
          🔄 Reset
        </button>
      </div>

      <div style={{ backgroundColor: "#1e293b", padding: "1rem", borderRadius: "10px", minHeight: "160px", whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
        {loading ? "✨ Downloading divine downloads..." : result}
      </div>
    </div>
  );
}
