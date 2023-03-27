var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  console.log(this);
  if (this == incrementEl) {
    count++;
    countEl.textContent = count;
  } else {
    if (0 < count) {
      count--;
      countEl.textContent = count;
    }
  }
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", setCounterText);
decrementEl.addEventListener("click", setCounterText);
// TODO: Add event listener to decrement button
