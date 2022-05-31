const chk = document.getElementById("chk");
const title = document.getElementById("texto");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  title.classList.toggle("light");
  // document.getElementById("texto").classList.toggle("colorWhite", e.target.checked);
  // title.style.color = ("white");
});

function teste(value) {
  if (value == "sobre") {
      sobre.classList.toggle("testeDeCor");
    console.log("mudei");
  } else if (value == "funciona") {
    funciona.classList.toggle("testeDeCor");
  } else if (value == "projetos") projetos.classList.toggle("testeDeCor");
  
  return;
}
