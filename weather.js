const input = document.getElementById("searchbar");
const time = document.getElementById("time");
const city_country = document.getElementById("cc");
const temp = document.getElementById("temp");
const w = document.getElementById("w");
const g = document.getElementById("g");
const a = document.getElementById("a");
const button = document.getElementById("search");

let city = input.value;

async function getdata(city_name){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=f9db3448d14b4bbea1b163636242709&q=${city_name}&aqi=yes`
    )
    return await promise.json();
}

button.addEventListener("click", async () => {
    let city = input.value;
    const data = await getdata(city);
    city_country.innerText =`${data.location.name}, ${data.location.country}, ${data.current.condition.text}`;
    temp.innerText = `${data.current.temp_c} °C`;
    w.innerText = `Wind : ${data.current.wind_dir} ${data.current.wind_kph} kph`;
    g.innerText = `Gust : ${data.current.gust_kph} kph`;
    a.innerText = `AQI : ${data.current.air_quality["us-epa-index"]} PM`;
    let loctime = data.location.localtime;
    time.innerText = `${loctime.substring(10,16)}`;

    console.log(data);
})

