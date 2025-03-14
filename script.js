// Fonction pour mettre à jour les ingrédients
function mettreAJourIngredients() {
    // Récupère la valeur sélectionnée dans le menu déroulant
    const select = document.getElementById('personnes');
    const nbPersonnes = parseInt(select.value);

    // Récupère tous les éléments <span> contenant les quantités
    const ingredients = document.querySelectorAll('#ingredients span');

    // Parcourt chaque ingrédient pour mettre à jour sa quantité
    ingredients.forEach(ingredient => {
        // Récupère la quantité de base (pour 2 personnes) depuis l'attribut data-base
        const baseValue = parseFloat(ingredient.getAttribute('data-base'));

        // Calcule la nouvelle quantité en fonction du nombre de personnes
        const newValue = baseValue * (nbPersonnes / 2); // 2 est la base (pour 2 personnes)

        // Affiche la nouvelle quantité (arrondie à 2 décimales)
        ingredient.textContent = Math.round(newValue * 100) / 100;
    });
}

// Écouteur d'événement pour déclencher la mise à jour lors du changement de sélection
document.getElementById('personnes').addEventListener('change', mettreAJourIngredients);

// Appeler la fonction au chargement de la page pour initialiser les quantités
document.addEventListener('DOMContentLoaded', mettreAJourIngredients);