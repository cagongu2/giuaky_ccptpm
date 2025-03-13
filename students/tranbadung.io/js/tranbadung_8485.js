document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("fade-in");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections(); 
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hiệu ứng hover cho ảnh đại diện
    const profileImg = document.querySelector(".profile-img");
    profileImg.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });
    profileImg.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
