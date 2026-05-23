function submitName() {
  const input = document.getElementById('userName');
  const output = document.getElementById('output');

  const name = input.value.trim();

  // Validation — check if name is empty
  if (name === '') {
    alert('Please enter your name!');
    return;
  }

  // Display greeting message
  output.textContent = 'Hello, ' + name + '! Welcome to the website 👋';
  output.classList.remove('hidden');

  // Clear the input field
  input.value = '';
}