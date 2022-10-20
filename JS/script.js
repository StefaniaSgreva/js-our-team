"use strict"; 

/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto 
BONUS 3:
Aggiungere attraverso un form un membro al team
*/

//todo Creare l’array di oggetti con le informazioni fornite.

let teamMembers = [
  {
    'name' : 'Wayne Barnett',
    'role' : 'Founder & CEO',
    'image' : '<img src="./img/wayne-barnett-founder-ceo.jpg"></img>'
  },
  {
    'name' : 'Angela Caroll',
    'role' : 'Chef Editor',
    'image' : '<img src="./img/angela-caroll-chief-editor.jpg"></img>'
  },
  {
    'name' : 'Walter Gordon',
    'role' : 'Office Manager',
    'image' : '<img src="./img/walter-gordon-office-manager.jpg"></img>'
  },
  {
    'name' : 'Angela Lopez',
    'role' : 'Social Media Manager',
    'image' : '<img src="./img/angela-lopez-social-media-manager.jpg"></img>'
  },
  {
    'name' : 'Scott Estrada',
    'role' : 'Developer',
    'image' : '<img src="./img/scott-estrada-developer.jpg"></img>'
  },
  {
    'name' : 'Barbara Ramos',
    'role' : 'Graphic Designer',
    'image' : '<img src="./img/barbara-ramos-graphic-designer.jpg"></img>'
  }
];

//todo Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembers);

//todo Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i=0; i < teamMembers.length  ; i++)
  document.getElementById("myDiv").innerHTML += "Name: " + teamMembers[i].name + " Role: "+ teamMembers[i].role + " Image: "+ teamMembers[i].image + "<br>";

//todo Trasformare la stringa foto in una immagine effettiva DONE







