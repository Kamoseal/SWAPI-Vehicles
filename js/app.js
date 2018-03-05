fetch('https://swapi.co/api/vehicles/')
 .then(function(response) {
   return response.json();
 })
 .then(function(data) {
   const vehicles = data.results;
   
   let output = ``;
console.log(vehicles);

   vehicles.forEach((item, index) => {
    console.log(index);
    let arrayImages = ["./assets/images/Sand_Crawler.jpg", "./assets/images/T-16_skyhopper.gif", "./assets/images/X_34_landspeeder.jpg",  "./assets/images/TIE_LN_starfighter.jpg",  "./assets/images/Snowspeeder.jpg", "./assets/images/TIE_bomber.jpg",   "./assets/images/AT_AT.jpg", "./assets/images/AT_ST.jpg", "./assets/images/Storm_IV_Twin_Pod_cloud_car.jpg", "./assets/images/Sail_barge.jpg"];


    const name = item.name;
    const model = item.model;
    const manufacturer = item.manufacturer;
    const costInCredits = item.cost_in_credits;
    const images = arrayImages[index]; 
    console.log(images);
    
    
    output+= `<div class="left">
    <img class="whithHeigth" src=${images} alt="">
    <p class="textCenter">${name}</p>
    <p class="texCenter">${model}</p>
    <p class="texCenter">${manufacturer}</p>
    <p class="texCenter">${costInCredits}</p>
</div>`

$("#vehicles").html(output);
});
   
 })
 .catch(function(error) {
   //console.log('Request failed', error)
 });
  






