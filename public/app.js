window.addEventListener('load',()=>{
    let lon
    let lat
    let localtimezone = document.querySelector('.description');
    let tempdegree = document.querySelector('.temperature-degree');
    let location = document.querySelector('.location-timezone')
    let icon = document.querySelector('#icon')
    let degunit = document.querySelector('#degunit')
    let unit = document.querySelector('.units')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db0c506f231a2df2c7b7950ac8221edc`

            fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    console.log(data)
                    const { temp } = data.main
                    const name = data.name
                    const val = (data.weather)[0].main
                    tempdegree.textContent = Math.round(temp-273)
                    location.textContent = name
                    localtimezone.textContent = val
                    icon.src = `http://openweathermap.org/img/wn/${(data.weather)[0].icon}@2x.png`
                    unit.addEventListener('click',()=>{
                        if(degunit.textContent=='C'){
                            var tem = ((9*(Math.round(temp-273)))/5) + 32
                            tempdegree.textContent = Math.round(tem)
                            degunit.textContent = 'F'
                        } else {
                            tempdegree.textContent = Math.round(temp-273)
                            degunit.textContent = 'C'
                        }

                    })
                })
        })
    }

})
