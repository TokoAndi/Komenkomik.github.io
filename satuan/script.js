// Daftar konversi satuan panjang
const conversionRates = {
  Chi: {
    Chi: 1,
    Cun: 10,
    Zhang: 0.1,
    Li: 0.0005,
    Cheok: 1.1,
    Pyeong: 0.3025,
    Ri: 0.0001,
    Ganjung: 0.05,
    Meter: 0.333,
    Cm: 33.3,
    Kilometer: 0.000333,
    Mil: 0.000207,
  },
  Cun: {
    Chi: 0.1,
    Cun: 1,
    Zhang: 0.01,
    Li: 0.00005,
    Cheok: 0.11,
    Pyeong: 0.03025,
    Ri: 0.00001,
    Ganjung: 0.005,
    Meter: 0.0333,
    Cm: 3.33,
    Kilometer: 0.0000333,
    Mil: 0.0000207,
  },
  Zhang: {
    Chi: 10,
    Cun: 100,
    Zhang: 1,
    Li: 0.005,
    Cheok: 11,
    Pyeong: 3.025,
    Ri: 0.001,
    Ganjung: 0.5,
    Meter: 3.33,
    Cm: 333,
    Kilometer: 0.00333,
    Mil: 0.00207,
  },
  Li: {
    Chi: 2000,
    Cun: 20000,
    Zhang: 200,
    Li: 1,
    Cheok: 2200,
    Pyeong: 605,
    Ri: 0.2,
    Ganjung: 100,
    Meter: 666.6,
    Cm: 66660,
    Kilometer: 0.6666,
    Mil: 0.4149,
  },
  Cheok: {
    Chi: 0.909,
    Cun: 9.09,
    Zhang: 0.0909,
    Li: 0.0004545,
    Cheok: 1,
    Pyeong: 0.275,
    Ri: 0.00009,
    Ganjung: 0.045,
    Meter: 0.303,
    Cm: 30.3,
    Kilometer: 0.000303,
    Mil: 0.000188,
  },
  Pyeong: {
    Chi: 3.305,
    Cun: 33.05,
    Zhang: 0.3305,
    Li: 0.00165,
    Cheok: 3.63,
    Pyeong: 1,
    Ri: 0.00033,
    Ganjung: 0.165,
    Meter: 3.305,
    Cm: 330.5,
    Kilometer: 0.003305,
    Mil: 0.002054,
  },
  Meter: {
    Chi: 3.003,
    Cun: 30.03,
    Zhang: 0.3,
    Li: 0.0015,
    Cheok: 3.303,
    Pyeong: 1,
    Ri: 0.001,
    Ganjung: 0.5,
    Meter: 1,
    Cm: 100,
    Kilometer: 0.001,
    Mil: 0.000621,
  },
  Cm: {
    Chi: 0.0303,
    Cun: 0.303,
    Zhang: 0.003,
    Li: 0.000015,
    Cheok: 0.3303,
    Pyeong: 0.01,
    Ri: 0.00001,
    Ganjung: 0.005,
    Meter: 0.01,
    Cm: 1,
    Kilometer: 0.00001,
    Mil: 0.00000621,
  },
  Kilometer: {
    Chi: 3003,
    Cun: 30030,
    Zhang: 30.03,
    Li: 1.5,
    Cheok: 3303,
    Pyeong: 1000,
    Ri: 1,
    Ganjung: 500,
    Meter: 1000,
    Cm: 100000,
    Kilometer: 1,
    Mil: 0.621,
  },
  Mil: {
    Chi: 4828,
    Cun: 48280,
    Zhang: 48.28,
    Li: 2.414,
    Cheok: 5300,
    Pyeong: 1485,
    Ri: 1.6,
    Ganjung: 800,
    Meter: 1609,
    Cm: 160934,
    Kilometer: 1.609,
    Mil: 1,
  },
};

// Unit dropdown options
const units = [
  "Chi",
  "Cun",
  "Zhang",
  "Li",
  "Cheok",
  "Pyeong",
  "Meter",
  "Cm",
  "Kilometer",
  "Mil",
];
// Ambil elemen tombol dan input
const leftDropdown = document.getElementById("left-dropdown");
const rightDropdown = document.getElementById("right-dropdown");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const leftInput = document.getElementById("left-input");
const rightInput = document.getElementById("right-input");

// Fungsi update dropdown untuk memasukkan semua unit
function createDropdownOptions(dropdown, button, otherButton) {
  dropdown.innerHTML = "";
  units.forEach((unit) => {
    const option = document.createElement("button");
    option.textContent = unit;
    option.onclick = () => {
      button.textContent = unit;
      calculateConversion();
      if (button === leftBtn) updateRightDropdown(otherButton);
      hideDropdown(dropdown); // Sembunyikan dropdown setelah memilih unit
    };
    dropdown.appendChild(option);
  });
}

// Fungsi untuk menampilkan atau menyembunyikan dropdown
function toggleDropdown(dropdown) {
  const isVisible = dropdown.style.display === "block";
  dropdown.style.display = isVisible ? "none" : "block";
}

// Fungsi untuk menyembunyikan dropdown
function hideDropdown(dropdown) {
  dropdown.style.display = "none";
}

// Event listener untuk tombol kiri
leftBtn.addEventListener("click", () => {
  toggleDropdown(leftDropdown);
  hideDropdown(rightDropdown); // Pastikan dropdown kanan tersembunyi
});

// Event listener untuk tombol kanan
rightBtn.addEventListener("click", () => {
  toggleDropdown(rightDropdown);
  hideDropdown(leftDropdown); // Pastikan dropdown kiri tersembunyi
});

// Fungsi update dropdown kanan saat tombol kiri berubah
function updateRightDropdown(button) {
  createDropdownOptions(rightDropdown, button, leftBtn);
}

function calculateConversion() {
  const leftUnit = leftBtn.textContent;
  const rightUnit = rightBtn.textContent;
  const value = parseFloat(leftInput.value);

  if (!units.includes(leftUnit) || !units.includes(rightUnit)) {
    rightInput.value = "Pilih unit yang valid!";
    return;
  }

  if (
    !isNaN(value) &&
    conversionRates[leftUnit] &&
    conversionRates[leftUnit][rightUnit]
  ) {
    const result = value * conversionRates[leftUnit][rightUnit];
    rightInput.value = result.toFixed(4);
  } else {
    rightInput.value = "";
  }
}

// Event listener input kiri
leftInput.addEventListener("input", calculateConversion);

// Inisialisasi dropdown
createDropdownOptions(leftDropdown, leftBtn, rightBtn);
createDropdownOptions(rightDropdown, rightBtn, leftBtn);

leftInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9.]/g, "").replace(/^0+(?!\.)/, "");
  calculateConversion();
});
