module.exports = clozeCard
var partial=" "
var fullText= " "

var clozeCard= new ClozeCard()

	

function ClozeCard(text, cloze){

	this.text= text;
	this.cloze= cloze;

	this.partial=partial
	this.fullText= fullText
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText)

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");