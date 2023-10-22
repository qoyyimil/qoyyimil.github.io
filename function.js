// Form
function validateForm() {
  var nama = document.getElementById("nama-awal");
  var nrp = document.getElementById("nrp");
  var email = document.getElementById("email");

  if (nama.value == "") {
    nama.focus();
    Swal.fire('Nama harus diisi terlebih dahulu');
    return false;
  }


  if (email.value == "") {
    email.focus();
    Swal.fire('Email harus diisi terlebih dahulu');
    return false;
  }

  if (!isValidEmail(email.value)) {
    email.focus();
    Swal.fire('Masukkan email dengan benar');
    return false;
  } 
}

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
// Batas Form