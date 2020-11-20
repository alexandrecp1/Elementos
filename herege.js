"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.herege = void 0;
var Elementos_1 = require("./Elementos");
var herege = /** @class */ (function (_super) {
    __extends(herege, _super);
    function herege(nome, n_atomico, simbolo, curiosidade) {
        var _this = _super.call(this, nome, n_atomico, simbolo, curiosidade) || this;
        _this._mult = 4;
        return _this;
    }
    return herege;
}(Elementos_1.Elementos));
exports.herege = herege;
