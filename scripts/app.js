const apiKey = '9cd268eb1b95e363e31fb869389b0ec9'

//Appel à l'API Openweather avec ville en paramètre de la fonction
const apiCall = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
        .then((response) => response.json()
            .then((data) => {
                console.log(data);
                document.querySelector('#city').innerHTML = "<i class='fas fa-city'></i>" + data.name
                document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°'
                document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%'
                document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed

            })
            .catch((err) => {
                console.log('Erreur : ' + err);
            })
        );
}

//Ecouteur d'évènement sur le formulaire au moment de la soumission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()

    let inputCity = document.querySelector('#inputCity').value
    console.log(inputCity);
    apiCall(inputCity)
})

//Appel avec ville par défault au chargement de la page
apiCall('Lyon')
