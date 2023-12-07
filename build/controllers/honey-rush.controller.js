"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameHoneyRush = void 0;
const honey_rush_service_1 = require("@/services/honey-rush.service");
const createGameHoneyRush = async (req, res, next) => {
    const { money } = req.query;
    const dataGame = await (0, honey_rush_service_1.spinGame)(Number(money) || 2);
    return dataGame ? res.send(dataGame) : res.status(400).send({ message: 'Create resource fail !' });
};
exports.createGameHoneyRush = createGameHoneyRush;
//# sourceMappingURL=honey-rush.controller.js.map