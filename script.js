const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const envelopeBox = document.getElementById("envelopeBox");
const envelope = document.getElementById("envelope");
const loveMessage = document.getElementById("loveMessage");

let scale = 1;

noBtn.onclick = () => {
  scale += 0.3;
  yesBtn.style.transform = `scale(${scale})`;

  if (scale > 3) {
    noBtn.style.display = "none";
  }
};

yesBtn.onclick = () => {
  question.style.display = "none";
  envelopeBox.style.display = "flex";
  createConfetti();
};

envelope.onclick = () => {
  envelopeBox.style.display = "none";
  loveMessage.style.display = "block";
};

function createConfetti() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
    confetti.style.background = `hsl(${Math.random()*360},100%,70%)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}