const cityName = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
// const datahide = document.getElementById("data_hide");

const backgroundVideo = document.getElementById("backgroundVideo");
// const Source = document.getElementById("Source");

const GetTnfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    // city_name.innerText = `Oops! City didn't found`;
    city_name.innerText = `Oops! Are Naam toh Do !`;
    datahide.classList.add("data_hide");
    // Set default video source when city value is empty
        backgroundVideo.src = "images/default.mp4";
        backgroundVideo.load();
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5b719365897bfc7643398c99c53d92cc`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;

      const tempMod = arrData[0].weather[0].main;

      const setVideoSource = (tempMod) => {
        const videoSources = {
          Clear: "images/clear.mp4",
          Clouds: "images/cloudy.mp4",
          Rain: "images/rain.mp4",
          Smoke: "images/smoke.mp4",
          Fog: "images/fog.mp4",
          Thunderstorm: "images/thunder.mp4",
          Snow: "images/snow.mp4",
          Drizzle: "images/drizzle.mp4",
          Haze: "images/haze.mp4",
          Mist: "images/mist.mp4",
          Sleet: "images/sleet.mp4",
          Tornado: "images/tornado.mp4",
          Dust: "images/dust.mp4",
          Sand: "images/sand.mp4",
          Ash: "images/ash.mp4",
          Squall: "images/squall.mp4",
          Blizzard: "images/blizzard.mp4",
          // Add more conditions as needed
        };

        if (videoSources[tempMod]) {
          backgroundVideo.src = videoSources[tempMod];
        } else {
          backgroundVideo.src = "images/default.mp4";
        }

        backgroundVideo.load();
      };

      const setWeatherIcon = (tempMod) => {
        const iconMap = {
          Clear: "<i class='fa-solid fa-sun'></i>",
          Clouds: "<i class='fa-solid fa-cloud' style='color: green;'></i>",
          Rain: "<i class='fa-solid fa-cloud-rain' style='color: red;'></i>",
          Smoke: "<i class='fa-solid fa-cloud' style='color: orange;'></i>",
          Fog: "<i class='fa-solid fa-smog' style='color: gray;'></i>",
          Thunderstorm:
            "<i class='fa-solid fa-bolt' style='color: purple;'></i>",
          Snow: "<i class='fa-solid fa-snowflake' style='color: white;'></i>",
          Drizzle:
            "<i class='fa-solid fa-cloud-drizzle' style='color: lightblue;'></i>",
          Mist: "<i class='fa-solid fa-cloud-haze' style='color: lightgray;'></i>",
          Haze: "<i class='fa-solid fa-smog' style='color: lightgray;'></i>",
          Sleet:
            "<i class='fa-solid fa-cloud-showers' style='color: darkblue;'></i>",
          Tornado: "<i class='fa-solid fa-wind' style='color: darkred;'></i>",
          Dust: "<i class='fa-solid fa-wind' style='color: sandybrown;'></i>",
          Sand: "<i class='fa-solid fa-wind' style='color: sandybrown;'></i>",
          Ash: "<i class='fa-solid fa-wind' style='color: darkgray;'></i>",
          Squall: "<i class='fa-solid fa-wind' style='color: darkcyan;'></i>",
          Blizzard:
            "<i class='fa-solid fa-snowflake' style='color: royalblue;'></i>",
          // Add more conditions as needed
        };

        if (iconMap[tempMod]) {
          temp_status.innerHTML = iconMap[tempMod];
        } else {
          temp_status.innerHTML = "<i class='fa-solid fa-sun'></i>";
        }
      };

      // Set default video source
      backgroundVideo.src = "images/default.mp4";

      // Call the functions with the current tempMod
      setVideoSource(tempMod);
      setWeatherIcon(tempMod);
      backgroundVideo.addEventListener("ended", function () {
        backgroundVideo.load();
      });

      // Show the previously hidden data
      datahide.classList.remove("data_hide");
    } catch (error) {
      console.error("Error fetching data:", error);
      //   city_name.innerText = `Oops! Something went wrong`;
      city_name.innerText = `Oops! City didn't found`;

      datahide.classList.add("data_hide");
      // Set default video source in case of an error
      backgroundVideo.src = "images/default.mp4";
      backgroundVideo.load();
    }
  }
};


const imageSources = [
    "images/boss-baby-01.png",
    "images/boss-baby-02.png",
    "images/boss-baby-03.png",
    "images/boss-baby-03.png"
  ];

  const imageContainer = document.getElementById("imageContainer");

  // Function to change image every 2 seconds
  let index = 0;
  setInterval(() => {
    // Change the image source
    imageContainer.innerHTML = `<img src="${imageSources[index]}" alt="talib" class="img-fluid" title="talib hassan">`;

    // Move to the next image (loop back to the first image if at the end)
    index = (index + 1) % imageSources.length;
  }, 2000);
submitbtn.addEventListener("click", GetTnfo);
