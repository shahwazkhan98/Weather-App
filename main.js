let form = document.querySelector('form')
let body = document.querySelector('body')
let input = document.querySelector('input')
let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h4 = document.querySelector('h4')
let h3 = document.querySelector('h3')
let img = document.querySelector('img')
let container = document.querySelector('#container') 


form.addEventListener("submit" , weatherData)

async function weatherData(e){
    e.preventDefault()

    try{
        const getFetch = await fetch(`https://api.weatherapi.com/v1/current.json?key=b217d1c910c64cc4962103628232802&q=${input.value}&aqi=yes`)
    const getData = await getFetch.json()
    h1.innerText = "Temp : " + getData.current.temp_c 
    h1.style.color = "rgb(7,1,72)"
    h1.style.backgroundColor = "#f2690e"
    h2.innerText = "City :" + getData.location.name
    h2.style.backgroundColor = "white"
    h3.innerText = getData.current.condition.text

    container.style.backgroundImage = "URL("+`https://source.unsplash.com/random/900×700/?${h3.innerText.split(" ")[0]}`+")"
    container.style.backgroundSize = "cover"
    container.style.backgroundRepet = "none"

    console.log("URL("+`https://source.unsplash.com/random/900×700/?${h3.innerText.split(" ")[0]}`+")")
    
    let icon = 'https:' + getData.current.condition.icon
    img.setAttribute("src" , icon)
    h4.innerText = getData.location.localtime
   
    }catch(error){
        window.alert("Enter Valid City Name")
    }





    form.reset()
}