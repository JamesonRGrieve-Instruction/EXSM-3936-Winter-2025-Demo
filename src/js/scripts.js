const sendButton = document.getElementById('sendButton');
const resetButton = document.getElementById('resetButton');
const messageLog = document.querySelector('.messageLog');
const input = document.querySelector('input');
const timers = [];
document.querySelector("div:last-of-type").addEventListener('click', () => {
  console.log("Click div");
});
sendButton.addEventListener('click', (e) => {
  console.log("Click button");
  e.stopPropagation();
  const message = input.value;
  const newP = document.createElement('p');
  newP.textContent = `[${(new Date().toLocaleTimeString())}] You: ${message}`;
  messageLog.appendChild(newP);
  input.value = '';
  input.focus();
  timers.push(setTimeout(() => {
    const newP = document.createElement('p');
    newP.textContent = `[${(new Date().toLocaleTimeString())}] AI: ipsum dolor sit amet.`;
    messageLog.appendChild(newP);
  }, Math.ceil(Math.random() * 30) * 1000));
});
resetButton.addEventListener('click', () => {
  messageLog.innerHTML = '';
  for (const timer of timers) {
    clearTimeout(timer);
  }
  timers.length = 0;
});