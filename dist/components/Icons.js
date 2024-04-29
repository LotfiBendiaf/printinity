"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icons = void 0;
var image_1 = __importDefault(require("next/image"));
var Icons = function (_a) {
    var sizes = _a.sizes;
    return (React.createElement(React.Fragment, null,
        React.createElement(image_1.default, { src: '/CosmiMarket.png', alt: 'CosmiMarket Main Icon', sizes: sizes, width: 50, height: 50 })));
};
exports.Icons = Icons;
