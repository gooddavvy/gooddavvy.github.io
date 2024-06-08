// Create a new div element for the mouse cursor
var cursor = document.createElement('div');
cursor.className = 'custom-cursor';

// Append the cursor element to the body
document.body.appendChild(cursor);

// Function to update the cursor position based on mouse movements
function updateCursorPosition(event) {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
}

// Add event listener for mouse movements
document.addEventListener('mousemove', updateCursorPosition);
