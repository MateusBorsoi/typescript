"use strict";
//Tipos: String, boolean, number, etc...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let x = 10;
console.log(x);
// Inferência X Annotation
//Inferencia
let y = 12;
console.log(y);
//Annotation
let z = 15;
console.log(z);
//Tipos Básicos
let fistname = "Mateus";
let age = 24;
const isAdmin = true;
//object
const pessoa = { nome: "Mateus", idade: 24 };
console.log(pessoa);
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
//tuplas
let mytuple;
mytuple = [1, "Mateus", ["A", "B"]];
console.log(mytuple);
//object Literals -> {prop.value}
const user = {
    name: "Mateus",
    age: 24,
};
console.log(user);
//any
let a = 0;
a = "teste";
a = 10;
a = true;
a = [];
//union type
let id = "10";
id = 200;
const userId = 10;
const productID = "10";
//enum
// tamanho de roupas (size: Medio, size: Pequeno)
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "Medio";
    size["G"] = "Grande";
})(size || (size = {}));
var cor;
(function (cor) {
    cor["Amr"] = "Amarelo";
    cor["Azl"] = "Azul";
    cor["Ros"] = "Rosa";
    cor["verm"] = "Vermelho";
})(cor || (cor = {}));
const camisa = {
    name: "Camisa polo",
    size: size.P,
    cor: cor.Ros,
};
console.log(camisa);
// Literal Types
let teste;
// Funções
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));
function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(sayHello("Mateus"));
function logger(msg) {
    console.log(msg);
}
logger("Olá");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Olá", "Seja bem-vindo(a)");
function sumValues(nums) {
    return nums.n1 + nums.n2;
}
sumValues({ n1: 1, n2: 10 });
console.log(sumValues({ n1: 1, n2: 10 }));
function multplyValues(nums) {
    return nums.n1 * nums.n2;
}
console.log(multplyValues({ n1: 5, n2: 6 }));
const someValues = {
    n1: 10,
    n2: 15,
};
console.log(multplyValues(someValues));
//narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log("Numero");
    }
    else {
        console.log("Boolean");
    }
}
doSomething(true);
doSomething(15);
//Generics
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`Item:${item}`);
    });
}
const a1 = [1, 2, 3, 4];
const a2 = ["A", "B", "C", "D"];
showArrayItens(a1);
showArrayItens(a2);
// Classes
class User {
    constructor(name, role, isApproved) {
        (this.name = name), (this.role = role), (this.isApproved = isApproved);
    }
    showUserName() {
        console.log(this.name);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log("Usuário é Admin");
        }
        console.log("Sem acesso");
    }
}
const jao = new User("Jao", "Admin", true);
console.log(jao);
class Car {
    constructor(brand, wheels) {
        (this.brand = brand), (this.wheels = wheels);
    }
    showbrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("Vw", 4);
fusca.showbrand();
//Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Ford", 4, "V8");
a4.showbrand();
console.log(a4);
//Decorators
function baseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParams(),
    __metadata("design:paramtypes", [String])
], Person);
const sam = new Person("Sam");
console.log(sam);
