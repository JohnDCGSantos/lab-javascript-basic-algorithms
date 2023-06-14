// Iteration 1: Names and Input
const hacker1 = "Bob"

const hacker2 = "Eva"

console.log(`The driver's name is  ${hacker1}, and the navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const length1= hacker1.length
const length2= hacker2.length

if (length1 > length2){
  console.log(`The driver has the longest name, it has ${length1} characters`)
}else if (length1 < length2){
 console.log(`The navigator has the longest name, it has ${length2} characters`) 
}else
  console.log(`Wow, you both have equally long names, ${length1}`);

// Iteration 3: Loops
let separatedName= ""
for (let i=0; i < hacker1.length; i++){
  separatedName += hacker2[i].toUpperCase() + " "
}
console.log(separatedName)

let reversedName= ""
for(let i= hacker2.length - 1; i >= 0; i--) {
 reversedName += hacker2[i]
}
 console.log(reversedName);



for (let i = 0; i < hacker1.length || i < hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    result = "The driver's name goes first.";
    break;
  } else if (hacker1[i] > hacker2[i]) {
    result = "Yo, the navigator goes first, definitely.";
    break;
  } else if (i === hacker1.length - 1 && i === hacker2.length - 1) {
    result = "What?! You both have the same name?";
  }
}
console.log(result)

//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis facilisis diam. Aenean lobortis nibh eu finibus interdum. Praesent vulputate ligula lorem, id pellentesque ipsum vulputate quis. Fusce placerat sit amet nulla vitae fermentum. Vestibulum aliquet dolor vitae suscipit pellentesque. Praesent ornare fringilla erat nec bibendum. Suspendisse dictum sed lacus eget viverra. Nunc vel nunc eget risus rhoncus ultricies in id velit. Fusce sodales, dui eu vulputate commodo, odio nisi consectetur nunc, quis gravida augue lorem id mi. Pellentesque eleifend diam pretium imperdiet congue. Aliquam id euismod quam. Nullam facilisis aliquet mi non tincidunt.Praesent congue ipsum risus, sed hendrerit erat venenatis at. Suspendisse vehicula rutrum risus, nec venenatis dui efficitur in. Vestibulum placerat sapien ac nisl congue, non ornare massa consequat. Phasellus tincidunt volutpat imperdiet. Mauris in dolor a tellus blandit ultrices id in libero. Integer rutrum vestibulum luctus. Pellentesque nec maximus magna. Suspendisse vitae orci nunc. Vestibulum pellentesque convallis quam sagittis facilisis. Nulla et erat neque. Morbi in mi ultrices, molestie dui vel, sollicitudin urna. Nam ac diam congue, pulvinar arcu non, aliquet turpis. In mollis dignissim blandit. Pellentesque dui ex, tincidunt id tristique vitae, rutrum eu erat. Nunc et lacus purus. Vivamus pellentesque quis nunc vel congue. Nullam blandit sit amet turpis id fermentum."

console.log(longText)

const words = longText.split(/\s+/).length;

console.log(words);
//206

constArray= longText.split(/\s+/);

const target = "et";

const filterWords = constArray.filter(constArray => constArray === target);

const count= filterWords.length;

console.log(` "${target}" appears ${count} times`);
//2

