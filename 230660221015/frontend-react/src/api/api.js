const BASE_URL = "http://localhost:3000"; // ❗ HAPUS /api

export const request = async (endpoint, method = "GET", data = null) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : null,
  });

  // ⛔ jika backend balas HTML
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Endpoint salah / backend tidak mengembalikan JSON");
  }
};
