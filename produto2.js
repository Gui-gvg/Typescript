"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var P1;
var P2;
P1 = new Produto_1.Produto(6666, "mouse", "preto", 5.90, 25, "blabla");
P2 = new Produto_1.Produto(6667, "monitor", "preto", 3000.00, 40, "blabla");
console.log(P1.getInfo());
console.log(P2.getInfo());
