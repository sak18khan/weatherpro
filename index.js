
let weather ={
  fetchapi:function(city){
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0d6ed68d5d4e46d8651967785f0ebfbb&units=metric")
.then(response=> response.json())
.then(data=>this.displayweather(data))
},

displayweather:function(data){
  const{name}=data;
  const description=data.weather[0].description;
  const{temp}=data.main;
  const windspeedd=data.wind.speed;
  document.querySelector(".description").innerHTML="weather description : "+description;
  document.querySelector(".temp").innerHTML="temperature : "+ temp + "°C";
  document.querySelector("h1").innerHTML="weather in " + name;

  document.querySelector(".title").innerHTML="weather in " + name;
  document.querySelector("#windspeed").innerHTML="windspeed : "+ windspeedd +" km/h";
  document.querySelector(".dumytext").innerHTML="";

},
search: function(){
  this.fetchapi(document.querySelector(".inputsearch").value);
},
};
document.querySelector("button").addEventListener("click",function(){
  weather.search();
});
document.querySelector(".inputsearch").addEventListener("keyup",function(event){
  if (event.key=="Enter"){
    weather.search();

  }
});
const d= new Date();
document.querySelector(".dt").innerHTML="Its  "+d;
