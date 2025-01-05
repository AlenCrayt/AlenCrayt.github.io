let contactos1: HTMLElement;
let contactos2: HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
  contactos1 = document.querySelector("#panel_contactos") as HTMLElement;
  contactos2 = document.querySelector(
    "#panel_contactos_atiendo"
  ) as HTMLElement;
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
