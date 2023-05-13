"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("users", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    //   logging:false
});
exports.default = db;
//# sourceMappingURL=connection.js.map