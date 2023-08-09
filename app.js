const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => {
    console.log(posData);
  }, error => {
    console.log(error);
  });
  console.log('Getting Position');
}

button.addEventListener('click', trackUserHandler);
