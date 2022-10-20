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

const teamMembers = [
  {
    'name' : 'Wayne Barnett',
    'role' : 'Founder & CEO',
    'image' : './img/wayne-barnett-founder-ceo.jpg'
  },
  {
    'name' : 'Angela Caroll',
    'role' : 'Chef Editor',
    'image' : './img/angela-caroll-chief-editor.jpg'
  },
  {
    'name' : 'Walter Gordon',
    'role' : 'Office Manager',
    'image' : './img/walter-gordon-office-manager.jpg'
  },
  {
    'name' : 'Angela Lopez',
    'role' : 'Social Media Manager',
    'image' : './img/angela-lopez-social-media-manager.jpg'
  },
  {
    'name' : 'Scott Estrada',
    'role' : 'Developer',
    'image' : './img/scott-estrada-developer.jpg'
  },
  {
    'name' : 'Barbara Ramos',
    'role' : 'Graphic Designer',
    'image' : './img/barbara-ramos-graphic-designer.jpg'
  }
];

//todo Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembers);

//todo Stampare le stesse informazioni su DOM sottoforma di stringhe

// for (let i=0; i < teamMembers.length  ; i++)
//   document.getElementById("myDiv").innerHTML += "Name: " + teamMembers[i].name + " Role: "+ teamMembers[i].role + " Image: "+ teamMembers[i].image + "<br>";

//todo Trasformare la stringa foto in una immagine effettiva DONE

//todo Organizzare i singoli membri in card/schede e stilarli a vostro gusto

// DOM --> PRINT CARDS
const teamContainer = document.querySelector(".team-container");

// ARRAY (team members) --> DOM
function drawCards(teamMembers, teamContainer) {
  
  // CLEAN DOM BEFORE PUSH IN NEW MEMBERS (da fixare il refrash della pagina!)
  teamContainer.innerHTML = "";

  for (let i = 0; i < teamMembers.length; i++) {
    const teamM = teamMembers[i];
    // console.log(teamM);
    teamContainer.innerHTML += `
      <div class="card">
        <div class="circle">
          <div class="imgBox">
            <img src="${teamM.image}" alt="${teamM.name}">
          </div>
        </div>
        <div class="content">
          <a href="#">
           <i class="fa-brands fa-linkedin"></i>
          </a>
          <h3>${teamM.name}</h3>
          <div class="textIcon">
            <h4>${teamM.role}</h4>
            <a href="#">
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </a>
         </div>
        </div>
    </div> 
    `;
  }
}
//INVOCO LA FUNZIONE
drawCards(teamMembers, teamContainer);

//todo Aggiungere attraverso un form un membro al team

const btnAdd = document.getElementById("addMemberButton");

btnAdd.addEventListener("click", function () {
  // CALL BACK
  const newMember = addNewMember();
  // myLibrary
  emptyImput("name");
  emptyImput("role");
  emptyImput("image");
});

function addNewMember() {
  const newMember = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    img: document.getElementById('')
  };

  teamMembers.push(newMember);

  // CALL BACK --> DOM
  drawCards(teamMembers, teamContainer);
}











 






