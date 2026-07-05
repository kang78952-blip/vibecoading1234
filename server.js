/**
 * OpenAI API CORS 프록시 (로컬 개발용)
 * 사용법: node server.js
 * 브라우저 챗봇 설정 → 프록시 URL: http://localhost:3000/api/chat
 */

const http = require("http");

const PORT = 3000;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/chat") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "POST /api/chat 만 지원합니다." }));
    return;
  }

  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      const payload = JSON.parse(body);
      const { apiKey, model, messages, temperature, max_tokens } = payload;

      if (!apiKey) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "apiKey가 필요합니다." }));
        return;
      }

      const openaiRes = await fetch(OPENAI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ model, messages, temperature, max_tokens }),
      });

      const data = await openaiRes.json();
      res.writeHead(openaiRes.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: err.message }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`StyleAge GPT 프록시 실행 중 → http://localhost:${PORT}/api/chat`);
});
