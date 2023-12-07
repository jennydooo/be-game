"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = __importDefault(require("module-alias"));
module_alias_1.default.addAlias("@", __dirname);
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const error_handler_middleware_1 = require("@/middlewares/error-handler.middleware");
// import { connectToDatabase } from '@/database/index'.
const routes_1 = require("@/routes");
require("express-async-errors");
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
const port = process.env.PORT || 8000;
// ; (async () => {
//   await connectToDatabase()
//   console.log('Connected to the database successfully!')
// })()
app.use(routes_1.router);
app.use(error_handler_middleware_1.errorHandler);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map