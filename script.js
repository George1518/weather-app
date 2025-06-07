const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  let inputbox = document.getElementById("city");
  const apikey = "d4bd02af9d30ba7ac7febd378d11fc50";
  const img = document.getElementById("img");
  const container = document.getElementById("container");
  const outputcontainer = document.getElementById("output-container");
  const info = document.getElementById("info");
  inputbox.style.outline = "none";
  if (!city) {
    inputbox.style.outline = "2px red solid";

    inputbox.style.color = "red";
    img.style.display = "block";
    document.getElementById("output").textContent = "";
    info.innerHTML = "<p> Enter your City !! </p>";

    container.classList.remove(
      "bg-blue-200",
      "bg-cyan-100",
      "bg-yellow-200",
      "bg-orange-200",
      "bg-red-200"
    );
    outputcontainer.classList.remove(
      "bg-blue-100",
      "bg-cyan-100",
      "bg-yellow-100",
      "bg-orange-100",
      "bg-red-100"
    );
    inputbox.classList.remove(
      "bg-blue-100",
      "bg-cyan-100",
      "bg-yellow-100",
      "bg-orange-100",
      "bg-red-100"
    );
    btn.classList.remove(
      "bg-blue-100",
      "bg-cyan-100",
      "bg-yellow-100",
      "bg-orange-100",
      "bg-red-100"
    );

    container.classList.add("bg-gray-100");
    outputcontainer.classList.add("bg-gray-300");
    inputbox.classList.add("bg-gray-100");
    btn.classList.add("bg-gray-100");
  } else {
    img.style.display = "none";
    info.innerHTML = "";
    inputbox.style.outline = "none";
    inputbox.style.color = "black";
    btn.classList.remove("shadow-sm", "shadow-red-400");

    document.getElementById("output").textContent = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("city not found");
        return response.json();
      })
      .then((data) => {
        const name = data.name;
        const temp = data.main.temp;
        const condition = data.weather[0].main;
        let icon = "";
        switch (condition) {
          case "Clear":
            icon = "☀️";
            break;
          case "Clouds":
            icon = "☁️";
            break;
          case "Thunderstorm":
            icon = "⛈️";
            break;
          case "Rain":
            icon = "🌧️";
            break;
          case "Snow":
            icon = "❄️";
            break;
          case "Mist":
          case "Fog":
          case "Haze":
            icon = "🌫️";
            break;
          default:
            icon = "🌈";
        }

        document.getElementById("output").innerHTML = `   <h2> City:${name}</h2>
            <h2> Temperature: ${temp}°C</h2>
            <h2> Weather: ${condition}${icon}</h2>`;

        container.classList.remove(
          "bg-gray-100",
          "bg-blue-200",
          "bg-cyan-100",
          "bg-yellow-200",
          "bg-orange-200",
          "bg-red-200"
        );
        outputcontainer.classList.remove(
          "bg-gray-300",
          "bg-blue-100",
          "bg-cyan-100",
          "bg-yellow-100",
          "bg-orange-100",
          "bg-red-100"
        );
        inputbox.classList.remove(
          "bg-gray-300",
          "bg-blue-100",
          "bg-cyan-100",
          "bg-yellow-100",
          "bg-orange-100",
          "bg-red-100"
        );
        btn.classList.remove(
          "bg-gray-300",
          "bg-blue-100",
          "bg-cyan-100",
          "bg-yellow-100",
          "bg-orange-100",
          "bg-red-100"
        );

        if (temp <= 10) {
          container.classList.add("bg-blue-200");
          outputcontainer.classList.add("bg-blue-100");
          inputbox.classList.add("bg-blue-100");
          btn.classList.add("bg-blue-100");
        } else if (temp <= 20) {
          container.classList.add("bg-cyan-100");
          outputcontainer.classList.add("bg-cyan-100");
          inputbox.classList.add("bg-cyan-100");
          btn.classList.add("bg-cyan-100");
        } else if (temp <= 30) {
          container.classList.add("bg-yellow-200");
          outputcontainer.classList.add("bg-yellow-100");
          inputbox.classList.add("bg-yellow-100");
          btn.classList.add("bg-yellow-100");
        } else if (temp <= 38) {
          container.classList.add("bg-orange-200");
          outputcontainer.classList.add("bg-orange-100");
          inputbox.classList.add("bg-orange-100");
          btn.classList.add("bg-orange-100");
        } else if (temp > 38) {
          container.classList.add("bg-red-200");
          outputcontainer.classList.add("bg-red-100");
          inputbox.classList.add("bg-red-100");
          btn.classList.add("bg-red-100");
        }
      })

      .catch((error) => {
        document.getElementById(
          "output"
        ).innerHTML = `<p> ${error.message} </p>`;
      });

    inputbox.value = "";
  }
});
