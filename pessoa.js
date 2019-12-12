"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.getRegistro = function () {
        return this.numRegistro;
    };
    Pessoa.prototype.setRegistro = function (_nReg) {
        this.numRegistro = _nReg;
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Pessoa.prototype.getEmail = function () {
        return this.email;
    };
    Pessoa.prototype.setEmail = function (_email) {
        this.email = _email;
    };
    Pessoa.prototype.getTelefone = function () {
        return this.telefone;
    };
    Pessoa.prototype.setTelefone = function (_telefone) {
        this.telefone = _telefone;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
