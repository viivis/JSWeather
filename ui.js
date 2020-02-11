class UI{
    constructor(){
        this.weatherprofile = document.getElementById('weatherinf');
    }
    showData(userData){
            
        this.weatherprofile.innerHTML= `
        <div class="col-md-9">
        <div class="row">
         
                <h3 class="font-weight-bold text-info">${userData.timezone}</h3>
            
                <ul class="list-group">
                    <li class="list-group-item">${userData.currently.summary}</li>
                    <li class="list-group-item">Current temperature: ${((userData.currently.temperature- 32)/1.8).toFixed(2)} °C </li>
                    <li class="list-group-item">Wind speed: ${userData.currently.windSpeed} m/s </li>
                </ul>
                   
            </div>
        
        
        
        `
    }
    
}
