//module.exports = clozeCard
    // var partial=" "
var inquirer = require("inquirer");
var question = ""
var result = ""
var flash = []
var sol= []

//var clozeCard = new ClozeCard()

inquirer.prompt([
  {
    name:"cloze",
    message:"answer"
  },

  {
    name:"fullText",
    message:"question"
  }

  ]).then(function(answers) {
  // initializes the variable newGuy to be a programmer object which will take
  // in all of the user's answers to the questions above

  var firstPresidentCloze = new ClozeCard(
    answers.fullText, answers.cloze);

	function ClozeCard(fullText, cloze) {

    this.fullText = fullText
    this.cloze = cloze;

    console.log(this.fullText.search(cloze))

    if(typeof fullText=== "undefined" || typeof cloze=== "undefined" || this.fullText.search(cloze)=== -1) {

    console.log("This doesn't work, oops")

    }

    else{

    this.partial = function() {
        return this.fullText.replace(cloze, "___________ ")
    }

    }
}
//var clozeCard = new ClozeCard()
// "George Washington
console.log(firstPresidentCloze.cloze);
//     answers.push(firstPresidentCloze.cloze)
//     //console.log(answers)
console.log(firstPresidentCloze.partial());
console.log(firstPresidentCloze.fullText);
flash.push(firstPresidentCloze.partial());
sol.push(firstPresidentCloze.cloze);
console.log(flash)
console.log(sol)

// printInfo method is run to show that the newguy object was successfully created and filled
// firstPresidentCloze.printInfo().catch(function(err){console.log(err)});
});



// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze = new ClozeCard("This doesn't work", "oops");