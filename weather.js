// api keys 
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f` 
const form = document.querySelector('form');
const search = document.querySelector('#search')
const weather = document.querySelector('#weather');

//const API =`https://.api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric` //api

//const IMG_URL = `https: // openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`// img url 


const getWeather= async(city)=>{
    weather.innerHTML=`<h2> Loading...</h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    console.log(response);
    const data = await response.json() // api will give lots of data but to get in the format
      return showWeather(data)
}

const showWeather = (data)=>{

    if(data.cod=="404")
{
    weather.innerHTML= `<h2> CITY NOT FOUND</h2>`
    return;
}   
 weather.innerHTML=`
    <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="cloud image" height="100px" width="100px">
            </div>
            <div>
                <h2>${data.main.temp}°C </h2>
                <h4> ${data.weather[0].main}</h4>
            </div>
            
    
    `
    


}
form.addEventListener(
    "submit",                                                                   // function to take the input and stop
    function (event){
        getWeather(search.value)
        event.preventDefault();
    }
)

