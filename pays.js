// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var inputElt = document.getElementById("pays");
var suggestionsElt = document.getElementById("suggestions");

inputElt.addEventListener("input", function() {
    suggestionsElt.innerHTML = "";
    listePays.forEach(function(pays) {
        if (pays.toLowerCase().indexOf(inputElt.value) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.textContent = pays;
            suggestionElt.classList.add("suggestion");
            suggestionElt.addEventListener("click", function(e) {
                inputElt.value = e.target.textContent;
                suggestionsElt.innerHTML = "";
            });

            suggestionsElt.appendChild(suggestionElt); 
        }
        
    });
});