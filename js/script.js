// Selecting Elements by Their Id
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let lake = document.getElementById('lake');
let road = document.getElementById('road');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    // Scroll Effect with JavaScript
    let value = window.scrollY;

    // Stars
    stars.style.left = value * 0.25 + 'px';
    // Moon
    moon.style.top = value * 1.05 + 'px';
    // Mountains
    mountains.style.top = value * 0.4 + 'px';
    // Lake
    lake.style.top = value * 0.4 + 'px';
    // Road
    road.style.top = 0 + 'px';
    // Text
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    // Button
    btn.style.marginTop = value * 0.2 + 'px';
    // Header
    header.style.top = value * 0.5 + 'px';

})
