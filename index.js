// Iteration 1: Names and Input
let hacker1 = 'João'
console.log(`The driver's name is: ${hacker1}`)

let hacker2 = 'Ana'
console.log(`The navigator's name is: ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${[hacker1.length]} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${[hacker2.length]} characters.`
  )
} else {
  console.log(`Wow, you both have equally long names, ${[hacker1.length]} characters!.`)
}
// Iteration 3: Loops

let driverCapitals = ''

for (let i = 0; i < hacker1.length; i++) {
  let upperCaseLetter = hacker1[i].toUpperCase()

  // if it is the first letter to be added, then add it without the space
  if (i === 0) {
    driverCapitals = driverCapitals + upperCaseLetter
  } else {
    driverCapitals = driverCapitals + ' ' + upperCaseLetter
  }
}
console.log('driverCapitals: ', driverCapitals)

//3.2
let reversedName = ''

for (let i = hacker1.length - 1; i >= 0; i = i - 1) {
  let upperCaseLetter = hacker1[i].toUpperCase()

  if (i === 3) {
    reversedName = reversedName + upperCaseLetter
  } else {
    reversedName = reversedName + ' ' + upperCaseLetter
  }
}
console.log('reversedName: ', reversedName)

//3.3

//for this i need to use .toUpperCase, because if a name have capital and the same name without capital, JS will choose the capital one. So we put both names in capital.
let hacker1Capital = hacker1.toUpperCase
let hacker2Capital = hacker2.toUpperCase

let comparation = hacker1.localeCompare(hacker2)
if (comparation === 0) {
  console.log('Both have the same')
} else if (comparation === -1) {
  console.log(`Driver goes first, is ${hacker1}`)
} else {
  console.log(`Navigator goes first, is ${hacker2}`)
}

//Bonus 1
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper massa nisi. Donec fermentum, massa ut dapibus posuere, quam purus mollis felis, vitae fermentum urna augue et mi. Aenean ante eros, mattis eget vestibulum vitae, rhoncus eu nulla. Fusce vitae ligula at purus rutrum blandit sit amet eget ligula. Praesent dictum rutrum sapien, a sagittis risus. Aliquam mattis varius commodo. Cras ullamcorper aliquam neque, ut aliquam velit vestibulum vehicula. Sed enim neque, aliquet in egestas in, mollis sed ex. Aenean dapibus tempus tincidunt. Donec vitae metus mi. Vestibulum viverra fermentum ultricies. Nulla accumsan dui magna, a posuere quam posuere id. Fusce dignissim mollis erat. Proin velit ex, tincidunt in vestibulum sed, mattis vel nulla. Suspendisse tellus ligula, rhoncus ut vestibulum at, congue et turpis. Mauris ut ipsum laoreet, sodales nibh placerat, commodo nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus gravida convallis lorem sit amet ultrices. Mauris faucibus libero id hendrerit rhoncus. Pellentesque vitae ex risus. Vestibulum ac purus leo. Quisque eget quam pharetra, pretium augue fermentum, aliquet mi. Quisque metus lacus, tincidunt vel feugiat a, convallis quis diam. Phasellus eleifend neque ultrices elit pretium convallis. Donec a nisl convallis, sollicitudin ex vitae, viverra urna. Mauris rhoncus tellus non ex ultricies dapibus.'
let wordCount = 0

//counting words by spaces
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ') {
    wordCount++
  }
}

//last word have no space so we add one wordCount
wordCount++

console.log('Number of words: ', wordCount)

//1.2
let etCount = 0

for (let i = 0; i < longText.length; i++) {
  // counts if current letter is "e" and the next letter is "t"
  if (longText[i] === 'e' && longText[i + 1] === 't') {
    etCount++
  }
}
console.log("Number of 'et': ", etCount)

//Bonus2
let phraseToCheck = 'taco cat'

// first we create a clean variable with all special characters removed.

let cleanPhrase = ''
for (let i = 0; i < phraseToCheck.length; i++) {
  // only add characters between "A" and "z"

  if (phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'z') {
    cleanPhrase = cleanPhrase + phraseToCheck[i]
  }
}
console.log('CleanPhrase: ', cleanPhrase)

let reversedPhrase = ''
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase = reversedPhrase + cleanPhrase[i]
}
console.log('ReversedPhrase: ', reversedPhrase)

if (cleanPhrase === reversedPhrase) {
  console.log('The phrase is a palindrome!')
} else {
  console.log('The phrase is not a palindrome')
}
