"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const router = (0, express_1.Router)();
router.get("/", usersControllers_1.getUsers);
router.get("/:id", usersControllers_1.getUser);
router.post("/", usersControllers_1.postUser);
router.put("/:id", usersControllers_1.putUser);
router.delete("/:id", usersControllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map