// Defining text characters for the empty and full hearts for you to use later.
const emptyHeart = document.querySelector('#empty-heart');
const errorModal = document.querySelector('#error-modal');

emptyHeart.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      // Change the heart to a full heart and add the .activated-heart class
      emptyHeart.classList.add('activated-heart');
    })
    .catch(() => {
      // Display the error modal and show the error message
      errorModal.classList.remove('hidden');
      errorModal.querySelector('.modal-message').textContent = 'Server error. Please try again.';

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

const fullHeart = document.querySelector('#full-heart');

fullHeart.addEventListener('click', () => {
  // Change the heart back to an empty heart and remove the .activated-heart class
  fullHeart.classList.remove('activated-heart');
});


// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
