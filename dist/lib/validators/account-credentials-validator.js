"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidator = exports.AuthCredentialsValidator = void 0;
var zod_1 = require("zod");
exports.AuthCredentialsValidator = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, {
        message: 'Password must be at least 8 characters long.',
    }),
});
exports.AuthValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, {
        message: 'Password must be at least 8 characters long.',
    }),
});
