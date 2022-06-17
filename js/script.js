// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// Definisco una lista di array a cui corrispondono alle informazioni delle rispettive card
const infoArrayTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
        imgAlt: 'Wayne Barnett',

    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
        imgAlt: 'Angela Caroll',

    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
        imgAlt: 'Walter Gordon',

    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
        imgAlt: 'Angela Lopez',

    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
        imgAlt: 'Scott Estrada',

    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
        imgAlt: 'Barbara Ramos',
        

    },
    
]

// Seleziono la classe del DOM per poi appendere le singole card
const teamContainer = document.querySelector('.team-container');

// Genero il ciclo for per scorrere i vari object nel array
for(let i = 0; i < infoArrayTeam.length; i++) {
    const thisCards = infoArrayTeam[i];

    // Copio il template della card dal HTML
    const cardToPush = `
    <div class="team-card">
                
        <div class="card-image">
            <img
                src="${thisCards.img} "
                alt="${thisCards.imgAlt} "
            />
        </div>

        <div class="card-text">
            <h3>${thisCards.name}</h3>
            <p>${thisCards.role} </p>
        </div>

    </div>
    
    `
    // Concateno le card a TeamContainer
    teamContainer.innerHTML += cardToPush;

}



































        // <div class="team-card">
            
        //     <div class="card-image">
        //         <img
        //             src="img/wayne-barnett-founder-ceo.jpg"
        //             alt="Wayne Barnett"
        //         />
        //     </div>

        //     <div class="card-text">
        //         <h3></h3>
        //         <p></p>
        //     </div>

        // </div>