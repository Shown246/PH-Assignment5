window.onload = function(){ 
  const inp = document.querySelectorAll("input");
  for (const i of inp) {
    i.value = '';
  }
}

let count = 0;
const buttons = document.querySelectorAll(".seat");
const b = document.getElementById("couponBTN");
const nb = document.getElementById("next");
const num = document.getElementById("num");
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
      btn.classList.toggle("seat-btn-style");
      btn.classList.toggle("booked-btn-style");
      removeSeat(e.target.innerText);
      count--;
    } else if (count < 4) {
      btn.classList.add("selected");
      btn.classList.toggle("seat-btn-style");
      btn.classList.toggle("booked-btn-style");
      seatDetails(e.target.innerText);
      count++;
    }
    if (count === 4) {
      b.classList.remove("btn", "btn-disabled");
      b.classList.add("green-btn-style");
    } else{
      b.classList.add("btn", "btn-disabled");
      b.classList.remove("green-btn-style");
    }
    nextButtonValidation();

    document.getElementById("availability").innerText = 40 - count;
    document.getElementById("booked").innerText = count;
    document.getElementById("total").innerText = count * 550;
    document.getElementById("grand").innerText = count * 550;
  });
}
num.addEventListener("input" , nextButtonValidation);

nb.addEventListener("click" , () => {
  my_modal_1.showModal();
});

function nextButtonValidation() {
  if (count > 0 && !isNaN(num.value) && num.value.length === 11) {
    nb.classList.remove("btn", "btn-disabled");
    nb.classList.add("green-btn-style");
  } else{
    nb.classList.add("btn", "btn-disabled");
    nb.classList.remove("green-btn-style");
  }
}

function seatDetails(seatNumber) {
  const d = document.createElement("div");
  d.classList.add("flex", "justify-between", "mb-3");
  const p1 = document.createElement("p");
  p1.classList.add("opacity-65", "seatNumber");
  p1.innerText = seatNumber;
  d.appendChild(p1);
  const p2 = document.createElement("p");
  p2.classList.add("opacity-65");
  p2.innerText = "Economy";
  d.appendChild(p2);
  const p3 = document.createElement("p");
  p3.classList.add("opacity-65");
  p3.innerText = "550";
  d.appendChild(p3);
  document.getElementById("seat-detail").appendChild(d);
}

function removeSeat(seatNumber) {
  const seats = document
    .getElementById("seat-detail")
    .querySelectorAll(".flex");
  for (const seat of seats) {
    const p = seat.querySelector("p");
    if (p.innerText === seatNumber) {
      seat.parentNode.removeChild(seat);
    }
  }
}
b.addEventListener("click", () => {
  const val = document.getElementById("coupon").value;
  if (val === "NEW15" || val === "Couple 20") {
    applyCoupon(val);
  } else {
    alert("Invalid Coupon!");
  }
});

function applyCoupon(val) {
  switch (val) {
    case "NEW15":
      document.getElementById("grand").innerText = 1870;
      document.getElementById("disPer").innerText = 15;
      document.getElementById("disAmm").innerText = 330;
      break;
    case "Couple 20":
      document.getElementById("grand").innerText = 1760;
      document.getElementById("disPer").innerText = 20;
      document.getElementById("disAmm").innerText = 440;
      break;
    default:
      break;
  }
  const d = document.getElementById("couponDiv");
  const dis = document.getElementById("discountDiv");
  d.classList.remove("flex");
  d.classList.add("hidden");
  dis.classList.remove("hidden");
  dis.classList.add("flex");
}
