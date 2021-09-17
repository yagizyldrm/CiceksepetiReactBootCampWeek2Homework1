
let requestHeader = new Headers();
requestHeader.append("Content-type", "text/json");
let initializedObject = {
  method: "GET",
  headers: requestHeader,
};

const gridContainer = document.querySelector(".grid-container");
const search = document.querySelector(".textinput");
const form = document.querySelector(".formdiv");
const searchBar = document.querySelector(".search-bar");

//Creating an empty array so we can fill it with API
let responseData = [];
// Fetching data
fetch("https://jsonplaceholder.typicode.com/posts", initializedObject)
  .then((response) => response.json())
  .then((data) => {
    responseData = data;
    console.log(data);
    getCardsListed(data);
});
//Listing the data which we got from API
const getCardsListed = (data) => {
  let numberOfCards = 0;
  for (i = 0; i< data.length; i++){
    const element = data[i];
    const gridItem = document.createElement("div");
    const gridImage = document.createElement("div");  
    const gridImageSource = document.createElement("img");
    const responseBody = document.createElement("div");
    const gridTitle = document.createElement("h2");
    const gridDescription = document.createElement("p");
    gridContainer.className = "grid-container";
    gridItem.className = "grid-item";
    gridImage.className = "grid-img";
    gridTitle.className = "grid-title";
    gridDescription.className ="grid-description"
    gridImageSource.src = `https://picsum.photos/id/${element.id}/200/200`
    gridTitle.innerHTML = element.title;
    gridDescription.innerHTML = element.body;
    gridImage.appendChild(gridImageSource);
    gridItem.appendChild(gridImage);
    responseBody.appendChild(gridTitle);
    responseBody.appendChild(gridDescription);
    gridItem.appendChild(responseBody);
    gridContainer.appendChild(gridItem);
    numberOfCards++;
    if(numberOfCards === 10){
      break;
    }
  }
};

//Search Bar Functionalty adding
const updatedValue = () =>{
  let searchedValue = search.value.toLowerCase();

  filteredData = responseData.filter(
    (data) => data.title.includes(searchedValue) || data.body.includes(searchedValue));
    gridContainer.innerHTML ="";
    getCardsListed(filteredData);
}

search.addEventListener("input", updatedValue);



// SIDEBAR SHOW/OFF
function myFunction() {
  var x = document.getElementById("saydbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// function showForm() {
//   var y = document.querySelector(".formContainer");
//   if (y.style.display === "none") {
//     y.style.display === "block";
//   }
//   else {
//     y.style.display === "none";
//   }
// };


//Form and Card Showing Buttons Adding
const showFormButton = document.querySelector(".sidebarFormButton");
const showCardsButton = document.querySelector(".sidebarCardButton");


const showForm = () =>{
  gridContainer.style.display = "none";
  form.style.display = "flex";
  if(form.style.display === "flex"){
    searchBar.style.display ==="none"
  };
};
const showCards = () =>{
  gridContainer.style.display = "flex";
  form.style.display = "none";
  if(gridContainer.style.display === "flex"){
    searchBar.style.display ==="flex"
  };
};

showFormButton.addEventListener("click", showForm);
showCardsButton.addEventListener("click", showCards);
