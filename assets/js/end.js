var saveButton = document.querySelector('#save');
var msgDiv = document.querySelector('#msg');

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

saveButton.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;

  if (email === '') {
    displayMessage('error', 'Cannot be blank');
  } else {
    displayMessage('success', 'Stats saved');

    // Save email and password to localStorage using `setItem()`
    localStorage.setItem('stats', email);
  }
});
