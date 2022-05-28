const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
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
