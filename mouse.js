// Create a new div element for the mouse cursor
var cursor = document.createElement('div');
cursor.style.width = '10px !important';
cursor.style.height = '10px !important';
cursor.style.borderRadius = '50% !important';
cursor.style.backgroundColor = 'white !important';
cursor.style.position = 'fixed !important';
cursor.style.zIndex = '9999 !important';
cursor.style.pointerEvents = 'none !important'; // Ensure the cursor does not interfere with mouse events

// Append the cursor element to the body
document.body.appendChild(cursor);

// Function to update the cursor position based on mouse movements
function updateCursorPosition(event) {
    cursor.style.left = (event.clientX - cursor.offsetWidth / 2) + 'px !important';
    cursor.style.top = (event.clientY - cursor.offsetHeight / 2) + 'px !important';
}

// Add event listener for mouse movements
document.addEventListener('mousemove', updateCursorPosition);
