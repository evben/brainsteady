var imageIndex = 1;

/**
 * Change dynamiquement l'image affichée sur la page.
 * S'il n'y a plus d'image à afficher, affiche une alerte.
 */
function changerImage() {
    const images = document.getElementsByClassName('image');

    // Cache toutes les images
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    if (imageIndex < images.length) {  // Affiche l'image suivante s'il en reste
        images[imageIndex].style.display = 'block';
        imageIndex++;
    } else {  // Affiche un message lorsque toutes les images ont été vues puis boucle sur la première
        images[0].style.display = 'block';
        imageIndex = 1;
        alert("Vous avez vu toutes les images !");
    }
}

// Code exécuté au chargement de la page
changerImage();