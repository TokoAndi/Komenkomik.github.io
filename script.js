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

  const copiedData = `Done!!! ✔️\n╰┈➤ ${judulKomik} 🏷️\n╰┈➤ Chapter ${chapterKomik} 📚\n╰┈➤ Situs ${judulSitus} 🔗\n╰┈➤ Komentar: ${note}\n${document.getElementById("timestamp").textContent}\n`;

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

// Update timestamp every second
setInterval(updateTimestamp, 1);

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
