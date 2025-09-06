// Typewriter Effect (Tagline)

const text = "B.Sc CS Student | Aspiring Software Developer | Future Zoho Engineer";

let i = 0;

function typeWriter() {

  if (i < text.length) {

    document.getElementById("tagline").innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 80);

  }

}

typeWriter();

// Button Click Alert

function sayHello() {

  alert("Hello! 👋 Thanks for visiting my portfolio 🚀");

}

// Dark Mode Toggle

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    toggleBtn.textContent = "☀️"; // Light mode icon

  } else {

    toggleBtn.textContent = "🌙"; // Dark mode icon

  }

});

// Floating Emoji Animation (extra stylish 😍)

const emojis = ["✨","🚀","💡","🔥","🌙","💻"];

function dropEmoji() {

  const emoji = document.createElement("div");

  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.classList.add("emoji");

  emoji.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(emoji);

  setTimeout(() => {

    emoji.remove();

  }, 4000);

}

setInterval(dropEmoji, 2000);