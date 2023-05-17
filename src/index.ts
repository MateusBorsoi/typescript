//Tipos: String, boolean, number, etc...

let x: number = 10;
console.log(x);

// Inferência X Annotation

//Inferencia

let y = 12;
console.log(y);

//Annotation

let z: number = 15;
console.log(z);

//Tipos Básicos

let fistname: string = "Mateus";
let age: number = 24;
const isAdmin: boolean = true;

//object

const pessoa: object = { nome: "Mateus", idade: 24 };
console.log(pessoa);

const numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(numbers);

//tuplas

let mytuple: [number, string, string[]];

mytuple = [1, "Mateus", ["A", "B"]];

console.log(mytuple);

//object Literals -> {prop.value}

const user: { name: string; age: number } = {
  name: "Mateus",
  age: 24,
};

console.log(user);

//any

let a: any = 0;

a = "teste";
a = 10;
a = true;
a = [];

//union type

let id: number | string = "10";

id = 200;

type myIdType = number | string;

const userId: myIdType = 10;
const productID: myIdType = "10";

//enum
// tamanho de roupas (size: Medio, size: Pequeno)

enum size {
  P = "Pequeno",
  M = "Medio",
  G = "Grande",
}

enum cor {
  Amr = "Amarelo",
  Azl = "Azul",
  Ros = "Rosa",
  verm = "Vermelho",
}

const camisa = {
  name: "Camisa polo",
  size: size.P,
  cor: cor.Ros,
};

console.log(camisa);

// Literal Types

let teste: "Valor Padrão";

// Funções

function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(5, 3));

function sayHello(name: string): string {
  return `Hello, ${name}`;
}

console.log(sayHello("Mateus"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Olá");

function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
  } else {
    console.log(`Olá ${name}`);
  }
}

greeting("Olá", "Seja bem-vindo(a)");

// Interfaces

interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumValues(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

sumValues({ n1: 1, n2: 10 });

console.log(sumValues({ n1: 1, n2: 10 }));

function multplyValues(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

console.log(multplyValues({ n1: 5, n2: 6 }));

const someValues: MathFunctionParams = {
  n1: 10,
  n2: 15,
};

console.log(multplyValues(someValues));

//narrowing
//checagem de tipos

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log("Numero");
  } else {
    console.log("Boolean");
  }
}

doSomething(true);
doSomething(15);

//Generics

function showArrayItens<T>(arr: T[]) {
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
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    (this.name = name), (this.role = role), (this.isApproved = isApproved);
  }

  showUserName() {
    console.log(this.name);
  }

  showUserRole(canShow: boolean): void {
    if (canShow) {
      console.log("Usuário é Admin");
    }
    console.log("Sem acesso");
  }
}

const jao = new User("Jao", "Admin", true);
console.log(jao);

// Interfaces em classes

interface iVehicle {
  brand: string;
  showbrand(): void;
}

class Car implements iVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    (this.brand = brand), (this.wheels = wheels);
  }
  showbrand(): void {
    console.log(`A marca do carro é: ${this.brand}`);
  }
}

const fusca = new Car("Vw", 4);

fusca.showbrand();

//Herança

class SuperCar extends Car {
  engine;
  constructor(brand: string, wheels: number, engine: string) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Ford", 4, "V8");
a4.showbrand();
console.log(a4);

//Decorators


//Constructor Decorator
function baseParams() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    }
  };
}


@baseParams()
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");

console.log(sam)
