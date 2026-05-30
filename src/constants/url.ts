const getBaseUrl = (): string => {
  if (typeof window !== "undefined" && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  if (typeof window !== "undefined") {
    if (window.location.hostname === "localhost") {
      return "http://localhost:8000";
    }
    return `https://api.${window.location.hostname}`;
  }

  return "http://localhost:8000";
};

const getWebSocketUrl = (): string => {
  if (typeof window !== "undefined" && import.meta.env.VITE_WS_URL) {
    return import.meta.env.VITE_WS_URL;
  }

  if (typeof window !== "undefined") {
    if (window.location.hostname === "localhost") {
      return "ws://localhost:8080/connect";
    }
    return `wss://game.${window.location.hostname}/connect`;
  }

  return "ws://localhost:8080/connect";
};

export const URL = {
  baseUrl: getBaseUrl(),
  webSocketUrl: getWebSocketUrl(),
  siteKey: "0x4AAAAAAAc-kdZSc9r3kA9u",
};
