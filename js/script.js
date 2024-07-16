let input = document.querySelector("input");
let btn = document.querySelector("button");

let params = {
  country: "United Kingdom",
  city: "London",
};

btn.addEventListener("click", function () {
  if (input.value !== "") {
    params.country = input.value;
  }
  input.value = "";
  getdate();
});

function getdate() {
  axios
    .get("http://api.aladhan.com/v1/timingsByCity", {
      params: params,
    })
    .then(function (response) {
      let timings = response.data.data.timings;
      document.getElementById("fajar").innerHTML = timings.Fajr;
      document.getElementById("shrouk").innerHTML = timings.Sunrise;
      document.getElementById("dohar").innerHTML = timings.Dhuhr;
      document.getElementById("asar").innerHTML = timings.Asr;
      document.getElementById("marab").innerHTML = timings.Maghrib;
      document.getElementById("ehaa").innerHTML = timings.Isha;

      let data = response.data.data.date.readable;
      document.querySelector(".data").innerHTML = data;

      document.querySelector(".city").innerHTML = params.country;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getdate();
