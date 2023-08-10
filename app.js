const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 5000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(()=> {
    console.log('Timer Done');
  });
  console.log("Getting Position");
}

button.addEventListener("click", trackUserHandler);
