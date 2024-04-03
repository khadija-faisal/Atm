#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.green.bold("\t   WELCOME!\nThank You for using our service! "));
let myBalance = 100000;
let myPin = 1119;
let pinCode = await inquirer.prompt({
    name: "pin",
    message: chalk.whiteBright("Enter Your 4 digit PIN: "),
    type: "number",
});
if (pinCode.pin === myPin) {
    let selectOperation = await inquirer.prompt([
        {
            name: "operations",
            message: chalk.magentaBright.bold("Please select from the options below: "),
            type: "list",
            choices: ["Fastcash", "cashwithdrawal", "balanceinquirey", "deposit"],
        }
    ]);
    if (selectOperation.operations === "Fastcash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "fastamount",
                message: chalk.cyan.bold("Please select amount from the options below:"),
                type: "list",
                choices: [3000, 5000, 10000, 15000, 25000,],
            }
        ]);
        myBalance -= selectAmount.fastamount;
        console.log(chalk.yellowBright.bold(`you remaining balance is: ${myBalance}`));
    }
    else if (selectOperation.operations === "cashwithdrawal") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.cyan.bold("Enter your amount:"),
                type: "number",
            }
        ]);
        if (withdrawAmount.amount <= myBalance) {
            myBalance -= withdrawAmount.amount;
            console.log(chalk.yellowBright.bold(`you remaining balance is: ${myBalance}`));
        }
        else {
            console.log(chalk.red.bold("Insufficient balance, Please enter a valid amount."));
        }
    }
    else if (selectOperation.operations === "balanceinquirey") {
        console.log(chalk.green.bold(`Your current balance is ${myBalance}`));
    }
    else if (selectOperation.operations === "deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "depositcash",
                message: chalk.cyan.bold("Enter your amount:"),
                type: "number",
            }
        ]);
        myBalance += depositAmount.depositcash;
        console.log(chalk.yellowBright.bold(`your deposit was successfully completed,\nnow you current balance is: ${myBalance}`));
    }
}
else {
    console.log(chalk.red.bold("you entered unvalid pin"));
}
