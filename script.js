/* =========================================
   NetAcademy - Script JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Barre de progression de lecture ---
    // S'applique uniquement si on est sur une page de leçon
    if (document.querySelector('.lesson-content') || document.querySelector('.content')) {
        // Crée l'élément HTML de la barre de progression
        const progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        document.body.prepend(progressBar); // Ajoute la barre au début du body

        // Écoute l'événement de défilement (scroll)
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }

    // --- 2. Interaction du Formulaire de Contact ---
    // S'applique uniquement sur la page contact
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche le rechargement de la page pour le test

            // Récupère le bouton d'envoi
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            // Simule un envoi en cours
            submitBtn.innerText = "Envoi en cours...";
            submitBtn.style.opacity = "0.7";
            submitBtn.disabled = true;

            // Après 2 secondes, affiche un message et réinitialise
            setTimeout(() => {
                alert("Félicitations NetAcademy ! Votre message a bien été envoyé fictivement à l'équipe.");
                contactForm.reset(); // Vide le formulaire
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = "1";
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

