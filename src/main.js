let who = [
  "My mom",
  "Jeffry",
  "My Dog",
  "Mariano",
  "A warewolf",
  "My neighbor",
];
let action = ["stole", "scratched", "made", "drank", "lost", "broke"];
let what = ["my phone", "your car", "a mess", "coke", "its prey", "the window"];
let when = [
  "while i was cooking",
  "When you werent looking",
  "during the evening",
  "while we werent looking",
  "when was asleep",
  "when no one could see him",
];

function makeAnExcuse() {
  let num = Math.floor(Math.random() * 6) + 1;
  let excuse = "AAAA";
  
  document.getElementById("excuse").innerHTML = excuse;
}
