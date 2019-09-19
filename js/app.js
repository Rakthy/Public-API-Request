const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");

//fetch function//
fetch("https://randomuser.me/api/?results=12?")
  .then(response => response.json())
  .then(data => generateDom(data.results));

//helper functions//
const generateDom = results => {
  let html = '';
results.forEach(result =>  {
html += `<div class='card'>
                    <div class="card-img-container">
                        <img class="card-img" src= ${result.picture.large} alt="profile picture"'>
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${result.name.first} ${result.name.last}</h3>
                        <p class="card-text">${result.email}</p>
                        <p class="card-text cap">${result.location.city}, ${result.location.state}</p>
                    </div>
                </div> `;
              });
    gallery.innerHTML = html;
};




// const search = results => {
//   results.forEach(result => {
//     const inputValue = result.name.first.toLowerCase();
//     const employee = result.name.first.toLowerCase();
//     if (inputValue.includes(employee)) {
//       .style.display = "flex";
//     } else {
//       .style.display = "none";
//     }
//   });
// };

// const appendSearchInput = () => {
//   const html = `<form action="#" method="get">
//               <input type="search" id="search-input" class="search-input" placeholder="Search...">
//               <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
//           </form>`;
//   searchContainer.innerHTML = html;
// };
