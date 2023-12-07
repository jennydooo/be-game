"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const honey_rush_controller_1 = require("@/controllers/honey-rush.controller");
const router = express_1.default.Router();
router.get('/spin', honey_rush_controller_1.createGameHoneyRush);
exports.default = router;
//# sourceMappingURL=honey-rush.js.map