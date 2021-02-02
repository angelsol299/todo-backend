"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = require("./todos");
// Set up the express app
const app = express_1.default();
// get all todos
app.get("/api/v1/todos", (req, res) => {
    // tslint:disable-next-line:no-console
    console.log("RES MESASGE", res);
    res.send({
        success: "true",
        message: "todos retrieved successfully zzz",
        todos: todos_1.todos,
    });
});
const PORT = 5000;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map