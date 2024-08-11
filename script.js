function updateTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  const currentTimestamp = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const formattedTimestamp = currentTimestamp.toLocaleDateString(
    "id-ID",
    options
  );

  const hours = currentTimestamp.getHours().toString().padStart(2, "0");
  const minutes = currentTimestamp.getMinutes().toString().padStart(2, "0");
  const seconds = currentTimestamp.getSeconds().toString().padStart(2, "0");
  const milliseconds = currentTimestamp
    .getMilliseconds()
    .toString()
    .padStart(3, "0");

  timestampElement.textContent = `${formattedTimestamp} Pukul ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function copyData() {
  const judulKomik = document.getElementById("judulKomik").value;
  const chapterKomik = document.getElementById("chapterKomik").value;
  const judulSitus = document.getElementById("judulSitusInput").value;
  const note = document.getElementById("noteInput").value;

  // Buat template untuk data yang akan dicopy
  let copiedData = `Done!!! ✔️\n╰┈➤ ${judulKomik} 🏷️\n╰┈➤ Chapter ${chapterKomik} 📚\n╰┈➤ Situs ${judulSitus} 🔗\n`;

  // Tambahkan komentar jika ada isinya
  if (note.trim() !== "") {
    copiedData += `╰┈➤ Komentar: ${note}\n`;
  }

  // Tambahkan timestamp setelah komentar
  copiedData += `${document.getElementById("timestamp").textContent}\n`;

  navigator.clipboard
    .writeText(copiedData)
    .then(function () {
      alert("Data Komik berhasil disalin! ><");
    })
    .catch(function (err) {
      console.error("Gagal menyalin data: ", err);
    });
}

// Update timestamp on page load
updateTimestamp();

// Update timestamp every second (1000 milliseconds)
setInterval(updateTimestamp, 100);

// Function from the background project
function randomValues() {
  anime({
    targets: ".square, .circle, .triangle, .oval",
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-300, 300);
    },
    rotate: function () {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.2, 2);
    },
    duration: 1000,
    easing: "easeInOutQuad",
    complete: randomValues,
  });
}

randomValues();

const titles = [
  "Dibuat Oleh:",
  "Andi Dwi K",
  "Dec 11, 2022 Andilaw ID",
  "Auto Komen Keren!!!",
];
let index = 0;

function changeTitle() {
   document.title = titles[index];
   index = (index + 1) % titles.length;
}

// Start changing the title after 5 seconds
setTimeout(() => {
  setInterval(changeTitle, 500);
}, 5000);
