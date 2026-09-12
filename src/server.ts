import http from "node:http";

export const serviceName = "robot-skill-registry";
export function healthPayload(): { service: string; status: string } {
  return { service: serviceName, status: "ok" };
}

export function createServer() {
  return http.createServer((request, response) => {
    if (request.method !== "GET" || request.url !== "/health") {
      response.writeHead(404).end();
      return;
    }
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify(healthPayload()));
  });
}

if (process.env.NODE_ENV !== "test") {
  createServer().listen(Number(process.env.PORT ?? 8080), "0.0.0.0");
}
