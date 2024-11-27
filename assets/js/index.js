const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const connectMethodEl = document.getElementById("random-connection");
const connectMethodTextEl = document.getElementById("random-connection-text");
const closeConnectMethodEl = document.getElementById("close-random-connection");
let intervalId;

const randomGetContact = () => {
  const contactMethodsList = [
    `✉️ Want to get in touch? Email me at: <a href="mailto:cribe@self-made.se" class="text-gradient">cribe@self-made.se</a>`,
    `🤝 Want to connect? Hit me up on <a href="https://www.linkedin.com/in/cristian-pencheff-6197108b/" class="text-gradient" target="_blank" rel="noopener noreferrer">LinkedIn!</a>`,
    `🎧 Follow me on <a href="https://open.spotify.com/user/cribe?si=b7cd4b92a4974495" class="text-gradient" target="_blank" rel="noopener noreferrer">Spotify</a> and check out my go-to playlists!`,
  ];

  let lastIndex = -1;
  const listLength = contactMethodsList.length;

  setTimeout(() => {
    let randomNum = Math.floor(Math.random() * listLength);
    connectMethodTextEl.innerHTML = contactMethodsList[randomNum];
    connectMethodEl.classList.remove("hide");
    lastIndex = randomNum;

    intervalId = setInterval(() => {
      let randomNum = Math.floor(Math.random() * listLength);

      if (randomNum === lastIndex) {
        randomNum = randomNum + 1;
        if (randomNum === listLength) randomNum = 0;
      }

      connectMethodTextEl.innerHTML = contactMethodsList[randomNum];
      connectMethodEl.classList.remove("hide");

      lastIndex = randomNum;
    }, 8000);
  }, 4000);
}

const themeSettings = localStorage.getItem("theme");
if (themeSettings === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

menuToggle.addEventListener("change", () => {
  document.body.classList.toggle("mobile-menu-active");
});

closeConnectMethodEl.addEventListener("click", (e) => {
  clearInterval(intervalId);
  connectMethodEl.classList.add("hide");
})

randomGetContact();
