# Random Dog Image Generator

This project is a simple web application that fetches and displays random dog images using the **Dog CEO API**. The user can click a button to load a new random dog image.

## Features
- Fetch random dog images from an API.
- Three different ways to hit the API:
  1. **Using Fetch API (Promise-based)**
  2. **Using Fetch API with async/await**
  3. **Using Axios (Promise-based HTTP client)**
- Responsive design.

## Tech Stack
- **HTML**: Structure of the page
- **CSS**: Styling the UI
- **JavaScript**: Handling API calls and interactivity
- **Axios**: Fetching data using HTTP requests

## Screenshots
### 🐶 Random Dog Image Example
<img src =  "https://github.com/rahulkumardev24/dog_random_image_website/blob/main/Screenshot%20(77).png" />

---

## How to Use

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/random-dog-image.git
 cd random-dog-image
```

### 2️⃣ Open the project in a browser
You can simply open the `index.html` file in any browser.

### 3️⃣ Run with Live Server (Optional)
If you are using VS Code, install the **Live Server** extension and click "Go Live".

---

## API Integration Methods

### 1️⃣ Fetch API (Promise-based)
```javascript
function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".dog-result").src = data.message;
        })
        .catch(error => console.log("Error -", error));
}

document.querySelector("#next-image").addEventListener("click", getDogImage);
getDogImage();
```

### 2️⃣ Fetch API with Async/Await
```javascript
async function getDogImage() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await response.json();
        document.querySelector(".dog-result").src = data.message;
    } catch (error) {
        console.log("Error - found", error);
    }
}

document.querySelector("#next-image").addEventListener("click", getDogImage);
getDogImage();
```

### 3️⃣ Axios (Promise-based HTTP client)
```javascript
async function getDogImage() {
    try {
        let response = await axios.get("https://dog.ceo/api/breeds/image/random");
        document.querySelector(".dog-result").src = response.data.message;
    } catch (error) {
        console.log("Error - found", error);
    }
}

document.querySelector("#next-image").addEventListener("click", getDogImage);
getDogImage();
```

---



---

## Contributions
💡 Feel free to fork this repository and submit a pull request with improvements!

---



Happy Coding! 🚀🐶

