const studenti = [
  { ime: `Pero`, prosek: 6.5, grad: `Berovo` },
  { ime: `Mitre`, prosek: 8.2, grad: `Veles` },
  { ime: `Toso`, prosek: 7.1, grad: `Gostivar` },
  { ime: `Riste`, prosek: 5.1, grad: `Veles` },
  { ime: `Jana`, prosek: 10, grad: `Skopje` },
  { ime: `Stojna`, prosek: 8.1, grad: `Mavrovo` },
];

const totalAvarage = studenti.reduce(
  (sum, student) => sum + student.prosek,
  0) / studenti.length
;
console.log(`Vkupniot prosek na site studenti e: ${totalAvarage.toFixed(2)}`);

const filterStudents = studenti.filter((student) => student.ime.length <= 4);
console.log(`Studenti so iminja pomali ili ednakvi do 4 bukvi`, filterStudents);

const velesStudents = studenti.filter((student) => student.grad === `Veles`);
console.log(`Studenti od Veles:`, velesStudents);

function horoskop(mesec) {
  const znaci = {
    januari: "Vodolija",
    februari: "Ribi",
    mart: "Oven",
    april: "Bik",
    maj: "Bliznaci",
    juni: "Rak",
    juli: "Lav",
    avgust: "Devica",
    septemvri: "Vaga",
    oktomvri: "Skorpija",
    noemvri: "Strelec",
    dekemvri: "Jarec",
  };
  return znaci[mesec.toLowerCase()] || "Nepoznat mesec";
}
console.log(horoskop("Januari"));
console.log(horoskop("Noemvri"));

function plostinaNaPravoagolnik(dolzina, sirina) {
  return dolzina * sirina;
}

console.log(`Plostinata e:${plostinaNaPravoagolnik(5, 10)}`);

function perimetarNaPravoagolnik(dolzina, sirina) {
  return 2 * (dolzina + sirina);
}
console.log(`Perimetarot e:${perimetarNaPravoagolnik(10, 20)}`);
