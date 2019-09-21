const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");
const cards = document.querySelectorAll(".card");
const modalButton = document.querySelectorAll("modal-close-btn");

//fetch function//
fetch("https://randomuser.me/api/?results=12&nat=us")
  .then(response => response.json())
  .then(data => {
    generateDom(data.results);
    generateModal(data.results);
  });

//append search input//
const appendSearchInput = () => {
  const html = `<form action="#" method="get">
                <input type="search" id="search-input" class="search-input" placeholder="Search...">
                <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
            </form>`;
  searchContainer.innerHTML = html;
};

appendSearchInput();

//card function to generate random employees to DOM//
const generateDom = results => {
  let html = "";
  results.forEach(result => {
    html += `<div class='card'>
                    <div class="card-img-container">
                        <img class="card-img" src= ${
                          result.picture.large
                        } alt="profile picture"'>
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${
                          result.name.first
                        } ${result.name.last}</h3>
                        <p class="card-text">${result.email}</p>
                        <p class="card-text cap">${result.location.city}, ${
      result.location.state
    }</p>
                    </div>
                </div> `;
  });
  gallery.innerHTML = html;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      generateModal();
      console.log("hi");
    });
  });
};

//append modal//

const generateModal = result => {
  let html = "";
  result.forEach(result => {
    html = `  <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${
                          result.picture.large
                        }" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${
                          result.name.first
                        } ${result.name.last}</h3>
                        <p class="modal-text">${result.email}</p>
                        <p class="modal-text cap">${result.location.city}</p>
                        <hr>
                        <p class="modal-text">${result.phone}</p>
                        <p class="modal-text">${capitalize(
                          result.location.street
                        )}.  ${capitalize(result.location.city)}, ${capitalize(
      result.location.state
    )} ${result.location.postcode}</p>
                        <p class="modal-text">Age: ${result.dob.age}</p>
                          <button class="next">Prev</button>
                          <button class="prev">Next</button>
                    </div>
                </div>`;
  });
  // document.body.innerHTML += html;
//   const modal = document.querySelector('.modal-container');
//   const closeBtn = document.querySelector('.modal-close-btn');
//   closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });
};

const modalOpen = () => {
  cards.forEach(card => {});
};

//StackoverFlow Function capitalize first letter of every string//
const capitalize = phrase => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
