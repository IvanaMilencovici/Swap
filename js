document.addEventListener("DOMContentLoaded", function () {
    // Navbar shrink on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#564E29"; // Darker background when scrolling
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)"; // Enhanced shadow
        } else {
            navbar.style.backgroundColor = "white"; // Default color
            navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"; // Lighter shadow
        }
    });

    // Button hover animation
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)"; // Slight scale up
            button.style.backgroundColor = "#EE9845"; // Change to orange
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)"; // Reset scale
            button.style.backgroundColor = "white"; // Default background color
        });
    });

    // Smooth horizontal scroll
    const horizontalScroll = document.querySelectorAll(".horizontal-scroll");
    horizontalScroll.forEach((section) => {
        section.addEventListener("wheel", (e) => {
            e.preventDefault();
            section.scrollBy({
                left: e.deltaY * 3,
                behavior: "smooth",
            });
        });
    });

    // Footer links hover animation
    const footerLinks = document.querySelectorAll(".footer-nav a");
    footerLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#B1728D"; // Change to a different color
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#333"; // Default color
        });
    });
});
