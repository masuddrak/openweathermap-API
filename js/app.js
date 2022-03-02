const apiKey=`ba761b2f05c813c9f1a729e5779622f1`

const searchTemperature=()=>{
    
    const cityName=document.getElementById('city-name')
    const cityNameText=cityName.value
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayProperty(data))
    cityName.value=''
}
const setText=(id,text)=>{
    document.getElementById(id).innerText=text
}
const displayProperty=(data)=>{
    setText('city',data.name)
    setText('temperature',data.main.temp)
    setText('condition',data.weather[0].main)
    const setUrl=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const weatherIcon=document.getElementById('weather-icon')
    weatherIcon.setAttribute('src',setUrl)
    console.log(data.weather[0])
}