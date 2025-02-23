// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
    `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    if(testInput === "") {
        return "Empty"
    } else {
        if (isNaN(testInput)){
            return "Not a Number"
        } else {
            return "Is a Number"
        }
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) == "" || validateInput(copilot) == "" || validateInput(fuelLevel) == "" || validateInput(cargoLevel) == "") {
        alert("Please fill all fields");
    }
    if(validateInput(pilot) == "Is a Number") {
        alert("Please do not input a number for Pilot");
    }
    if(validateInput(copilot) == "Is a Number") {
        alert("Please to not input a number for Copilot");
    }
    if(validateInput(fuelLevel) == "Not a Number") {
        alert("Please input a number for Fuel Level");
    }
    if(validateInput(cargoLevel) == "Not a Number") {
        alert("Please input a number for Cargo Level");
    }
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if(fuelLevel < 10000) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    if(cargoLevel >= 10000) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;