import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'we', 'some', 'mine'];
let adj = ['great', 'big', 'curious', 'confident', 'scared'];
let noun = ['jogger', 'racoon', 'unicorn', 'rainbow', 'love'];
let extensions = ['.com', '.net', '.io', '.dev'];

// Función para generar un dominio aleatorio
function generateRandomDomain() {
  let p = pronoun[Math.floor(Math.random() * pronoun.length)];
  let a = adj[Math.floor(Math.random() * adj.length)];
  let n = noun[Math.floor(Math.random() * noun.length)];
  let ext = extensions[Math.floor(Math.random() * extensions.length)];

  return `${p}${a}${n}${ext}`;
}

// Función para generar todos los dominios posibles
function generateAllDomains() {
  let domains = [];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          domains.push(`${p}${a}${n}${ext}`);
        }
      }
    }
  }
  return domains;
}

// Mostrar un dominio al cargar
let domainElement = document.getElementById('domain');
domainElement.textContent = generateRandomDomain();

// Escuchar clic en el botón
let btn = document.getElementById('domain_btn');
btn.addEventListener('click', () => {
  let newDomain = generateRandomDomain();
  domainElement.textContent = newDomain;
});