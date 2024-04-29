"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
function Icon() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(image_1.default, { src: '/printinity-Icon.png', alt: 'PRINTINITY Main Icon', width: 50, height: 50 })));
}
exports.default = Icon;
