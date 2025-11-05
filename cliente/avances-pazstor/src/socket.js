import { io } from "socket.io-client";

// export const socket = io("http://192.168.17.24:3000");
export const socket = io("https://159.65.78.91");


// src/socket.js
// import { io } from "socket.io-client";

// export const socket = io("https://159.65.78.91", {
//   path: "/socket.io/",
//   transports: ["websocket", "polling"],     // fuerza WS, pero permite fallback
//   reconnection: true,
//   reconnectionAttempts: Infinity,           // reintentos sin límite
//   reconnectionDelay: 1000,                  // 1s
//   reconnectionDelayMax: 10000,              // backoff hasta 10s
//   timeout: 20000,                           // 20s para el handshake
//   withCredentials: true,
//   extraHeaders: { "x-client": "web" },      // opcional (útil para logs)
// });

// // LOGS ÚTILES
// socket.on("connect_error", (err) => console.warn("[socket] connect_error:", err?.message));
// socket.io.on("reconnect_attempt", (n) => console.log("[socket] reconnect_attempt:", n));
// socket.io.on("reconnect_error", (err) => console.warn("[socket] reconnect_error:", err?.message));
// socket.io.on("reconnect_failed", () => console.error("[socket] reconnect_failed"));
