//stockage du code apikey
const APIKEY = 'b7af2d519bd22ddbf37ad0fa8b7d9a4e';

//Creation d'une fonction pour appeler la ville
//Appelle de l'api
let apiCall = function (city) {
    //Appel de la ville
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    //Appel de l'url api
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            //Recuperer la ville et lui dire de mettre le nom de la ville recupéré en data 
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = "<i class='fas fa-temperature-low'></i>" + data.main.temp + '°C';
            document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
        })//On peut faire un catch au cas ou cas ou ca planterais pour recuperer l'erreur
    ).catch((err) => console.log('Erreur :' + err));
};


//Ecouter modification du formulaire
//Selectionner le form, ecouter la soumission du form 
document.querySelector('form').addEventListener('submit', function (e) {
    //casser l'evenement par défault
    e.preventDefault();
    //Recuperer la valeur du texte
    let ville = document.querySelector('#inputCity').value;

    //appel à la ville
    apiCall(ville);
});

//Appel par défault au chargement de la page
apiCall("Strasbourg");