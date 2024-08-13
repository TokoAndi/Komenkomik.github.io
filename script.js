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

function showInfoBox(message) {
  const infoBox = document.getElementById("infoBox");
  const infoText = document.getElementById("infoText");
  infoText.textContent = message;
  infoBox.style.display = "flex";

  // Auto-hide after 3 seconds
  setTimeout(() => {
    infoBox.style.display = "none";
  }, 3000);
}

function copyData() {
  const judulKomik = document.getElementById("judulKomik").value.trim();
  const chapterKomik = document.getElementById("chapterKomik").value.trim();
  const judulSitus = document.getElementById("judulSitusInput").value.trim();
  const note = document.getElementById("noteInput").value.trim();

  // Cek apakah judul komik dan chapter komik diisi
  if (!chapterKomik) {
    showInfoBox("Chapter harus diisi yaa!!.");
    return;
  }
  if (!judulKomik) {
    showInfoBox("Nama Komik harus diisi yaa!!.");
    return;
  }

  // Buat template untuk data yang akan dicopy
  let copiedData = `Done!!! ✔️\n╰┈➤ ${judulKomik} 🏷️\n╰┈➤ Chapter ${chapterKomik} 📚\n╰┈➤ Situs ${judulSitus} 🔗\n`;

  // Tambahkan komentar jika ada isinya
  if (note !== "") {
    copiedData += `╰┈➤ Komentar: ${note}\n`;
  }

  // Tambahkan timestamp setelah komentar
  copiedData += `${document.getElementById("timestamp").textContent}\n`;

  navigator.clipboard
    .writeText(copiedData)
    .then(function () {
      showInfoBox("Data Komik berhasil disalin! ><");
    })
    .catch(function (err) {
      showInfoBox("Gagal menyalin data: Terjadi kesalahan saat menyalin.");
      console.error("Gagal menyalin data: ", err);
    });
}

// Event listener untuk tombol close info box
document.getElementById("infoClose").addEventListener("click", () => {
  document.getElementById("infoBox").style.display = "none";
});

// Update timestamp on page load
updateTimestamp();

// Update timestamp every second (1000 milliseconds)
setInterval(updateTimestamp, 500);

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
