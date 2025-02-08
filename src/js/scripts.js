const sendButton = document.getElementById('sendButton');
const messageLog = document.querySelector('.messageLog');
const input = document.querySelector('input');
sendButton.addEventListener('click', () => {
  const message = input.value;
  const newP = document.createElement('p');
  newP.textContent = `[${(new Date().toLocaleTimeString())}] You: ${message}`;
  messageLog.appendChild(newP);
  input.value = '';
  input.focus();
  setTimeout(() => {
    const newP = document.createElement('p');
    newP.textContent = `[${(new Date().toLocaleTimeString())}] AI: ipsum dolor sit amet.`;
    messageLog.appendChild(newP);
  }, Math.ceil(Math.random() * 30) * 1000);
});