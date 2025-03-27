"use strict";

function Zadanie1() {
    let
        admin,
        name = "Джон";

    admin = name;
    alert(admin);
}

function Zadanie2() {
    let city = prompt("Введите название города");
    let date = Number(prompt("Введите год образования города"));
    let count = prompt("Введите население города");
    let year = new Date();
    alert(`Городу ${city} исполнилось ${year.getFullYear() - date} лет с момента его образования. Население - ${count} человек`);
}

function Zadanie3() {
    let r = Number(prompt("Введите радиус", 1));
    alert(`Площадь круга: ${Math.PI * r * r}`);
}

function Zadanie4() {
    let a = Number(prompt("Введите первое число"));
    let b = Number(prompt("Введите второе число"));
    alert(`Сумма чисел = ${a + b}\nРазность чисел = ${a - b}\nРазность чисел = ${b - a}\nПроизведение чисел = ${a * b}\nЧастное чисел = ${a / b}\nЧастное чисел = ${b / a}`);
}