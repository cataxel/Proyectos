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

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

