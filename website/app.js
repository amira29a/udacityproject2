/* Global Variables */


// Create a new date instance dynamically with JS

// Parameters
let d = new Date();

/* The getMonth method returns the month in the specified date according to local time, as a zero-based
so i have added 1 with get.Month as https://nfpdiscussions.udacity.com/t/rubric/187900/2   explanxed*/

 let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();



 // define variables  
const dateText = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const btn = document.getElementById('generate'); // with the id of generate
let zipInput = document.getElementById('zip');
let feelingInput = document.getElementById('feelings');

/* WEB API WITH FETCH */
/* API call
http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key} */

const apiUrl ='http://api.openweathermap.org/data/2.5/forecast?zip='; 
const apiKey = '&appid=7fe2959e58622a1edb9ea0a58c779e9a'; // unique API key (you can always find it on your account page
// appid required	


// with the id of generate should have an addEventListener() method
btn.addEventListener('click', function(){
        let zipCode = zipInput.value;
        let feelings = feelingInput.value;
        getWeather(apiUrl , zipCode , apiKey)
    .then(function(data){
        console.log(data,"data");
        // first i used this way with date:d but the date was so long then i used newDate
                // add data to post request 
         postData('/add', {date:newDate, temp:data.list[0].main.temp , content:feelings})
    
    })
});


// const getWeather = async (apiUrl, zipCode, key)=>{
// to get weather (web) api data
async function getWeather(apiUrl,zipCode,apiKey) {
        const res = await fetch(apiUrl + zipCode + apiKey)
        try{
        const data = await res.json();
    //    console.log(data);
        return data;
        } catch (error){
        console.log("error" , error);
    // appropriately handle the error

        }
    }
    
    

const postData = async ( url = '', data = {}) =>{ //  POST Requests
   console.log(data, "data details");
    const response = await fetch(url, {
       method:'POST',
       credentials:'same-origin',
       headers: {
           'Content-Type': 'application/Json',
       },
       body: JSON.stringify(data) // body data type must match "Content-Type" header 
        });
        // to get weather data
       dateText.innerHTML= `Data : ${data.date}`; // date
       temp.innerHTML = `Temperatuer : ${data.temp}`; // Temperatuer data
       content.innerHTML =` I feel ${data.content}`; // feeling text
        try {
             // Transform into JSON
            const newData = await response.json();
            // console.log(newData, 'test2');
            return newData;

        }catch(error){
        console.log("error", error);
            //appropriately handle the error
        }
}





    
