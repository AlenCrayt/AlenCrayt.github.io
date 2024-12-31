"use strict";
let contactos1;
let contactos2;
document.addEventListener("DOMContentLoaded", () => {
    contactos1 = document.querySelector("#panel_contactos");
    contactos2 = document.querySelector("#panel_contactos_atiendo");
});
function contactos_visible() {
    contactos1.style.visibility = "visible";
}
function contactos_novisible() {
    contactos1.style.visibility = "hidden";
}
function contactos_visible_atiendo() {
    contactos2.style.visibility = "visible";
}
function contactos_novisible_atiendo() {
    contactos2.style.visibility = "hidden";
}
