// Display all country Flags in console

// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all');
// request.send();
// request.onload = function(){
//     var data= JSON.parse(this.response);
//     for(let i=0; i<data.length; i++){
//         console.log(data[i]["flag"])
//     }
// };

// Print all country names, regions, sub-region and populations

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  for (let i = 0; i < data.length; i++) {
    console.log(
      `Country name: ${data[i]["name"].common} \n region: ${data[i]["region"]} \n Sub-region: ${data[i]["subregion"]} \n Population: ${data[i]["population"]}`
    );
  }
};
