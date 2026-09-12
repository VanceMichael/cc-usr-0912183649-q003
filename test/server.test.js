import test from "node:test";
import assert from "node:assert/strict";
process.env.NODE_ENV = "test";
const { healthPayload } = await import("../dist/server.js");

test("健康状态包含服务标识", () => {
  assert.deepEqual(healthPayload(), { service: "robot-skill-registry", status: "ok" });
});
