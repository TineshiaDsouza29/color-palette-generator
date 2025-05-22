const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

// Function to generate a random HEX color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create palette
function generatePalette() {
  palette.innerHTML = ''; // Clear previous colors
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = color;
    box.innerText = color;
    box.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      box.innerText = 'Copied!';
      setTimeout(() => (box.innerText = color), 1000);
    });
    palette.appendChild(box);
  }
}

// Initial load
generatePalette();
generateBtn.addEventListener('click', generatePalette);
