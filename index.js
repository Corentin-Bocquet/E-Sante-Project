// Constantes
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
/*const themeToggler = document.querySelector(".theme-toggler");*/
var nom = "yo";

// Faire apparaitre le Menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Fermer le Menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Changer de thème
/*themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})*/


function changerCouleurTheme() {
    const themeIcone = document.querySelector(".theme-toggler"); // Sélectionner l'icône de changement de thème
    const body = document.body; // Sélectionner le corps du document
  
    themeIcone.addEventListener('click', () => {
      body.classList.toggle('dark-theme-variables'); // Basculer la classe "dark-theme" sur le corps du document

    // Sélectionner les icônes de thème
    const icone1 = themeIcone.querySelector('span:nth-child(1)');
    const icone2 = themeIcone.querySelector('span:nth-child(2)');

    // Basculez la classe "active" sur les icônes de thème
    icone1.classList.toggle('active');
    icone2.classList.toggle('active');

      // Vérifier si la classe "dark-theme" est présente ou non
      const estThemeSombre = body.classList.contains('dark-theme-variables');
  
      // Enregistrer la couleur sélectionnée dans le localStorage
      localStorage.setItem('couleurTheme', estThemeSombre ? 'sombre' : 'clair');

     /* // Enregistrer l'état des icônes de thème dans le localStorage
    localStorage.setItem('iconesTheme', JSON.stringify({
        icone1: icone1.classList.contains('active'),
        icone2: icone2.classList.contains('active')
      }));*/
    });
  }
  
  changerCouleurTheme();

  
  function appliquerCouleurTheme() {
    const themeIcone = document.querySelector(".theme-toggler"); // Sélectionner l'icône de changement de thème
    const body = document.body; // Sélectionner le corps du document
    // Sélectionner les icônes de thème
    const icone1 = themeIcone.querySelector('span:nth-child(1)');
    const icone2 = themeIcone.querySelector('span:nth-child(2)');
    
  
    // Récupérer la couleur du thème enregistrée dans le localStorage
    const couleurTheme = localStorage.getItem('couleurTheme');
  
    if (couleurTheme === 'sombre') {
      body.classList.add('dark-theme-variables'); // Appliquer la classe "dark-theme" si la couleur du thème est sombre
      // Basculez la classe "active" sur les icônes de thème
    icone1.classList.toggle('active');
    icone2.classList.toggle('active');
    } else {
      body.classList.remove('dark-theme-variables'); // Supprimer la classe "dark-theme" si la couleur du thème est claire
    }

   /* // Récupérer l'état des icônes de thème depuis le localStorage
  const iconesTheme = JSON.parse(localStorage.getItem('iconesTheme'));

  if (iconesTheme) {
    // Sélectionner les icônes de thème
    const icone1 = themeIcone.querySelector('span:nth-child(1)');
    const icone2 = themeIcone.querySelector('span:nth-child(2)');

    // Restaurer l'état des icônes de thème à partir du localStorage
    if (iconesTheme.icone1) {
      icone1.classList.add('active');
    }
    if (iconesTheme.icone2) {
      icone2.classList.add('active');
    }
  }*/
  
  }
  
  appliquerCouleurTheme();




  // ================= FORMULAIRE ====================

    // Sélectionner le formulaire
    const formulaire = document.getElementById('survey-form');

    // Écouter l'événement de soumission du formulaire
    formulaire.addEventListener('submit', (event) => {
      event.preventDefault(); // Empêcher le comportement de soumission par défaut du formulaire

      // Récupérer les valeurs des champs du formulaire
      const nom = formulaire.elements['name'].value;
      const email = formulaire.elements['email'].value;
      const age = formulaire.elements['number'].value;
      const continent = formulaire.elements['place'].value;

      
      // Stocker les valeurs dans le localStorage
        localStorage.setItem("nom", nom);
        localStorage.setItem("age", age);


      // Modification de la balise h2 avec la classe "nom"
  var h2ElementNom = document.querySelector(".nom");
  h2ElementNom.textContent = "Prénom : " + nom;

  var h2ElementEmail = document.querySelector(".email");
  h2ElementEmail.textContent = "Email : " + email;

  var h2ElementAge = document.querySelector(".age");
  h2ElementAge.textContent = "Âge : " + age;

  var h2ElementContinent = document.querySelector(".continent");
  h2ElementContinent.textContent = "Continent : " + continent;




      var nom_sto = localStorage.getItem("nom");
      var age_sto = localStorage.getItem("age");

      const afficher_nom = document.getElementById('afficher_nom');
      afficher_nom.textContent = `Bonjour, ${nom} !`;

      


    });





// ======================= Photo de Profil =======================


