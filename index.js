const body = document.body;
const navbar = document.querySelector('#navbar');
const colorButton = document.querySelector('#colorButton');
const refresh = document.querySelector("#refresh");
const search = document.querySelector('#searchbox');




async function fetchdata() {
    let value = "all";
    let searchbox = document.querySelector('#searchbox').value;
    
    if (searchbox.trim() !== "") {
        value = searchbox;};
 
 let url = searchbox.trim() !== "" ? `https://restcountries.com/v3.1/name/${value}` : `https://restcountries.com/v3.1/all`;
    const promise = await fetch(url);
    const data = await promise.json();
    data.sort((a,b)=> a.name.common.localeCompare(b.name.common));
    // console.log(data);

    const main = document.querySelector(".main");
        main.innerHTML = ""; // Clear previous results

        
    for (let i = 0; i < data.length; i++) {
        const span = document.createElement('span');
        span.style.cursor = "pointer";
        span.addEventListener("click", () => { localStorage.setItem("countryNameSpan", data[i].name.common);
                                               window.open("card.html", "_blank");}); // Click event
        span.id = `span${i}`;


        const img = document.createElement('img');
        img.id = `img${i}`
        img.src = data[i].flags.png;

        const h2 = document.createElement('h2');
        h2.textContent = data[i].name.common;

        const population = document.createElement('p');
        population.id = `population-of-${data[i].name.common}`;
        population.textContent = `Population: ${data[i].population}`;

        const region = document.createElement('p');
        region.id = `region-of-${data[i].name.common}`;
        region.textContent = `Region: ${data[i].region}`;

        const capital = document.createElement('p');
        capital.id = `capital-of-${data[i].name.common}`;
        const capitalText = data[i].capital ? data[i].capital[0] : "N/A";
        capital.textContent = `Capital: ${capitalText}`;


        span.append(img, h2, population, region, capital);
        main.appendChild(span);}


};

async function backgrounddColor () {
 const currentColor = getComputedStyle(body).backgroundColor;

 if (currentColor=== "rgb(255, 255, 255)") {
     colorButton.textContent= "Light mode";
     body.style.backgroundColor= "black";
     navbar.style.backgroundColor= "white";
 }
 else {
    body.style.backgroundColor = "white";
    colorButton.textContent = "Dark Mode";
    navbar.style.backgroundColor= "grey";
}
    
 };



async function refresher() {
     location.reload();   

};
    

document.addEventListener("DOMContentLoaded", fetchdata);
search.addEventListener("keydown", fetchdata);
colorButton.addEventListener("click", backgrounddColor);
refresh.addEventListener("click", refresher);







    









    

