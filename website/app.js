// Create a new date instance dynamically with JS
/* The getMonth method returns the month in the specified date according to local time, as a zero-based
so i have added 1 with get.Month as https://nfpdiscussions.udacity.com/t/rubric/187900/2   explanxed*/
 let d = new Date();
 let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();



/* Global Variables */
const dateText = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const btn = document.getElementById('generate'); // with the id of generate
let zipInput = document.getElementById('zip');
let feelingInput = document.getElementById('feelings');
const apiKey = '7fe2959e58622a1edb9ea0a58c779e9a'; // unique API key (you can always find it on your account page

// with the id of generate should have an addEventListener() method
btn.addEventListener('click', function(){
        let zipCode = zipInput.value; 
        let feeling = feelingInput.value;
        
        /* The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. 
         https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */

        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${apiKey}`)
       .then(response => response.json()).then(data => {console.log(data)
        dateText.innerHTML= `Data : ${newDate}`; // date
        temp.innerHTML = `Temperatuer : ${data.list[0].main.temp}`; // Temperatuer data
        content.innerHTML =` I feel ${feeling}`;// show feeling input (Value the user will enter )
       })        
       try {
      } catch (error){console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
      
});
    
