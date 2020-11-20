"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elementos = void 0;
var Elementos = /** @class */ (function () {
    function Elementos(nome, n_atomico, simbolo, curiosidade) {
        this._nome = nome;
        this._n_atomico = n_atomico;
        this._simbolo = simbolo;
        this._curiosidade = curiosidade;
        this._mult = 1;
    }
    Object.defineProperty(Elementos.prototype, "n_atomico", {
        get: function () {
            return this._n_atomico;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elementos.prototype, "simbolo", {
        get: function () {
            return this._simbolo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elementos.prototype, "curiosidade", {
        get: function () {
            return this._curiosidade;
        },
        enumerable: false,
        configurable: true
    });
    return Elementos;
}());
exports.Elementos = Elementos;
