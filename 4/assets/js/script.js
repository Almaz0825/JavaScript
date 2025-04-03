"use strict";

function Zadanie1() {
    let a = prompt("Введите a:");
    let b = prompt("Введите b:");
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function Zadanie2() {
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
}

function Zadanie3() {
    while (true) {
        let n = prompt("Введите число больше 10");
        if (n) {
            if (n > 10) {
                break;
            }
        } else {
            break;
        }
    }
}

function Zadanie4() {
    function min(a, b) {
        if (a < b) {
            return a;
        } else if (b < a) {
            return b;
        } else {
            return "a = b";
        }
    }

    let a = prompt("Введите a:");
    let b = prompt("Введите b:");
    console.log(min(a, b));
}

function Zadanie5() {
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    };
    ask(
        "Вы согласны?",
        () => { alert("Вы согласились."); },
        () => { alert("Вы отменили выполнение."); }
    );
}

function Zadanie6() {
    function checkAge(age) {
        return (age > 18 || confirm('Родители разрешили?'));
    }
    let age = prompt("Введите возраст:");
    checkAge(age);
}