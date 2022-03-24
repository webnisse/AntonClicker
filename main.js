let count = parseInt(localStorage.getItem("count") || 1000) ;
let adding = parseInt(localStorage.getItem("adding") || 10);
let clicks =  parseInt(localStorage.getItem("clicks")|| 0)
let autoClick =  parseInt(localStorage.getItem("autoClick") || 0)
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

/* ____________________________________________________________ */

document.querySelector(".counter").innerText = count;

for (let i = 0; i < autoClick; i++) {
  setInterval(timeUpdate, 1000);
}

for (let i = 0; i < inventory.length; i++) {
  const item = inventory[i];
  document.querySelector('.' + item).classList.remove("unavailable");
}

/* ____________________________________________________________ */

document.querySelector(".clicker").addEventListener("click", () => {
  count =  count + adding;
  uppadd();
  uppcou();
});

document.querySelector(".autoClick").addEventListener("click", () => {
  if (count >= 100) {
    count -= 100;
    uppcou();

    setInterval(timeUpdate, 1000);

    autoClick++;
    localStorage.setItem("autoClick", autoClick);
  }
});

document.querySelector(".buyAutoClick").addEventListener("click", () => {
  if (count >= 250000) {
    count -= 250000;
    uppcou();

    document.querySelector('.autoClick').classList.remove("unavailable");
    inventory.push("autoClick");
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }
});

/* ____________________________________________________________ */

function timeUpdate() {
  count++;
  uppcou();
}

function uppcou() {
  localStorage.setItem("count", count);
  document.querySelector(".counter").innerText = count;
}

function uppadd() {
  clicks++;
  localStorage.setItem("clicks", clicks);

  if (clicks % 5 == 0) {
    adding = Math.round(adding * 1.25);
    localStorage.setItem("adding", adding);
  }
}