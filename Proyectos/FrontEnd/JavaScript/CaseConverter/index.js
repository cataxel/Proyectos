let textarea = document.getElementById("textarea");
let btnUp = document.getElementById("upper-case").onclick = function () {
    textarea.value = textarea.value.toUpperCase();
};
let btnLo = document.getElementById("lower-case").onclick = function () {
    textarea.value = textarea.value.toLowerCase();
};
let btnPr = document.getElementById("proper-case").onclick = function () {
    let stre = textarea.value.split(' ');
    for (var i = 0; i < stre.length; i++) {
        stre[i] = stre[i].charAt(0).toUpperCase() + stre[i].slice(1).toLowerCase();
    }
    textarea.value = stre.join(' ');
};
let btnSe = document.getElementById("sentence-case").onclick = function () {
    let stre = textarea.value.split('. ');
    for (let i = 0; i < stre.length; i++) {
        stre[i] = stre[i].charAt(0).toUpperCase() + stre[i].slice(1).toLowerCase();
    }
    textarea.value = stre.join('. ');
};
