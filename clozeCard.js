//module.exports = clozeCard
    // var partial=" "
var inquirer = require("inquirer");
var question = ""
var result = ""
var answers = []

//var clozeCard = new ClozeCard()



if (process.argv[2] === "fullText") {
    for (i = 3; i < process.argv.length; i++) {
        question = question+ process.argv[i] + " "
    }
	console.log(question)
}

if (process.argv[2] === "result") {
    for (i = 3; i < process.argv.length; i++) {
        result = result+ process.argv[i] + " "
    }
console.log(result)
}

 

inquirer.prompt([
  {
    fullText: "question",
    cloze: "answer"
  }]).then(function(answers) {
  // initializes the variable newGuy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var firstPresidentCloze = new ClozeCard(
    fullText, cloze);
 	console.log(fullText)
 	console.log(cloze)

	function ClozeCard(fullText, cloze) {

    this.fullText = fullText
    this.cloze = cloze;

    this.partial = function() {
        return this.fullText.replace(cloze, "___________ ")
    }
}
//var clozeCard = new ClozeCard()
// "George Washington"
// if (process.argv[2] === "cloze") {
//     //console.log(firstPresidentCloze.cloze);
//     answers.push(firstPresidentCloze.cloze)
//     //console.log(answers)
//     console.log(firstPresidentCloze.partial());
//     console.log(firstPresidentCloze.fullText)
// }
  // printInfo method is run to show that the newguy object was successfully created and filled
  firstPresidentCloze.printInfo();
});
//     name: "position",
//     message: "What is your current position?"
//   }, {
//     name: "age",
//     message: "How old are you?"
//   }, {
//     name: "language",
//     message: "What is your favorite programming language?"
//   }




// " ... was the first president of the United States.


// "George Washington was the first president of the United States.


// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze = new ClozeCard("This doesn't work", "oops");