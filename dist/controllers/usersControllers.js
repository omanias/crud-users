"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.json({ user });
    }
    else {
        res.status(404).json({
            msg: `User ${id} doesn't exists`,
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExists = yield user_1.default.findOne({
            where: {
                email: body.email,
            },
        });
        if (emailExists) {
            return res.status(400).json({
                msg: `Email ${body.email} exists`,
            });
        }
        const user = user_1.default.build(body);
        yield user.save();
        res.json({ user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "contact support",
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `Id ${id} doesn't exists`,
            });
        }
        yield user.update(body);
        res.json({ user });
    }
    catch (error) {
        res.status(500).json({
            msg: `Contact support`,
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `Id ${id} doesn't exists`,
        });
    }
    // Logical delete
    yield user.update({ status: false });
    // Physical delete
    // await user.destroy()
    res.json({ user });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersControllers.js.map