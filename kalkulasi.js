const NilaiPertama = document.getElementById("kolomSatu");
const NilaiKedua = document.getElementById("kolomDua");
const tombolSubmit = document.getElementById("tombolSubmit");

const checkNilai = (angka, index) => {
  const peringatan = document.getElementById("peringatan");
  let setelahDiUbah = ubahKeInteger(angka);
  let kondisiAkhir = setelahDiUbah.every(
    (num) => typeof num === "number" && !isNaN(num)
  );
  if (!kondisiAkhir) {
    console.log(index + 1);
    // const pesanPeringatan = `Nilai pada kolom `;
  }
};

const ubahKeInteger = (angka) => {
  return angka.split("").map((num) => parseInt(num));
};

const checkKebenaranNilai = ([...values]) => {
  values.forEach(checkNilai);
  //   console.log(values);
};

const handleClick = () => {
  let isiDariNilaiPertama = NilaiPertama.value;
  let isiDariNilaiKedua = NilaiKedua.value;
  let checkInputKolomSatu = checkKebenaranNilai([
    isiDariNilaiPertama,
    isiDariNilaiKedua,
  ]);
};
