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

// Variabel global untuk melacak jumlah klik dengan kata-kata kasar
let badWordClickCount = 0;

function copyData() {
  const judulKomik = document.getElementById("judulKomik").value.trim();
  const chapterKomik = document.getElementById("chapterKomik").value.trim();
  const judulSitus = document.getElementById("judulSitusInput").value.trim();
  const note = document.getElementById("noteInput").value.trim();

  // Cek apakah judul komik dan chapter komik diisi
  if (!judulKomik && !chapterKomik && !judulSitus && !note) {
    showInfoBox("Semua Inputnya diisi tod!!.");
    return;
  }
  if (!judulKomik) {
    showInfoBox("Nama Komik harus diisi yaa!!.");
    return;
  }
  if (!chapterKomik) {
    showInfoBox("Chapter harus diisi yaa!!.");
    return;
  }
  if (chapterKomik < 0) {
    showInfoBox("Chapter tidak boleh bernilai negatif!!.");
    return false;
  }
  if (!judulSitus) {
    showInfoBox("Situs harus diisi yaa!!.");
    return;
  }

  // // Daftar kata-kata kasar yang ingin dicegah
  // const forbiddenWords = [
  //   "anjing",
  //   "kontol",
  //   "memek",
  //   "ajg",
  //   "tai",
  //   "jembut",
  //   "babi",
  //   "jancok",
  //   "jancuk",
  //   "ngentot",
  //   "bajingan",
  // ]; // Ganti dengan kata-kata yang ingin kamu cegah

  // // Cek apakah input note mengandung kata-kata kasar
  // const containsForbiddenWords = forbiddenWords.some((word) =>
  //   note.toLowerCase().includes(word)
  // );

  // if (containsForbiddenWords) {
  //   badWordClickCount++; // Increment counter when bad words are found

  //   if (badWordClickCount >= 4) {
  //     // If bad words are found for the 4th time, copy a warning message
  //     navigator.clipboard
  //       .writeText("HARAP SOPAN DALAM BERSOSIAL!!")
  //       .then(function () {
  //         showInfoBox("Data Komik berhasil disalin! ><");
  //         badWordClickCount = 0; // Reset the counter after warning message
  //       })
  //       .catch(function (err) {
  //         showInfoBox("...");
  //         console.error("...", err);
  //       });
  //   } else {
  //     showInfoBox("Tidak boleh berkata kasar yaa!, Nanti ke Banned lohh..");
  //   }

  //   return; // Exit function if bad words are detected
  // }

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
