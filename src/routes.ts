import { createUserController } from "./useCases/CreateUser";
import { response, Router } from "express";

const router = Router();

router.post("/users", (request, response) => {
    return createUserController.handle(request, response);
});

export { router };
