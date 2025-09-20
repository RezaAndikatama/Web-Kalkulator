// Mengambil elemen display dari HTML
const display = document.getElementById("display");

// Fungsi untuk menambahkan nilai (angka atau operator) ke layar
function appendValue(value) {
  display.value += value;
}

// Fungsi untuk membersihkan layar
function clearDisplay() {
  display.value = "";
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  try {
    // eval() digunakan untuk mengevaluasi ekspresi matematika dalam bentuk string
    // Ini cara sederhana, namun perlu hati-hati dalam penggunaan di proyek nyata karena alasan keamanan.
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    // Jika terjadi error (misal: ekspresi tidak valid), tampilkan 'Error'
    display.value = "Error";
  }
}
