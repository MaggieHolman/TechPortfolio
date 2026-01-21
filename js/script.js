document.getElementById('resume').addEventListener('click', function() {
    window.location.href = 'resume.html'; // Path to your resume file
});

document.getElementById('artportfolio').addEventListener('click', function() {
    window.location.href = 'https://maggieholman.github.io/ArtPortfolio/'; // Path to your resume file
});

document.getElementById('aboutme').addEventListener('click', function() {
    window.location.href = 'https://maggieholman.github.io/ArtPortfolio/about.html'; // Path to your resume file
});

document.getElementById('projects').addEventListener('click', function() {
    window.location.href = 'projects.html'; // Path to your resume file
});
document.getElementById('linkedin').addEventListener('click', function() {
    window.location.href = 'https://www.linkedin.com/in/maggie-holman-3421b226a/'; // Path to your resume file
});
document.getElementById('github').addEventListener('click', function() {
    window.location.href = 'https://github.com/MaggieHolman'; // Path to your resume file
});
document.getElementById('email').addEventListener('click', function() {
    window.location.href = 'projects.html'; // Path to your resume file
});
document.getElementById('instagram').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/maggiesarttt/'; // Path to your resume file
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 500); // Stagger the fade-in by 500ms for each element
    });

});


