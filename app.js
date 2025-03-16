const url = "https://dog.ceo/api/breeds/image/random";
const btnNext = document.querySelector("#next-image");
const imageShow = document.getElementsByClassName("dog-result")[0];

// hit Api with Fetch
/*
function getDogImage() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            imageShow.src = data.message; 
        })
        .catch(error => {
            console.log("Error -", error);
        });
}

// Fetch initial image
getDogImage();

// Add event listener for the button
btnNext.addEventListener("click", getDogImage);
*/

// hit API with await , async
async function getDogImage() {
  try {
    let response = await fetch(url);
    const data = await response.json();
    imageShow.src = data.message;
  } catch (error) {
    console.log("Error - found", error);
  }
}

// Event listener for the button
btnNext.addEventListener("click", getDogImage);

// Fetch an initial fact when the page loads
getDogImage();
