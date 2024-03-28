"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.conn = mysql_1.default.createPool({
    host: "http://202.28.34.197/",
    user: "web66_65011212003",
    password: "65011212003@csmsu",
    database: "web66_65011212003",
});
