"use strict";

function Zadanie1() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    console.log(sum);
}

function Zadanie2() {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    multiplyNumeric(menu);
    console.log(menu);
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}

function Zadanie3() {
    let calculator = {
        a: 0,
        b: 0,
        read() {
            this.a = Number(prompt("Введите a:"));
            this.b = Number(prompt("Введите b:"));
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    }
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
}

function Zadanie4() {
    let str = "$120";
    console.log(extractCurrencyValue(str));
}

function extractCurrencyValue(str) {
    let res = "";
    for (const element of str) {
        if (Number(element) || element == "0") {
            res += element;
        }
    };
    return res;
}

function Zadanie5() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map(item => item.name);

    alert(names.join(", "));
}

function Zadanie6() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let users = [vasya, petya, masha];
    console.log(getAverageAge(users));
    // getAverageAge(users);
}

function getAverageAge(obj) {
    let sum = obj.reduce((avg, item) => avg + item.age, 0);
    return sum / obj.length;
}