
var readlineSync=require("readline-sync");
var score=0;
var userName=readlineSync.question("What is your name? ");
console.log("Welcome "+userName+" are you READY to play?");
console.log(" ");
console.log("👇 👇 Rules to play the QUIZ 👇 👇");
console.log(" ");
console.log("1] Correct answer will give you ONE mark.");
console.log("2] wrong answer will conduct ZERO mark.");
console.log("3] After end of quiz SCORE will be displayed.");
console.log(" ");
console.log("ALL THE BEST!!!");
console.log("________________________________________________________");
console.log(" ");
//play function
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log("right!");
    score=score+1;
  }
  else
  {
   console.log("Wrong!");
  }
  console.log("current score: ",score);
  console.log("--------------------------------------");
}
//Array of the objects
var questions=[
{
 question:"Who is owner of Google? ",
 answer:"Larry Page",
 answer:"larry page",
},
{
  question:"Who is owner of Facebook? ",
  answer:"Mark Zukerberg",
  answer:"mark zukerberg",
},
{
 question:"Who is owner of Amazon? ",
 answer:"Jeff Bezos",
 answer:"jeff bezon",
},
{
 question:"Who is founder of Microsoft? ",
 answer:"bill gates",
 answer:"paul allen",
},
{
 question:"Who is founder of Youtube? ",
 answer:"Jawed Karim",
 answer:"jawed karim",
},
{
 question:"Who is owner of Youtube? ",
 answer:"Google",
 answer:"google",
},
{
 question:"Who is owner of whatsapp? ",
 answer:"Facebook",
 answer:"facebook",
},
{
 question:"Who is founder of Apple? ",
 answer:"Steve Jobs",
 answer:"steve job",
},
{
 question:"Who is owner of flipcard? ",
 answer:"Sachin Bansal",
 answer:"sachin bansal",
},
{
 question:"Who is founder of Tesla? ",
 answer:"Elon Musk",
 answer:"elon musk",
}]
//loop
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("YEHHH!! You SCORED:",score);
