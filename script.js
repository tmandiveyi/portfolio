const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light");
    toggle.textContent = "☀️";
} else {
    toggle.textContent = "🌙";
}

// Handle toggle click
toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    const isLight = body.classList.contains("light");

    toggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

reveals.forEach(el => observer.observe(el));

const learningTopics = [
    "Java & Data Structures",
    "Python Automation",
    "Web Animations",
    "Frontend Design Systems",
    "APIs & Backend Basics",
    "Problem Solving Patterns"
];

const learningList = document.getElementById("learning-list");

learningTopics.forEach(topic => {
    const span = document.createElement("span");
    span.className = "learning-item";
    span.textContent = topic;
    learningList.appendChild(span);
});

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });
    },
    { threshold: 0.5 }
);

sections.forEach(section => navObserver.observe(section));



