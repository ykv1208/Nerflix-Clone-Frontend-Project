// === 1. Typing Animation in Hero ===
const typingTarget = document.querySelector(".hero span:first-child");
const phrases = [
  "Enjoy Big Movies, Hit Series & More from ₹149.",
  "Watch Anywhere. Cancel Anytime.",
  "Unlimited Movies, TV Shows & More."
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const phrase = phrases[currentPhrase];
  const displayText = phrase.slice(0, currentChar);
  typingTarget.textContent = displayText;

  if (!isDeleting && currentChar < phrase.length) {
    currentChar++;
    setTimeout(type, 60);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

if (typingTarget) type();


// === 2. Back to Top Button ===
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.id = "backToTopBtn";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.backgroundColor = "#e50914";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// === 3. Keyboard Shortcut: Press `/` to focus email input ===
document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    e.preventDefault();
    const emailInput = document.querySelector('.hero input');
    if (emailInput) emailInput.focus();
  }
});


// === Existing Feature: Get Started Email Validation ===
const getStartedBtn = document.querySelector('.hero button');
const emailInput = document.querySelector('.hero input');

getStartedBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  if (email === '') {
    alert('⚠️ Please enter your email address to get started.');
  } else {
    alert(`✅ Welcome! We will contact ${email} soon.`);
  }
});

// === Existing Feature: Video Play on Hover ===
const videos = document.querySelectorAll('video');

videos.forEach((video) => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// === Existing Feature: Scroll Fade-In Animation ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});
document.querySelectorAll(".faqbox").forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("open");
  });
});
