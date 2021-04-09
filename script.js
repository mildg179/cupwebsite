// console.log

var Airtable = require("airtable");
// console.log(Airtable);

var base = new Airtable({ apiKey: "keypoMs7rs0iTMssF" }).base(
    "apptVql6vVIecIoVl"
  );

    base("cups")
    .select({})
    .eachPage(gotPageOfCups, gotAllCups);

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
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the cups
    consoleLogCups();
    showCups();
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
    var cupName = document.createElement("h1");
    cupName.classList.add("cup-name");
    cupName.innerText = cup.fields.cup_name;
    cupName.append(cupName);

    var nameOfType = document.createElement("p");
    nameOfType.classList.add("cup-type");
    nameOfType.innerText = cup.fields.type;
    cupContainer.append(nameOfType);

    var cupImage = document.createElement("img")
    cupImage.classList.add("cup-image");
    cupImage.src = cup.fields.cup_image[0].url;
    cupContainer.append(cupImage);
    document.body.append(cupImage);

    var songImage = document.createElement("img")
    cupImage.src = cup.fields.cup_image[0].url;
    document.querySelector(".container").append(cupImage);
    });
}