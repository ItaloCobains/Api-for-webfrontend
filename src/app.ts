import express from "express";
import cors from "cors";
import { userRouter } from "./routes/UsersRoute";

class App {
    private express: express.Application;
    private readonly port = 3333;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        // this.listen();
    }

    public getApp(): express.Application {
        this.listen();
        return this.express;
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log(` Servidor Iniciado na porta ${this.port}`);
        });
    }

    private routes(): void {
        this.express.use(userRouter);
    }
}

export { App };
