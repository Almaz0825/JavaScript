"use strict";

const dropdown = document.querySelector('.dropdown');

const drop_content = dropdown.querySelector('.drop_margin');
dropdown.addEventListener('mouseenter', function () {
    drop_content.classList.add('active');
});

dropdown.addEventListener('mouseleave', function () {
    drop_content.classList.remove('active');
});


const faq = document.querySelector('.question_content');

faq.addEventListener('click', function (e) {
    let targetItem = e.target.closest('.item_title');
    if (!targetItem) return;

    let currentText = targetItem.nextElementSibling;
    let faq_items = faq.querySelectorAll('.question_item');
    for (let i = 0; i < faq_items.length; i++) {
        const item = faq_items[i].querySelector('.item_title');
        if (item != targetItem) {
            item.classList.remove('active');
            item.nextElementSibling.style.maxHeight = 0;
        }
    }

    targetItem.classList.toggle('active');
    if (targetItem.classList.contains('active')) {
        currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
        currentText.style.maxHeight = 0;
    }
});