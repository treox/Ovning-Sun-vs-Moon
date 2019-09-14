// Skapar en array:
let sVsM = ['sun', 'moon'];

// Ger åtkomst till element:
let sun = document.getElementById('sun-b');

// Gör om ordningen på arrayn när klickar på bilden:
sun.addEventListener('click', function() {
    
    sVsM.shift();
    sVsM.push('sun');
    sVsM.push('moon');

    sun.setAttribute('src', '' + sVsM[0]+'.jpg');
});
