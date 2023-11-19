// styles
import "./scss/clouds.scss";
import "animate.css";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

function reflow(element) {
  if (element === undefined) {
    element = document.documentElement;
  }
  void element.offsetHeight;
}
// console.log(screen.orientation);
window.addEventListener("orientationchange", () => {
  // reflow();
  location.reload();
});


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const allStanzas = document.getElementById("all");
const firstStanza = document.getElementById("first");
const footer = document.getElementsByTagName("footer")[0];

const morePoetry = async () => {
  firstStanza.classList.remove('animate__fadeIn');
  firstStanza.classList.add('animate__fadeOut');
  footer.classList.add('animate__fadeOut');
  await sleep(300);
  firstStanza.classList.remove('shown','animate__fadeOut');
  footer.classList.remove('shown','animate__fadeOut');
  allStanzas.classList.add('animate__fadeIn','shown');
  // reflow();
}
window.morePoetry = morePoetry;

const lessPoetry = async () => {
  allStanzas.classList.remove('animate__fadeIn');
  allStanzas.classList.add('animate__fadeOut');
  await sleep(300);
  allStanzas.classList.remove('shown','animate__fadeOut');
  firstStanza.classList.add('animate__fadeIn','shown');
  footer.classList.add('animate__fadeIn','shown');
}
window.lessPoetry = lessPoetry;