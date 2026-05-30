const getBaseUrl = (): string => {
  // First priority: environment variables
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    return envUrl;
  }

  // Second priority: localhost development
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return "http://localhost:8000";
  }

  // Third priority: Builder.io preview or other preview environments
  if (typeof window !== "undefined" && window.location.hostname.includes("builderio.dev")) {
    return "https://api.ii88bet.com";
  }

  // Fourth priority: dynamic subdomain construction
  if (typeof window !== "undefined") {
    return `https://api.${window.location.hostname}`;
  }

  // Fallback
  return "https://api.ii88bet.com";
};

const getWebSocketUrl = (): string => {
  // First priority: environment variables
  const envWsUrl = import.meta.env.VITE_WS_URL;
  if (envWsUrl) {
    return envWsUrl;
  }

  // Second priority: localhost development
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return "ws://localhost:8080/connect";
  }

  // Third priority: Builder.io preview or other preview environments
  if (typeof window !== "undefined" && window.location.hostname.includes("builderio.dev")) {
    return "wss://game.ii88bet.com/connect";
  }

  // Fourth priority: dynamic subdomain construction
  if (typeof window !== "undefined") {
    return `wss://game.${window.location.hostname}/connect`;
  }

  // Fallback
  return "wss://game.ii88bet.com/connect";
};

export const URL = {
  baseUrl: getBaseUrl(),
  webSocketUrl: getWebSocketUrl(),
  siteKey: "0x4AAAAAAAc-kdZSc9r3kA9u",
};
