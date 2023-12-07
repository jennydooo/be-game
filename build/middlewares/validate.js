"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const express_validator_1 = require("express-validator");
const validateBody = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        throw new Error('Validate Fail !!');
    }
    next();
};
exports.validateBody = validateBody;
//# sourceMappingURL=validate.js.map