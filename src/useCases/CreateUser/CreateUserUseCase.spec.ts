import supertest from "supertest";
import { App } from "../../app";

describe("Suite de testes do CreateUser", () => {
    it("testando CreateUser", async () => {
        const res = await (
            await supertest(App).post("/users")
        ).body({
            name: "italo",
            email: "italobrandao.contato@gmail.com",
            password: "1234",
        });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("message");
    });
});
