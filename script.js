window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 150;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
});