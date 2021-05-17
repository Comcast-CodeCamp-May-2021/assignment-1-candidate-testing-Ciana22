const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

candidateName = input.question(" What is your name: "); // if you type in ciana, then ciana becomes the value of candidateName
// console.log(" What is your name: ");


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who is the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer = "";

let questions = [
	"1) Who is the first American woman in space? ",
	"2) True or false: 5 kilometer == 5000 meters? ",
	"3) (5 + 3)/2 * 10 = ? ",
	"4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
	"5) What is the minimum crew size for the ISS? ",
];

let candidateAnswers = [];


let correctAnswers = [
	"Sally Ride",
	"True",
	"40",
	"Trajectory",
	"3",
];

// let numberOfRightAnswers = 0;


function askForName() {
	//   // TODO 1.1b: Ask for candidate's name //
	//   candidateName = input.question(" Candidate Name: "); // if you type in ciana, then ciana becomes the value of candidateName
	//   console.log(" What is your name: " + candidateName);
	//   candidateName = input.question(" Candidate Name: "); // if you type in ciana, then ciana becomes the value of candidateName
	// console.log(" What is your name: ");
}

function askQuestion() {
	// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
	// question = input.question('Who is the first American woman in space? ');
	// console.log('Who is the first American woman in space? ' + candidateAnswer);
	for (let i = 0; i < questions.length; i++) {
		// input.question will return any response you give in the console
		candidateAnswers.push(input.question(questions[i]));
	// candidateAnswers.push(response);

	console.log(`
Your answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}
`);
  }
}


	
// let numberOfRightAnswers = numberOfRightAnswers + 1; // (numberOfRightAnswers + 1) is the value that you want to reassign to numberOfRightAnswers
// console.log(numberOfRightAnswers);

// do part 3.2 here!
// calculate the grade! give this grade variable a value! you got this!
function gradeQuiz(candidateAnswers) {
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// agh!!!!!
//if candiate answer is strictly equal to correct answer then print right else print wrong
//  SAVE
let total = 0;

	// let total = grade / questions.length * 100;

for (let i = 0; i < candidateAnswers.length; i++) {
		// we want to keep track of the NUMBER!!! of candidate answers that are correct
		// let numberOfRightAnswers = 0 
		// this is called declaring/defining a variable

		// his is called reassigning a variable
		if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
			total++; //switched from grade
		}
	}
  let grade = (total / questions.length) * 100;
	let candidateScore = '';
  if (grade >= 80) {
		candidateScore = " You Passed! ";

	 } else 
		candidateScore = ' You Did Not Pass ';
// console.log(`
// Your answer: ${candidateAnswers[0]}
// Correct Answer: ${correctAnswers[0]}
// `);

    console.log(`>>> Overall Grade: ${grade}% (${total} of ${questions.length} responses correct)" <<<\n>>> Status: ${candidateScore} <<<`);


  return grade;
}


function runProgram() {
	askForName();
	// TODO 1.1c: Ask for candidate's name //

	askQuestion();
	// console.log(correctAnswers);
	// console.log(candidateAnswers);

	gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
	candidateName: candidateName,
	question: question,
	correctAnswer: correctAnswer,
	candidateAnswer: candidateAnswer,
	questions: questions,
	correctAnswers: correctAnswers,
	candidateAnswers: candidateAnswers,
	gradeQuiz: gradeQuiz,
	runProgram: runProgram
}