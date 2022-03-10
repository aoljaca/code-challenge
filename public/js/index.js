window.onload = function () {
  var searchElement = document.getElementById("search");
  var select = document.getElementById("attribute");
  var loansHTML = document.getElementById("loans");
  var loans = [];

  searchElement.addEventListener("keyup", (event) => {
    var attribute = select.value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let params = {
      method: "POST",
      body: JSON.stringify(searchElement.value),
      headers: myHeaders,
    };
    if (attribute === "loan-number") {
      fetch("http://localhost:3000/data/loanNumber", params)
        .then((response) => response.json())
        .then((data) => (loans = data))
        .then(() => addHTML());
    } else if (attribute === "first-name") {
      fetch("http://localhost:3000/data/firstName", params)
        .then((response) => response.json())
        .then((data) => (loans = data))
        .then(() => addHTML());
    } else if (attribute === "last-name") {
      fetch("http://localhost:3000/data/lastName", params)
        .then((response) => response.json())
        .then((data) => (loans = data))
        .then(() => addHTML());
    } else {
      fetch("http://localhost:3000/data/city", params)
        .then((response) => response.json())
        .then((data) => (loans = data))
        .then(() => addHTML());
    }
  });

  function addHTML() {
    let html = "";
    if (loans) {
      loans.forEach((l) => {
        const toAdd = `<div class="border-outer ma-10"><div class="d-flex align-center">
      <div class="d-flex mr-5 border">
        <h3>Loan Number: </h3>
        <h3>${l.loan_number}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>First Name: </h3>
        <h3>${l.first_name}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>Last Name: </h3>
        <h3>${l.last_name}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>State: </h3>
        <h3>${l.state}</h3>
      </div>
      <div><button id="seeAll${l.id}" onclick="onSeeAll(${l.id})">See All</button></div>
    </div>
    <div class="d-flex align-center d-none" id="changeDisplay${l.id}">
      <div class="d-flex mr-5 border">
        <h3>Id: </h3>
        <h3>${l.id}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>Email: </h3>
        <h3>${l.email}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>Address: </h3>
        <h3>${l.address}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>City: </h3>
        <h3>${l.city}</h3>
      </div>
      <div class="d-flex mr-5 border">
        <h3>Zip: </h3>
        <h3>${l.zip}</h3>
      </div>
    </div></div>`;
        html += toAdd;
      });
    }
    loansHTML.innerHTML = html;
    return;
  }
  function onSeeAll(id) {
    console.log(id);
    let display = document.getElementById(`changeDisplay${id}`).style.display;
    if (display === "block") {
      document.getElementById(`changeDisplay${id}`).style.display = "none";
      document.getElementById(`seeAll${id}`).innerHTML = "See All";
    } else {
      document.getElementById(`changeDisplay${id}`).style.display = "block";
      document.getElementById(`seeAll${id}`).innerHTML = "See Less";
    }
  }
  window.onSeeAll = onSeeAll;
};
