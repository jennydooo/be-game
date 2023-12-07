"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.log(123);
    console.error(err);
    res.status(500).send({ errors: [{ message: 'Something went wrong' }] });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.middleware.js.map