'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

var ClipboardCopy = /** @class */ (function () {
    function ClipboardCopy(text) {
        this.str = '';
        this.str = text || '';
    }
    /**
     * ????????????
     * @param text ????????????
     * @returns this ????????????
     */
    ClipboardCopy.prototype.setText = function (text) {
        this.str = text;
        return this;
    };
    /**
     * ????????????
     */
    ClipboardCopy.prototype.copy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, this.copyClipboardApi()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        err_1 = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.copyExecCommand()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_1 || err_1 || this.customError())];
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ClipboardCopy.prototype.copyClipboardApi = function () {
        if (!navigator.clipboard)
            throw this.customError();
        return navigator.clipboard.writeText(this.str);
    };
    ClipboardCopy.prototype.copyExecCommand = function () {
        var span = document.createElement('span');
        span.textContent = this.str;
        // ?????????????????????????????????
        span.style.whiteSpace = 'pre';
        span.style.webkitUserSelect = 'auto';
        span.style.userSelect = 'all';
        span.style.position = 'fixed';
        span.style.top = '-19999px';
        span.style.left = '-19999px';
        document.body.appendChild(span);
        var selection = window.getSelection();
        var range = window.document.createRange();
        selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
        range.selectNode(span);
        selection === null || selection === void 0 ? void 0 : selection.addRange(range);
        var success = false;
        try {
            success = window.document.execCommand('copy');
        }
        finally {
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            document.body.removeChild(span);
        }
        if (!success)
            return Promise.reject(this.customError());
    };
    ClipboardCopy.prototype.customError = function () {
        return new DOMException('The request is not allowed', 'NotAllowedError');
    };
    return ClipboardCopy;
}());

exports.default = ClipboardCopy;