// Fonction pour importer une photo et la sauvegarder dans le stockage local
function importerPhoto(event) {
    var fichier = event.target.files[0]; // Récupérer le fichier sélectionné
    var lecteur = new FileReader();
  
    lecteur.onload = function(e) {
      var imageBase64 = e.target.result; // Récupérer l'image sous forme de base64
  
      // Sauvegarder l'image dans le stockage local
      localStorage.setItem('photoProfil', imageBase64);
      afficherImage(imageBase64);
    };
  
    lecteur.readAsDataURL(fichier); // Convertir le fichier en base64
  }
  
  // Fonction pour afficher l'image à partir du stockage local
  function afficherImage(imageBase64) {
    // Afficher l'image sur la page
    var imageElement = document.getElementById('photoProfil');
    imageElement.src = localStorage.getItem('cheminPhoto');
  }
  
  // Vérifier s'il y a une image sauvegardée dans le stockage local lors du chargement de la page
  window.onload = function() {
    var imageBase64 = localStorage.getItem('photoProfil');
    if (imageBase64) {
      afficherImage(imageBase64);
    }
  };


  // ===================== Copie PDP ====================
  var cheminPhoto = "";

  window.addEventListener('DOMContentLoaded', function() {
    afficherImageCopie();
  });
  
  function importerPhoto(event) {
    var fichier = event.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var image = document.getElementById('photoProfil');
      image.src = e.target.result;
      cheminPhoto = e.target.result;
      localStorage.setItem('cheminPhoto', cheminPhoto);
      afficherImageCopie();
    };
  
    reader.readAsDataURL(fichier);
  }
  
  function afficherImageCopie() {
    var imageCopie = document.getElementById('photoProfil').cloneNode(true);
    var emplacementCopie = document.getElementById('photoCopie');
  
    if (cheminPhoto !== "") {
      emplacementCopie.src = cheminPhoto;
    }
    else if (localStorage.getItem('cheminPhoto') !== null) {
      emplacementCopie.src = localStorage.getItem('cheminPhoto');
    }
  }
  




  // ============================ COMMENTAIRES =======================

window.addEventListener('DOMContentLoaded', function() {
  afficherCommentaires();
});

function ajouterCommentaire() {
  var message = document.getElementById('message').value;

  if (message.trim() !== '') {
    var commentaire = {
      message: message,
      photo: choisirPhotoAleatoire(),
      nom: choisirNomAleatoire(),
      heure: obtenirHeureActuelle(),
      lieu: obtenirLieuAleatoire()
    };

    var commentairesExistants = localStorage.getItem('commentaires');
    var nouveauxCommentaires = [];

    if (commentairesExistants !== null) {
      nouveauxCommentaires = JSON.parse(commentairesExistants);
    }

    nouveauxCommentaires.unshift(commentaire);
    localStorage.setItem('commentaires', JSON.stringify(nouveauxCommentaires));

    afficherCommentaires();
    effacerChamp();
  }
}

function afficherCommentaires() {
  var listeCommentaires = document.getElementById('listeCommentaires');
  listeCommentaires.innerHTML = '';

  var commentairesExistants = localStorage.getItem('commentaires');
  var commentaires = [];

  if (commentairesExistants !== null) {
    commentaires = JSON.parse(commentairesExistants);
  }

  commentaires.forEach(function(commentaire) {
    var elementCommentaire = document.createElement('div');
    elementCommentaire.classList.add('commentaire');

    var elementPhoto = document.createElement('img');
    elementPhoto.src = commentaire.photo;
    elementPhoto.alt = 'Photo de profil';

    var elementInfos = document.createElement('div');
    elementInfos.classList.add('infos');

    var elementNom = document.createElement('p');
    elementNom.textContent = commentaire.nom;

    var elementHeure = document.createElement('p');
    elementHeure.textContent = commentaire.heure;

    var elementLieu = document.createElement('p');
    elementLieu.textContent = commentaire.lieu;

    var elementMessage = document.createElement('h2');
    elementMessage.textContent = commentaire.message;

    elementInfos.appendChild(elementNom);
    elementInfos.appendChild(elementHeure);
    elementInfos.appendChild(elementLieu);

    elementCommentaire.appendChild(elementPhoto);
    elementCommentaire.appendChild(elementInfos);
    elementCommentaire.appendChild(elementMessage);

    listeCommentaires.appendChild(elementCommentaire);
  });
}

function choisirPhotoAleatoire() {
  var photos = ['./images/person1.png', './images/person2.png', './images/person3.png','./images/person4.png', './images/person5.png'];
  var indiceAleatoire = Math.floor(Math.random() * photos.length);
  return photos[indiceAleatoire];
}

function choisirNomAleatoire() {
  var noms = ['John Doe ', 'Jane Doe ', 'Alice Smith ', 'Bob Johnson '];
  var indiceAleatoire = Math.floor(Math.random() * noms.length);
  return noms[indiceAleatoire];
}

function obtenirHeureActuelle() {
  var date = new Date();
  var heure = date.getHours();
  var minutes = date.getMinutes();
  return heure + 'h' + minutes;
}

function obtenirLieuAleatoire() {
  var lieux = ["Paris", "New York", "Londres", "Tokyo"];
  var indiceAleatoire = Math.floor(Math.random() * lieux.length);
  return lieux[indiceAleatoire];
}

function effacerChamp() {
  document.getElementById('message').value = '';
}
