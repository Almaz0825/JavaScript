"use strict";

function SetPrintFio() {
    var isTrue = false;
    while (isTrue != true) {
        let firstname = prompt('Введите фамилию:', 'Фамилия');
        if (!firstname) {
            break;
        }
        let name = prompt('Введите имя:', 'Имя');
        if (!name) {
            break;
        }
        let lastname = prompt('Введите отчество:', 'Отчество');
        if (!lastname) {
            break;
        }
        var isTrue = confirm(`Ваше ФИО ${firstname + ' ' + name + ' ' + lastname}.\nВсе верно ?`);
        if (isTrue) {
            alert(`Здравствуйте ${firstname + ' ' + name + ' ' + lastname} !`);
        }
    }
}