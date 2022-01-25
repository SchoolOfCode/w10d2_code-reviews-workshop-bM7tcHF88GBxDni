function wave(str) {
  /* Plan
  we want to return an array where each consecutive character becomes uppercase

  function takes in a string
  variable to store final result (array)
  for loop through each character
    make the character at that index of the loop a capital
      Replace this character in the string with the capital version,
      use slice to seperate the character, e.g, hello -> heLlo
      to do this, we slice and keep "he", add the new capital letter and slice and keep "lo"
    push this new word to result array
  return result as the final answer
  */

let newArr = []
for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i).toUpperCase();

}

}

export default wave;
