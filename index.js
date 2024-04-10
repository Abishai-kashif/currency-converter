#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// welcome message
console.log(chalk.white.bold("\n\t\t\t  ----------------------------------"));
console.log(chalk.white.bold(`\t<<<==========>>>${chalk.hex("#E59BE9").bold.italic("  WELCOME TO MY CURRENCY CONVERTER !  ")}<<<==========>>>`));
console.log(chalk.white.bold("\t\t\t  ----------------------------------\n\n"));
let color = chalk.hex("#B9C4BB").bold; //creating custom color
// storing exchange rate of different currencies
let exchangeRate = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    CNY: 6.50,
    JPY: 110.00,
    AUD: 1.45,
    INR: 83.19,
    PKR: 277.52
};
while (true) {
    // asking user for currncy he wants to convert from,to & amount
    let answer = await inquirer.prompt([
        {
            name: "fromCurrency",
            type: "list",
            message: chalk.hex("#B9C4BB").bold("Select The currency you want to convert from: "),
            choices: ["USD", "EUR", "GBP", "CNY", "JPY", "AUD", "INR", "PKR"],
        },
        {
            name: "toCurrency",
            type: "list",
            message: chalk.hex("#B9C4BB").bold("Select The currency you want to convert to: "),
            choices: ["USD", "EUR", "GBP", "CNY", "JPY", "AUD", "INR", "PKR"],
        },
        {
            name: "amount",
            type: "number",
            message: chalk.hex("#B9C4BB").bold("Enter the amount you want to convert: "),
            default: 1,
            validate: (ans) => ans > 0 ? true : "Amount must be greater than 0"
        }
    ]);
    // extracting exchange rate of from and to currency
    let fromCurrency = exchangeRate[answer.fromCurrency];
    let toCurrency = exchangeRate[answer.toCurrency];
    let amount = answer.amount;
    // conversion
    let baseAmount = amount / fromCurrency;
    let convertedAmount = baseAmount * toCurrency;
    // displaying the result
    console.log(color(`\n--> ${chalk.green(`${amount} ${answer.fromCurrency}`)} in ${answer.toCurrency} is: ${chalk.green(`${convertedAmount.toFixed(2)}${answer.toCurrency}`)}\n`));
    // asking user if he wants to continue
    let ans = await inquirer.prompt([
        {
            name: "wantTo",
            type: "confirm",
            message: color("Do you want to continue? "),
            default: true
        }
    ]);
    if (ans.wantTo == true) {
        console.log(chalk.white.bold('\nJust a sec...\n'));
        continue;
    }
    else {
        break;
    }
    ;
}
;
