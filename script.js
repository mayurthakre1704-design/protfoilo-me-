// Typing Animation
const text = ["Software Engineer","IoT Developer","Full stack Devloper"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
if(count === text.length){ count = 0; }

currentText = text[count];
letter = currentText.slice(0, ++index);
document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}
setTimeout(type, 120);
})();

// Skill Animation
window.addEventListener("scroll",()=>{
document.querySelectorAll(".progress").forEach(bar=>{
const pos = bar.getBoundingClientRect().top;
if(pos < window.innerHeight - 100){
bar.style.width = bar.getAttribute("data-width");
}
});
});

// Active Nav Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
let current = "";
sections.forEach(section=>{
const sectionTop = section.offsetTop - 150;
if(scrollY >= sectionTop){
current = section.getAttribute("id");
}
});
navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}
});
});
// ===== PREMIUM CONTACT FORM FUNCTION =====
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");
  const submitBtn = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple Email Regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
      showMessage("❌ Please fill all fields!", "error");
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
      return;
    }

    if (!email.match(emailPattern)) {
      showMessage("❌ Please enter a valid email!", "error");
      return;
    }

    // Button Loading Effect
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      showMessage("✅ Message Sent Successfully!", "success");
      form.reset();
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    }, 1500);

  });

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.style.opacity = "1";

    if (type === "success") {
      messageBox.style.color = "#00f5d4";
    } else {
      messageBox.style.color = "#ff4d6d";
    }

    setTimeout(() => {
      messageBox.style.opacity = "0";
    }, 3000);
  }

});
