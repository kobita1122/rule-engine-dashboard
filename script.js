const rules = [
  { name: "High Usage", condition: "usage > 80%", result: false },
  { name: "Payment Due", condition: "invoice overdue", result: false },
  { name: "Quota Exceeded", condition: "limit reached", result: false }
];

const tbody = document.getElementById("rules");

function render() {
  tbody.innerHTML = "";
  rules.forEach(r => {
    tbody.innerHTML += `
      <tr>
        <td>${r.name}</td>
        <td>${r.condition}</td>
        <td class="${r.result ? "true" : "false"}">
          ${r.result ? "TRUE" : "FALSE"}
        </td>
      </tr>
    `;
  });
}

function run() {
  rules.forEach(r => {
    r.result = Math.random() > 0.5;
  });
  render();
}

render();
