function updateTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  const currentTimestamp = new Date();

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = currentTimestamp.toLocaleDateString("id-ID", options);

  const hours = currentTimestamp.getHours().toString().padStart(2, "0");
  const minutes = currentTimestamp.getMinutes().toString().padStart(2, "0");
  const seconds = currentTimestamp.getSeconds().toString().padStart(2, "0");
  const milliseconds = currentTimestamp
    .getMilliseconds()
    .toString()
    .padStart(3, "0");

  timestampElement.textContent = `${formattedDate} pukul ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// ... (kode lainnya tetap sama)

function copyData() {
  const judulKomik = document.getElementById("judulKomik").value;
  const chapterKomik = document.getElementById("chapterKomik").value;

  const copiedData = `${judulKomik}\nChapter ${chapterKomik}\n${
    document.getElementById("timestamp").textContent
  }`;

  // Copy to clipboard (modern browsers)
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
