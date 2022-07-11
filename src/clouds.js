// styles
import "./scss/clouds.scss";
import "animate.css";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const allStanzas = document.getElementById("all");
const firstStanza = document.getElementById("first");

const morePoetry = async () => {
  firstStanza.classList.remove('animate__fadeIn');
  firstStanza.classList.add('animate__fadeOut');
  await sleep(300);
  firstStanza.classList.remove('shown','animate__fadeOut');
  allStanzas.classList.add('animate__fadeIn','shown');
}
window.morePoetry = morePoetry;

const lessPoetry = async () => {
  allStanzas.classList.remove('animate__fadeIn');
  allStanzas.classList.add('animate__fadeOut');
  await sleep(300);
  allStanzas.classList.remove('shown','animate__fadeOut');
  firstStanza.classList.add('animate__fadeIn','shown');
}
window.lessPoetry = lessPoetry;