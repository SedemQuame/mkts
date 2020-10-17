var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/* This modules installs a frontend server app basis at the project directory */
module.exports = function (projectName, packageManager) { return __awaiter(_this, void 0, void 0, function () {
    var resolve, renderFile, prompt, _a, writeFileSync, mkdirSync, _b, bold, red, bgRed, green, cyan, packageInstaller, destroyDirectory, projectPath, templateFiles, _i, templateFiles_1, _c, source, target, data, content, err_1, answers;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                resolve = require("path").resolve;
                renderFile = require("ejs").renderFile;
                prompt = require("inquirer").prompt;
                _a = require("fs"), writeFileSync = _a.writeFileSync, mkdirSync = _a.mkdirSync;
                _b = require("chalk"), bold = _b.bold, red = _b.red, bgRed = _b.bgRed, green = _b.green, cyan = _b.cyan;
                packageInstaller = require("./package-installer");
                destroyDirectory = require("./utils").destroyDirectory;
                projectPath = resolve(process.cwd(), projectName);
                templateFiles = [
                    { source: ".babelrc.js.ejs", target: resolve(projectPath, ".babelrc.js"), data: { projectName: projectName } },
                    { source: ".eslintrc.ejs", target: resolve(projectPath, ".eslintrc"), data: { projectName: projectName } },
                    { source: ".gitignore.ejs", target: resolve(projectPath, ".gitignore"), data: { projectName: projectName } },
                    { source: ".prettierrc.ejs", target: resolve(projectPath, ".prettierrc"), data: { projectName: projectName } },
                    { source: "index.d.ts.ejs", target: resolve(projectPath, "index.d.ts"), data: { projectName: projectName } },
                    { source: "nodemon.json.ejs", target: resolve(projectPath, "nodemon.json"), data: { projectName: projectName } },
                    { source: "package.json.ejs", target: resolve(projectPath, "package.json"), data: { projectName: projectName } },
                    { source: "postcss.config.js.ejs", target: resolve(projectPath, "postcss.config.js"), data: { projectName: projectName } },
                    { source: "server.js.ejs", target: resolve(projectPath, "server.js"), data: { projectName: projectName } },
                    { source: "tsconfig.json.ejs", target: resolve(projectPath, "tsconfig.json"), data: { projectName: projectName } },
                    { source: "types.ts.ejs", target: resolve(projectPath, "types.ts"), data: { projectName: projectName } },
                    { source: "webpack.common.js.ejs", target: resolve(projectPath, "webpack.common.js"), data: { projectName: projectName } },
                    { source: "webpack.lib.js.ejs", target: resolve(projectPath, "webpack.lib.js"), data: { projectName: projectName } },
                    { source: "dist/public/index.ejs", target: resolve(projectPath, "dist/public/index.html"), data: { projectName: projectName } },
                    {
                        source: "src/common/stylesheets/config.scss.ejs",
                        target: resolve(projectPath, "src/common/stylesheets/config.scss"),
                        data: { projectName: projectName }
                    },
                    { source: "src/common/stylesheets/index.scss.ejs", target: resolve(projectPath, "src/common/stylesheets/index.scss"), data: { projectName: projectName } },
                    {
                        source: "src/common/stylesheets/status.scss.ejs",
                        target: resolve(projectPath, "src/common/stylesheets/status.scss"),
                        data: { projectName: projectName }
                    },
                    { source: "src/common/stylesheets/utils.scss.ejs", target: resolve(projectPath, "src/common/stylesheets/utils.scss"), data: { projectName: projectName } },
                    { source: "src/common/index.ts.ejs", target: resolve(projectPath, "src/common/index.ts"), data: { projectName: projectName } },
                    { source: "src/common/utils.tsx.ejs", target: resolve(projectPath, "src/common/utils.tsx"), data: { projectName: projectName } },
                    { source: "src/public/login/index.tsx.ejs", target: resolve(projectPath, "src/public/login/index.tsx"), data: { projectName: projectName } },
                    { source: "src/public/login/index.scss.ejs", target: resolve(projectPath, "src/public/login/index.scss"), data: { projectName: projectName } },
                    { source: "src/public/logout/index.tsx.ejs", target: resolve(projectPath, "src/public/logout/index.tsx"), data: { projectName: projectName } },
                    { source: "src/public/app.tsx.ejs", target: resolve(projectPath, "src/public/app.tsx"), data: { projectName: projectName } },
                    { source: "src/public/index.tsx.ejs", target: resolve(projectPath, "src/public/index.tsx"), data: { projectName: projectName } }
                ];
                console.log(cyan("Copying template files..."));
                // Create necessary sub directories
                mkdirSync(resolve(projectPath, "dist"));
                mkdirSync(resolve(projectPath, "dist/public"));
                mkdirSync(resolve(projectPath, "dist/lib"));
                mkdirSync(resolve(projectPath, "src"));
                mkdirSync(resolve(projectPath, "src/common"));
                mkdirSync(resolve(projectPath, "src/common/stylesheets"));
                mkdirSync(resolve(projectPath, "src/public"));
                mkdirSync(resolve(projectPath, "src/public/login"));
                mkdirSync(resolve(projectPath, "src/public/logout"));
                _i = 0, templateFiles_1 = templateFiles;
                _d.label = 1;
            case 1:
                if (!(_i < templateFiles_1.length)) return [3 /*break*/, 4];
                _c = templateFiles_1[_i], source = _c.source, target = _c.target, data = _c.data;
                return [4 /*yield*/, renderFile(resolve("../", "templates", "frontend-server", source), data || {}, {})];
            case 2:
                content = _d.sent();
                writeFileSync(target, content);
                _d.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                console.log(green("Copied template files!\n"));
                _d.label = 5;
            case 5:
                if (!true) return [3 /*break*/, 10];
                _d.label = 6;
            case 6:
                _d.trys.push([6, 7, , 9]);
                // Install dependencies
                console.log(cyan("Installing dependencies..."));
                packageInstaller(projectPath, packageManager, ["cookie-parser", "debug", "express", "express-session", "morgan"]);
                console.log(green("Installed dependencies!\n"));
                // Install development dependencies
                console.log(cyan("Installing development dependencies..."));
                packageInstaller(projectPath, packageManager, [
                    "@babel/core",
                    "@babel/plugin-transform-react-jsx",
                    "@babel/plugin-transform-spread",
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@types/react",
                    "@types/react-dom",
                    "@types/react-router-dom",
                    "@types/yup",
                    "@typescript-eslint/eslint-plugin",
                    "@typescript-eslint/parser",
                    "axios",
                    "autoprefixer",
                    "babel-loader",
                    "concurrently",
                    "css-loader",
                    "eslint",
                    "eslint-config-defaults",
                    "eslint-plugin-react",
                    "faker",
                    "file-loader",
                    "formik",
                    "moment",
                    "node-sass",
                    "nodemon",
                    "numeral",
                    "postcss",
                    "postcss-loader",
                    "prettier",
                    "react",
                    "react-dom",
                    "react-router-dom",
                    "react-simple-widgets",
                    "sass-loader",
                    "style-loader",
                    "ts-loader",
                    "typescript",
                    "url-loader",
                    "webpack@4.44.2",
                    "webpack-cli",
                    "yup"
                ], true);
                console.log(green("Installed development dependencies!\n"));
                // TODO: Link to site for next steps and project directory description
                console.log(green("Project setup complete!\n"));
                return [3 /*break*/, 10];
            case 7:
                err_1 = _d.sent();
                console.log(err_1.message);
                return [4 /*yield*/, prompt([
                        { name: "retry", message: "An error occurred while installing dependencies. Would you like to try again?", type: "confirm" }
                    ])];
            case 8:
                answers = _d.sent();
                if (!answers.retry) {
                    console.log(red("Could not install dependencies. Please rerun ") + bgRed(bold("mkts")) + red(" to try again"));
                    destroyDirectory(projectPath);
                    return [3 /*break*/, 10];
                }
                return [3 /*break*/, 9];
            case 9: return [3 /*break*/, 5];
            case 10: return [2 /*return*/];
        }
    });
}); };