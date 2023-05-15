export const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}

export const api = {
    key: "4305298fdb93dc812edf91b1c7d04176",
    base: "https://api.openweathermap.org/data/2.5/"
}

