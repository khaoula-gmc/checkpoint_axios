/*import axios*/

const axios=require('axios')

/*define GET requests*/
const reqTunisWeather=axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=b195bf621e614841d320e666110f5fcd')
const reqBizerteWeather=axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bizerte&appid=b195bf621e614841d320e666110f5fcd')
const reqSousseWeather=axios.get('https://api.openweathermap.org/data/2.5/weather?q=Sousse&appid=b195bf621e614841d320e666110f5fcd')
const reqJendoubaWeather=axios.get('https://api.openweathermap.org/data/2.5/weather?q=Jendouba&appid=b195bf621e614841d320e666110f5fcd')
const reqFranceWeather=axios.get('https://api.openweathermap.org/data/2.5/weather?q=France&appid=b195bf621e614841d320e666110f5fcd')

/*retrieve data*/
axios
.all([reqTunisWeather,reqBizerteWeather,reqSousseWeather,reqJendoubaWeather,reqFranceWeather])
.then(axios.spread((tunisWeather,bizerteWeather,SousseWeather,JendoubaWeather,FranceWeather)=>{
    console.log(tunisWeather.data)
    console.log(bizerteWeather.data)
    console.log(SousseWeather.data)
    console.log(JendoubaWeather.data)
    console.log(FranceWeather.data)
}))
.catch((err)=>console.error(err))