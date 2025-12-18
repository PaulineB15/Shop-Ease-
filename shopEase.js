// ----------------------------------------------------
// 1. DÉCLARATION DES DONNÉES ET VARIABLES
// ----------------------------------------------------


//Liste de produits pour le tableau
let produits = [

    { id: 1, nom: "Infusion Robois", prix: 12.99 },

    { id: 2, nom: "Café Arabica", prix: 8.99 },

    { id: 3, nom: "Infusion Camomille", prix: 5.49 },

    { id: 4, nom: "Café Robusta", prix: 9.99 },
];

// Récupérer le tbody du tableau dans le HTML
const tableauBody = document.getElementById('tableauProduits');

// Récupérer la barre de recherche dans le HTML
const barreRecherche = document.getElementById('rechercher');

// Récupérer le bouton Réinitialiser du HTML
const boutonReset = document.getElementById('reset');


// ----------------------------------------------------
// 2. CRÉATION DU TABLEAU
// ----------------------------------------------------


// Création d'une fonction pour l'affichage des produits qui peuvent changés
function afficherProduits(liste) {
    // Transforme le tableau HTML en un tableau de Javascript
    const lignesHTML = liste.map(produit => {
        return `
      <tr>
        <td>${produit.nom}</td>
        <td>${produit.prix} €</td>
        <td>
          <button onclick="supprimer(${produit.id})">Supprimer</button>
        </td>
      </tr>
    `;
    });
    // Assembler le squelette du tableau HTML(le body) avec la liste des produits
    tableauBody.innerHTML = lignesHTML.join('');
}


// Création d'une fonction pour l'affichage des produits qui peuvent changés
function calculerTotal (liste) {
     const sommeTotale =  liste.reduce((somme, produit) => {
         return somme + produit.prix;
     }, 0);

     // Récupérer l'iD total dans le HTML et afficher le total (2 chiffres après la virgule)
     document.getElementById('total-price').innerText = sommeTotale.toFixed(2);
}


// Création d'une fonction pour supprimer le produit voulu
function supprimer(idSupprimer) {
    const ListeSuppression = produits.filter(produit=> produit.id !== idSupprimer);

    produits = ListeSuppression
    // Appel des fonctions = Update de la nouvelle liste et calcul après suppression de produits
    afficherProduits(produits);
    calculerTotal(produits);
}


// Création du "bruit" à la relache de la touche du clavier dans la barre de recherche
barreRecherche.addEventListener('keyup', (evenement) => {
    // Récuperer le texte qui a été tapé dans la barre de recherche
    const texteSaisi = evenement.target.value.toLowerCase();
    // Filtre la liste du tableau d'origine
    const listeFiltre = produits.filter(produit =>
        produit.nom.toLowerCase().includes(texteSaisi)
);
    afficherProduits(listeFiltre);
    calculerTotal(listeFiltre);
});


//Création du "bruit" sur le bouton Réintialiser
boutonReset.addEventListener('click', () => {

    // Récuperer la liste complète d'origine (avec la variable 'produits)
    produits = [
        { id: 1, nom: "Infusion Robois", prix: 12.99 },
        { id: 2, nom: "Café Arabica", prix: 8.99 },
        { id: 3, nom: "Infusion Camomille", prix: 5.49 },
        { id: 4, nom: "Café Robusta", prix: 9.99 },
    ];

    //Vider la barre de recherche
    barreRecherche.value = "";
    //Appel de fonctions
    afficherProduits(produits);
    calculerTotal(produits);
});


// ----------------------------------------------------
// 3. APPELS DES FONCTIONS
// ----------------------------------------------------

// Appel de la fonction (afficherProduits) pour voir la liste des produits affichée
afficherProduits(produits);

// Appel de la fonction (calculTotal) pour voir le total affiché
calculerTotal(produits);



