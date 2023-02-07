import './styles/main.css';
import tonkatsu from './assets/tonkatsu.jpg'
import openTab from './openTab.js'

const tonkatsuImg = document.querySelector("#tonkatsu");
tonkatsuImg.src = tonkatsu

const about = document.querySelector("#about.tablink")
const contact = document.querySelector("#contact.tablink")

menu.addEventListener("click", openTab("#menu-items"));
about.addEventListener("click", openTab("#about-us"));
contact.addEventListener("click", openTab("#contact-us"));

window.openTab = openTab

