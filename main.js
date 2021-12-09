// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!




// hideModal function will hide the div(modal) when page is loaded
// window.addEventListener('DOMContentLoaded', hideModal);

// function hideModal() {
//   const modal = document.querySelector("#modal");
//   if (modal.style.display === "none") {
//     mimicServerCall();
//     modal.style.display = "block";
//   } else {
//     modal.style.display = "none";
//   }
// }





document.addEventListener("DOMContentLoaded", () => {
  const hearts = Array.from(document.getElementsByClassName('like-glyph'));
  hearts.forEach(heart => {
    heart.addEventListener("click", function(event) {
      mimicServerCall()
      .then(function(response) {
        if (heart.innerHTML === EMPTY_HEART) {
          heart.className = "activated-heart";
          heart.innerHTML = FULL_HEART;
        } else {
          heart.className = "like-glyph";
          heart.innerHTML = EMPTY_HEART;
        }
      })
      .catch(function(error) {
        let modal = document.querySelector("#modal")
        modal.className = "";
        let modalMessage = document.querySelector("#modal-message");
        modalMessage.innerHTML = error;
        setTimeout(function() {
          modal.className = "hidden" }, 3000);
      })
    })
  })
})






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
