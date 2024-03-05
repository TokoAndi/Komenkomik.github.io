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

// ... (kode lainnya tetap sama)

function copyData() {
  const judulKomik = document.getElementById("judulKomik").value;
  const chapterKomik = document.getElementById("chapterKomik").value;
  const judulSitus = document.getElementById("judulSitusInput").value;

  const copiedData = `Done!!! ✔️\n${judulKomik} 🏷️\nChapter ${chapterKomik} 📚\nSitus ${judulSitus} 🔗\n${
    document.getElementById("timestamp").textContent
  }\nhttps://uploads.disquscdn.com/images/7670b49c1158dc38d497a92e6b94313e3d50b21d5bdae4462b60b01944a318cf.gif `;

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
