"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoneyRushSchema = void 0;
const mongoose_1 = require("mongoose");
exports.HoneyRushSchema = new mongoose_1.Schema({
    playerId: { type: String, required: true },
    dataGame: { type: Object, required: true },
}, { versionKey: false });
const Resource = (0, mongoose_1.model)('HoneyRushGame', exports.HoneyRushSchema);
exports.default = Resource;
/*



*/
//# sourceMappingURL=honey-rush.model.js.map