const express = require("express");
const request = require("supertest");
const router = require("../routes");

const app = express();

app.use(express.json());
app.use("/auth", router);

const data = {
  user1: {
    email: "test1@test.com",
    code: "123123",
  },
  user2: {
    email: "test2@test.com",
    code: "122122",
  },
};

describe("Auth API Routes", () => {
  it("should login a user", async () => {
    const response = await request(app).post("/auth/login").send(data.user1);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({}));
    expect(response.body).toHaveProperty("jwt");
  });

  it("should refresh a token", async () => {
    const userData = await request(app).post("/auth/login").send(data.user1);
    const response = await request(app)
      .post("/auth/refreshToken")
      .send(userData.body.jwt);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
    });
  });

  it("should get user information", async () => {
    const userTokens = await request(app).post("/auth/login").send(data.user1);
    const { accessToken } = userTokens.body.jwt;
    const response = await request(app)
      .get("/auth/getMe")
      .set("Authorization", `Bearer ${accessToken}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({}));
  });
});
