import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count words: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentene word is ${words.length}`);
