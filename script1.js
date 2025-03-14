// Gestion de l'inscription
const inscriptionForm = document.getElementById('inscriptionForm')
if (inscriptionForm !== null) {
	inscriptionForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    // Vérifie si l'utilisateur existe déjà
    if (localStorage.getItem(email)) {
        document.getElementById('messageInscription').textContent = "Cet email est déjà utilisé.";
    } else {
        // Stocke les informations dans le localStorage
        localStorage.setItem(email, JSON.stringify({ email, password }));
        document.getElementById('messageInscription').textContent = "Inscription réussie !";
    }
});
}

// Gestion de la connexion
const connexionForm = document.getElementById('connexionForm')
if (connexionForm !== null) {
	connexionForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Récupère les informations de l'utilisateur
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        document.getElementById('messageConnexion').textContent = "Connexion réussie !";
        // Redirige vers la page d'accueil après connexion
        setTimeout(() => {
            window.location.href = "recette.html";
        }, 1000);
    } else {
        document.getElementById('messageConnexion').textContent = "Email ou mot de passe incorrect.";
    }
});
}