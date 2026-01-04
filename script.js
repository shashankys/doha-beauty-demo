// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
navToggle?.addEventListener("click", () => navList.classList.toggle("show"));

// Hero slider
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const dotsWrap = document.getElementById("heroDots");
let current = 0;
let timer = null;

function renderDots(){
  dotsWrap.innerHTML = "";
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot" + (i === current ? " active" : "");
    d.setAttribute("aria-label", `Go to slide ${i+1}`);
    d.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(d);
  });
}

function goTo(index, resetTimer=false){
  slides[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
  renderDots();
  if(resetTimer){
    clearInterval(timer);
    autoPlay();
  }
}

function autoPlay(){
  timer = setInterval(() => goTo(current + 1), 5000);
}

prevBtn?.addEventListener("click", () => goTo(current - 1, true));
nextBtn?.addEventListener("click", () => goTo(current + 1, true));

renderDots();
autoPlay();

// Booking form (demo behaviour)
const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

bookingForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(bookingForm);
  const name = data.get("name");
  const service = data.get("service");

  // For demo: show success message only
  formStatus.textContent = `✅ Thanks ${name}! Your ${service} request was received. We will contact you soon.`;
  bookingForm.reset();
});

// Testimonials slider (demo)
const testimonials = [
  {
    name: "Isabela",
    text: "One of the best salons in Doha. Friendly staff, great hygiene, and amazing service quality.",
    stars: "★★★★★"
  },
  {
    name: "Amina",
    text: "Bridal makeup was flawless and stayed perfect for hours. Highly recommended!",
    stars: "★★★★★"
  },
  {
    name: "Sara",
    text: "Great facials and hair spa. Clean place and very professional team.",
    stars: "★★★★★"
  }
];

let tIndex = 0;
const tName = document.getElementById("tName");
const tText = document.getElementById("tText");
const tStars = document.getElementById("tStars");

function showTestimonial(i){
  tIndex = (i + testimonials.length) % testimonials.length;
  tName.textContent = testimonials[tIndex].name;
  tText.textContent = testimonials[tIndex].text;
  tStars.textContent = testimonials[tIndex].stars;
}

document.getElementById("tPrev")?.addEventListener("click", () => showTestimonial(tIndex - 1));
document.getElementById("tNext")?.addEventListener("click", () => showTestimonial(tIndex + 1));

// Newsletter demo
const subscribeForm = document.getElementById("subscribeForm");
const subscribeStatus = document.getElementById("subscribeStatus");

subscribeForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  subscribeStatus.textContent = "✅ Subscribed! You’ll receive updates & offers.";
  subscribeForm.reset();
});
