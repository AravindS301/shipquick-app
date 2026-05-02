const backendURL = "http://localhost:5000";

function getOrders() {
  fetch(`${backendURL}/orders`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
    });
}

function getTracking() {
  fetch(`${backendURL}/tracking`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
    });
}
