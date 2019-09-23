const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");

fetch("https://randomuser.me/api/?results=12&nat=us")
  .then(response => response.json())
  .then(data => generateCards(data.results));
//append search input//

//card function to generate random employees to DOM//
const generateCards = results => {
  let html = "";
  results.forEach((result, index) => {
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
      generateModal(results);
    });
  });
};

const modalContainer = document.createElement("div");
const generateModal = results => {
  modalContainer.className = "modal-container";
  document.body.appendChild(modalContainer);
  let html = "";
  results.forEach((result, index) => {
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

  modalContainer.innerHTML = html;
  const modal = document.querySelector(".modal-container");
  const closeBtn = document.querySelector(".modal-close-btn");
  modal.style.display = "";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

// <div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//             <h3 id="name" class="modal-name cap">name</h3>
//             <p class="modal-text">email</p>
//             <p class="modal-text cap">city</p>
//             <hr>
//             <p class="modal-text">(555) 555-5555</p>
//             <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//             <p class="modal-text">Birthday: 10/21/2015</p>
//         </div>
//     </div>
//
//     // IMPORTANT: Below is only for exceeds tasks
//     <div class="modal-btn-container">
//         <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
//         <button type="button" id="modal-next" class="modal-next btn">Next</button>
//     </div>
// </div>

// StackoverFlow Function capitalize first letter of every string//
const capitalize = phrase => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
