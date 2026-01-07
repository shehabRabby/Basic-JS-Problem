function countVowel(str) {
  let count = 0;
  const vowles = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowles.includes(str[i])) {
      count++;
    }
  }
  return count;
}

const str = "programming";
const output = countVowel(str);
console.log(output);
