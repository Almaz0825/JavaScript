"use strict";

const car_img_slider = document.querySelector('.img_slider');

if (car_img_slider) {
    const prev_btn = car_img_slider.querySelector('.slider_btn.prev'),
        next_btn = car_img_slider.querySelector('.slider_btn.next'),
        img_container = car_img_slider.querySelector('.img_items'),
        img_items = img_container.querySelectorAll('img');

    const width = img_container.querySelector('img').width;
    const gap = Number(getComputedStyle(img_container).gap.replace("px", ""));

    prev_btn.addEventListener('click', Prev_slide);
    next_btn.addEventListener('click', Next_slide);

    let translateY = 0,
        index = 0,
        visibleCountIndex = 3;

    if (img_items.length <= 4) {
        next_btn.disabled = true;
    }

    function Next_slide() {
        index++;

        if (prev_btn.disabled) {
            prev_btn.disabled = false;
        }
        if (index + visibleCountIndex == img_items.length - 1) {
            next_btn.disabled = true;
        }

        for (let i = 0; i < img_items.length; i++) {
            if (i >= index && i <= index + visibleCountIndex) {
                img_items[i].style.opacity = "1";
            } else {
                img_items[i].style.opacity = "0";
            }
        }

        translateY -= width + gap;
        img_container.style.transform = `translateX(${translateY}px)`;
    }

    function Prev_slide() {
        index--;

        if (index < 1) {
            prev_btn.disabled = true;
        }
        if (next_btn.disabled) {
            next_btn.disabled = false;
        }

        for (let i = 0; i < img_items.length; i++) {
            if (i >= index && i <= index + visibleCountIndex) {
                img_items[i].style.opacity = "1";
            } else {
                img_items[i].style.opacity = "0";
            }
        }

        translateY += width + gap;
        img_container.style.transform = `translateX(${translateY}px)`;
    }
}