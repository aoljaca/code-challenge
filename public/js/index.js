window.onload = function () {
  var searchElement = document.getElementById("search");
  var select = document.getElementById("attribute");
  var loansHTML = document.getElementById("loans");
  var loans = [];

  searchElement.addEventListener("keydown", (event) => {
    var attribute = select.value;
    if (attribute === "loan-number") {
      fetch("http://localhost:3000/loanNumber", searchElement.value)
        .then((response) => response.json())
        .then((data) => (loans = data));
    } else if (attribute === "first-name") {
      fetch("http://localhost:3000/firstName", searchElement.value)
        .then((response) => response.json())
        .then((data) => (loans = data));
    } else if (attribute === "last-name") {
      fetch("http://localhost:3000/lastName", searchElement.value)
        .then((response) => response.json())
        .then((data) => (loans = data));
    } else {
      fetch("http://localhost:3000/city", searchElement.value)
        .then((response) => response.json())
        .then((data) => (loans = data));
    }
    const html = '';
    loans.forEach((loan) => {
      const toAdd = `<div>
      <div class="d-flex">
        <h3>Loan Number:</h3>
        <h3>{l.loan_number}</h3>
      </div>
      <div class="d-flex">
        <h3>First Name:</h3>
        <h3>{l.first_name}</h3>
      </div>
      <div class="d-flex">
        <h3>Last Name:</h3>
        <h3>{l.last_name}</h3>
      </div>
      <div class="d-flex">
        <h3>City:</h3>
        <h3>{l.city}</h3>
      </div>
    </div>`;
    html += toAdd;
    });
    loansHTML = html;
    return;
  });
};
