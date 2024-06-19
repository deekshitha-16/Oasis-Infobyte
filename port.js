document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('.aboutmedetail').scrollIntoView({
        behavior: 'smooth' // Scroll smoothly to the .aboutme section
    });
});
document.getElementById("home-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('.aboutme').scrollIntoView({
        behavior: 'smooth' // Scroll smoothly to the .aboutme section
    });
});
document.getElementById("skills-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('.skills-section').scrollIntoView({
        behavior: 'smooth' // Scroll smoothly to the .skills section
    });
});
document.getElementById("projects-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('.projects-section').scrollIntoView({
       
    });
});
