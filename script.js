const btn = document.getElementById('btn');

btn.addEventListener("click", ()=>
{
    const city = document.getElementById('city').value;
    let inputbox = document.getElementById('city')
    const apikey = "d4bd02af9d30ba7ac7febd378d11fc50";
            const img = document.getElementById('img');
     inputbox.style.outline = 'none'
    if(!city)
    {
        inputbox.style.outline = '2px solid red'
        inputbox.style.color = "red"
        img.style.display ="block"
        document.getElementById('output').textContent = '';
        
    }
    else
    {
        //  document.getElementById("output-container").style.backgroundColor = "rgb(224,224,224)"
         inputbox.style.outline = 'none'
        inputbox.style.color = "black"
        img.style.display ="none"

        document.getElementById('output').textContent = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        fetch(url)
        .then((response) =>
        {
            if(!response.ok) throw new Error("city not found");
            return response.json();
        })
        .then((data) =>
        {
            const name = data.name;
            const temp = data.main.temp;
            const condition = data.weather[0].main;

            document.getElementById('output').innerHTML =

         `   <h2> City: ${name} </h2>
            <h2> Temperature: ${temp}°C</h2>
            <h2> Weather: ${condition}</h2> `

            // if(temp < 10)
            // {
            //     document.getElementById("output-container").style.backgroundColor = "blue"
            // }



        })

        .catch((error) =>
        {
            document.getElementById('output').innerHTML =
            `<p> ${error.message} </p>`
        })

        inputbox.value = "";

        
    }
})