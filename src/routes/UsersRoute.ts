import { createUserController } from "../useCases/CreateUser";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/users", (request, response) => {
    return createUserController.handle(request, response);
});

export { userRouter };
