/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede*/

const membriTeam = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg"
    },
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott-estrada-developer.jpg"
    },
    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg"
    }
];
  

let risultatoHtml = document.getElementById("risultato") 

for(i = 0; i < membriTeam.length; i++){

    risultatoHtml.innerHTML += `
    <div class="card col m-3 p-0" style="width: 18rem">
        <img src="./assets/img/${membriTeam[i].foto}" class="card-img-top" alt="${membriTeam[i].nome}">
        <div class="card-body">
            <h5 class="card-title">${membriTeam[i].nome}</h5>
            <p class="card-text">${membriTeam[i].ruolo}</p>
        </div>
    </div>
    `
}

