import { Router } from "express";
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../controllers/usersControllers";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
