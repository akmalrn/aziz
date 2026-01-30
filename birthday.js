function confetti() {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.style.position = "fixed";
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = "-10px";
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    div.style.animation = "jatuh 3s linear";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes jatuh {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);