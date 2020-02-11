const weather = new Weather;
const ui= new UI;

weather.getUserData()
.then(data => {
    console.log(data.weatherInfo);
    ui.showData(data.weatherInfo);
})
