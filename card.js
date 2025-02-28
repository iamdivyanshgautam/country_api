// let countryNameSpan = 
// console.log(countryNameSpan);


async function openCountryPage(countryNameSpan)
{
   
    const url = `https://restcountries.com/v3.1/name/${countryNameSpan}`;
    const response = await fetch(url);
    const data = await response.json();
    const country0 = data[0];

    console.log(country0);

        const img0 = document.createElement('img');
            img0.id = `img${countryNameSpan}`;
            img0.src = country0.flags.png;
    
            const h20 = document.createElement('h2');
            h20.textContent = country0.name.common;
    
            const population0 = document.createElement('p');
            population0.id = `population-of-${countryNameSpan}`;
            population0.textContent = `Population: ${country0.population}`;
    
            const region0 = document.createElement('p');
            region0.id = `region-of-${countryNameSpan}`;
            region0.textContent = `Region: ${country0.region}`;
    
            const capital0 = document.createElement('p');
            capital0.id = `capital-of-${countryNameSpan}`;
            const capitalText = country0.capital ? country0.capital[0] : "N/A";
            capital0.textContent = `Capital: ${capitalText}`;
            
            const divCard = document.querySelector(".divCard");
            divCard.append(img0, h20, population0, region0, capital0);  
};

document.addEventListener("DOMContentLoaded", () => openCountryPage(localStorage.getItem("countryNameSpan")));

