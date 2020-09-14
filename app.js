const button = document.getElementById('btn');

button.addEventListener('click',
  function (e) {
    let currentMessage = document.getElementById('input').value;
    let lastMessage = document.querySelector('.last-message');

    e.preventDefault();

    return lastMessage.innerHTML = currentMessage;


  });

// Add message to UI

// function addMessage(e) {
//   let currentMessage = document.getElementById('input').value;
//   let lastMessage = document.querySelector('.last-message');

//   return lastMessage.innerHTML = currentMessage;

//   e.preventDefault;

// }