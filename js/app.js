const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");

//fetch function//
fetch("https://randomuser.me/api/?results=5000")
  .then(response => response.json())
  .then(data => generateDom(data.results));

//helper functions//
const generateDom = result => {
  for (let i = 0; i < result.length; i++) {
    const html = `
    <div class="card">
              <div class="card-img-container">
                  <img class="card-img" src= ${result[i].picture.large} alt="profile picture"'>
              </div>
              <div class="card-info-container">
                  <h3 id="name" class="card-name cap">${result[i].name.first} ${result[i].name.last}</h3>
                  <p class="card-text">${result[i].email}</p>
                  <p class="card-text cap">${result[i].location.city}</p>
              </div>
          </div>`;
          gallery.innerHTML = html;
  }
};
