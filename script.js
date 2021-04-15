// console.log

var Airtable = require("airtable");
// console.log(Airtable);

var base = new Airtable({ apiKey: "keypoMs7rs0iTMssF" }).base(
    "apptVql6vVIecIoVl"
  );

base("cups").select({ maxRecords:100 }).eachPage(gotPageOfCups, gotAllCups);

  var cups = [];

  function gotPageOfCups(records, fetchNextPage) {
    console.log("gotPageOfCups()");
    // add the records from this page to our array
    cups.push(...records);
    // request more pages
    fetchNextPage();
  }

  function gotAllCups(err) {
    console.log("gotAllCups()");

    try {
        showCups();
      } catch (error) {
        error.log(error);}
    }
  
  // just loop through the cups and console.log them
  function consoleLogCups() {
    console.log("consoleLogCups()");
    cups.forEach(cup => {
      console.log("Cup:", cup);
    });
  }

// look through our airtable data, create elements
function showCups() {
    console.log("showCups()");
    cups.forEach(cup => {
      // create container for each cup
      var cupContainer = document.createElement("div");
      cupContainer.classList.add("cup-container");
      document.querySelector(".container").append(cupContainer);

    // add cup name
    var cupName = document.createElement("div");
    cupName.classList.add("cup-name");
    cupName.innerText = cup.fields.cup_name;
    cupName.append(cupName);

    var cupImg = document.createElement("img");
    cupImg.classList.add("cup-img");
    cupImg.src = cup.fields.Image[0].url;
    cupContainer.append(cupImg);

    var cuptName = document.createElement("p");
    cupName.classList.add("cup-name");
    restaurantName.innerText = cup.fields.Name;
    restaurantContainer.append(cupName);

    });
}
