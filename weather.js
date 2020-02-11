class Weather {
    constructor(){
       
        this.client_secret = "18d2d327544ac5b4939f3a37976ba7e4";
        this.url ="https://api.darksky.net/forecast/";
        this.coord1 = "59.4370";
        this.coord2= "24.7536";
    }
       
    //method to get user data from github api
   async getUserData(){

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    let urlProfile= `${proxyUrl}${this.url}${this.client_secret}/${this.coord1},${this.coord2}`;

   const profileResponse= await fetch(urlProfile);
       
   //wait for response and parse to json
    const weatherInfo= await profileResponse.json();
    

    return{

        weatherInfo
            
        }
    }

}