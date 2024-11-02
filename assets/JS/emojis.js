function emojiRainInnovacion(event) {
  const emojis = ["🤖", "👾", "🌟", "💡"];
  const numEmojis = 20;

  for (let i = 0; i < numEmojis; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = `-10px`;

    document.body.appendChild(emoji);

    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }
}
function emojiRainCalidad(event) {
  const emojis = ["💎", "🎯", "📈", "🥇"];
  const numEmojis = 20;

  for (let i = 0; i < numEmojis; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = `-10px`;

    document.body.appendChild(emoji);

    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }
}
function emojiRainSostenibilidad(event) {
  const emojis = ["💧", "🍃", "🌎", "🚀"];
  const numEmojis = 20;

  for (let i = 0; i < numEmojis; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = `-10px`;

    document.body.appendChild(emoji);

    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }
}
function emojiRainCompromiso(event) {
  const emojis = ["🫡", "🙂‍↕️", "👀", "👨‍💻"];
  const numEmojis = 20;

  for (let i = 0; i < numEmojis; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = `-10px`;

    document.body.appendChild(emoji);

    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }
}
