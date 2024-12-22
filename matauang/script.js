document.getElementById("convert").addEventListener("click", async function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const convertedAmountInput = document.getElementById("convertedAmount");

  // Validasi input
  if (isNaN(amount) || amount <= 0) {
    convertedAmountInput.value = "Invalid amount!";
    return;
  }

  // Data nilai tukar fallback (static rates)
  const fallbackRates = {
    IDR: { CNY: 0.00046, JPY: 0.0076, KRW: 0.087, USD: 0.000064, IDR: 1 },
    CNY: { IDR: 2175, JPY: 16.5, KRW: 190, USD: 0.14, CNY: 1 },
    JPY: { IDR: 133, CNY: 0.061, KRW: 11.5, USD: 0.0088, JPY: 1 },
    KRW: { IDR: 11.5, CNY: 0.0053, JPY: 0.087, USD: 0.00077, KRW: 1 },
    USD: { IDR: 15600, CNY: 7.15, JPY: 114, KRW: 1297, USD: 1 },
  };

  try {
    // API URL
    const apiKey = "300cff7f9e3010e3a5afde20"; // Ganti dengan API Key Anda
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    // Fetch data dari API
    const response = await fetch(url);
    const data = await response.json();

    // Gunakan API jika berhasil
    if (data.conversion_result) {
      convertedAmountInput.value = data.conversion_result.toFixed(2);
    } else {
      throw new Error("API gagal mengembalikan data konversi.");
    }
  } catch (error) {
    // Fallback ke nilai tukar static jika API gagal
    const fallbackRate = fallbackRates[fromCurrency]?.[toCurrency];
    if (fallbackRate) {
      const fallbackResult = amount * fallbackRate;
      convertedAmountInput.value = fallbackResult.toFixed(2);
    } else {
      convertedAmountInput.value = "Error in conversion!";
    }
  }
});
