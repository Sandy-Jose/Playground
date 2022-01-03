const url =
  "http://api.weatherapi.com/v1/current.json?key=d36d5b8e64aa40578e440128213011&q=Kollam";

let temp = document.getElementById("temperature-temp");
let feelslike = document.getElementById("feels-like");
let cdn = document.getElementById("cdn");
let locname = document.getElementById("loc-name");
let locregion = document.getElementById("loc-region");
let loccountry = document.getElementById("loc-country");
let datedate = document.getElementById("date-date");
let datetime = document.getElementById("date-time");

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let location = data.location;
    let current = data.current;
    let condition = data.current.condition;
    temp.innerText = current.temp_c;
    feelslike.innerText = current.feelslike_c;
    cdn.innerText = condition.text;
    locname.innerText = location.name;
    locregion.innerText = location.region;
    loccountry.innerText = location.country;
    let date = location.localtime;
    datedate.innerText = date.split(" ")[0];
    datetime.innerText = date.split(" ")[1];

    // console.log(location);
    // console.log(current);
  })
  .catch((error) => {
    console.error("FETCH ERROR", error);
  });
