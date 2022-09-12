"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
let name;
let specie;
let age;
let alive;
let friends;
let animal = {
    name: 'Noak',
    specie: 'polar bear',
    age: 290
};
let animals = [];
animals.push(animal);
// function printName(name: string) {
//   console.log(name);
// }
// printName(animal.name);
// let printDoubleAge: (age:number) => number
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [animal.name, animal.name, animal.name, animal.name] })));
}
exports.default = App;
