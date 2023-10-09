const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

let token = null;

describe("User API tests", () => {
  test("A user can be created with all fields filled", async () => {
    const res = await api
      .post("/api/users")
      .send({
        name: "test",
        email: "kiran@nepal.com",
        password: "One2345678#",
      })
      .expect(200);
    token = res.body.token;
  });
  test("If the fields are invalid, users can not be created", async () => {
    const res = await api
      .post("/api/users")
      .send({
        name: "test",
        email: "",
        password: "One2345678#!",
      })
      .expect(400);
  });
  test("User can login with valid credentials", async () => {
    const res = await api
      .post("/api/users/login")
      .send({
        email: "kiran@nepal.com",
        password: "One2345678#",
      })
      .expect(200);
    token = res.body.token;
  });
  test("User can GET their own information with a valid token", async () => {
    const res = await api
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`)
      .expect(200);
    expect(res.body).toHaveProperty("_id");
  });
});

afterAll(() => {
  mongoose.connection.close();
});
