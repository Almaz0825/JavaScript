"use strict";

let bool = true;
function Modal_open(id) {
    const modal_container = document.getElementById(id);
    modal_container.style.display = "flex";
    const close_btn = modal_container.querySelector('.close_btn');

    if (bool) {
        modal_container.addEventListener('click', function (e) {
            if (e.target == modal_container || e.target == close_btn) {
                modal_container.style.display = "none";
            }
        });
        bool = false;
    }
}

const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.popular .cards'));
tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        document.querySelector('.cards.active').classList.remove('active');
        content[index].classList.add('active');
    })
})