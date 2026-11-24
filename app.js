let ecran = document.getElementById("ecran");

function ajouter(val) {
  ecran.value += val;
}
function effacer() {
  ecran.value = "";
}
function supprimer() {
  ecran.value = ecran.value.slice(0, -1);
}
function calculer() {
  try {
    ecran.value = eval(ecran.value);
  } catch {
    ecran.value = "Erreur";
  }
}