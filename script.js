
let sun = document.getElementById('sun-b');


sun.addEventListener('click', function() {
    sun.setAttribute('src', 'moon.jpg');
    
    console.log(sun);
});
