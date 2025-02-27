const request = require("supertest");
const app = require("./server");

test("GET /", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Hello from Backend!");
});
