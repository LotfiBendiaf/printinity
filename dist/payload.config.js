"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var config_1 = require("payload/config");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var Users_1 = require("./app/collections/Users");
var dotenv_1 = __importDefault(require("dotenv"));
var Products_1 = require("./app/collections/Products/Products");
var Media_1 = require("./app/collections/Media");
var Orders_1 = require("./app/collections/Orders");
var ProductFiles_1 = require("./app/collections/ProductFiles");
var Logo_1 = __importDefault(require("./components/Logo"));
var Icon_1 = __importDefault(require("./components/Icon"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env')
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users_1.Users, Products_1.Products, Media_1.Media, ProductFiles_1.ProductFiles, Orders_1.Orders],
    routes: {
        admin: '/sell'
    },
    admin: {
        user: "users",
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "- PRINTINITY",
            favicon: "/favicon.ico",
            ogImage: "/thumbnail.jpg"
        },
        components: {
            graphics: {
                Logo: Logo_1.default,
                Icon: Icon_1.default
            }
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    }
});
