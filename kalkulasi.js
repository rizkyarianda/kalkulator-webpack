const NilaiPertama = document.getElementById("kolomSatu");
const NilaiKedua = document.getElementById("kolomDua");
const tombolSubmit = document.getElementById("tombolSubmit");
const kolomJawaban = document.getElementById("jawaban");
const kolomPeringatan = document.getElementById("peringatan");

const checkNilai = (angka) => {
  const peringatan = document.getElementById("peringatan");
  let setelahDiUbah = ubahKeInteger(angka);
  let kondisiAkhir = setelahDiUbah.every(
    (num) => typeof num === "number" && !isNaN(num)
  );
  return kondisiAkhir;
};

const ubahKeInteger = (angka) => {
  return angka.split("").map((num) => parseInt(num));
};

const checkKebenaranNilai = (value) => {
  return checkNilai(value);
};

const handleClick = () => {
  kolomJawaban.innerHTML = "";
  kolomPeringatan.innerHTML = "";
  let isiDariNilaiPertama = NilaiPertama.value;
  let isiDariNilaiKedua = NilaiKedua.value;
  if (!isiDariNilaiPertama) {
    return alert("Kolom harus diisi");
  }

  if (!isiDariNilaiKedua) {
    return alert("Kolom harus diisi");
  }
  let checkNilaiPertama = checkKebenaranNilai(isiDariNilaiPertama);
  let checkNilaiKedua = checkKebenaranNilai(isiDariNilaiKedua);

  if (checkNilaiPertama && checkNilaiKedua) {
    return (kolomJawaban.innerHTML =
      parseInt(isiDariNilaiPertama) + parseInt(isiDariNilaiKedua));
  } else if (!checkNilaiPertama && !checkNilaiKedua) {
    return (kolomPeringatan.innerHTML = `Kolom yang berisi nilai ${isiDariNilaiPertama} dan kolom yang berisi nilai ${isiDariNilaiKedua} harus berupa angka saja!`);
  } else if (!checkNilaiPertama && checkNilaiKedua) {
    return (kolomPeringatan.innerHTML = `Kolom yang berisi nilai ${isiDariNilaiPertama} harus berupa angka saja!`);
  } else {
    return (kolomPeringatan.innerHTML = `Kolom yang berisi nilai ${isiDariNilaiKedua} harus berupa angka saja!`);
  }
};
