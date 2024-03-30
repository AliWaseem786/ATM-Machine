#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1999;
let atmAnswer = await inquirer.prompt([
    {
        message: "Please enter your pin",
        name: "pin",
        type: "number"
    }
]);
if (atmAnswer.pin === myPin) {
    let accountType = await inquirer.prompt([
        {
            type: "list",
            message: "Choose Account Type?",
            name: "method",
            choices: ["Current account", "Saving account"]
        }
    ]);
    if (accountType.method === "Saving account") {
        let transType = await inquirer.prompt([
            {
                message: "select your method",
                type: "list",
                name: "Fast",
                choices: ["Cash Withdrawal", "Fast cash", "Check balance"]
            }
        ]);
        if (transType.Fast === "Fast cash") {
            let fast = await inquirer.prompt([
                {
                    message: "Choose your amount",
                    name: "fast",
                    type: "list",
                    choices: [1000, 2000, 5000, 20000]
                }
            ]);
            if (fast.fast <= myBalance) {
                let remaining = myBalance -= fast.fast;
                console.log(`Your balance is : ${remaining}`);
            }
            else {
                console.log("insuficient balance");
            }
        }
        ;
        if (transType.Fast === "Check balance") {
            console.log(`Your Current balance is : ${myBalance}`);
        }
        if (transType.Fast === "Cash Withdrawal") {
            let enterAmount = await inquirer.prompt([
                {
                    message: "Enter your amount",
                    name: "fastamount",
                    type: "number"
                }
            ]);
            if (enterAmount.fastamount <= myBalance) {
                let remaining = myBalance -= enterAmount.fastamount;
                console.log(`Your balance is : ${remaining}`);
            }
            else {
                console.log("insuficient balance!");
            }
        }
        ;
    }
    else if (accountType.method === "Current account") {
        let currentType = await inquirer.prompt([
            {
                message: "select your method",
                type: "list",
                name: "payment",
                choices: ["Cash Withdrawal", "Fast cash", "Balance inquiry"]
            }
        ]);
        if (currentType.payment === "Balance inquiry") {
            console.log(`Your Total balance is : ${myBalance}`);
        }
        if (currentType.payment === "Cash Withdrawal") {
            let enterAmount = await inquirer.prompt([
                {
                    message: "Enter your amount",
                    type: "number",
                    name: "withdraw"
                }
            ]);
            if (enterAmount.withdraw <= myBalance) {
                let remaining = myBalance -= enterAmount.withdraw;
                console.log(`Your balance is : ${remaining}`);
            }
            else {
                console.log("Insuficient balance");
            }
        }
        if (currentType.payment === "Fast cash") {
            let fastCash = await inquirer.prompt([
                {
                    message: "select your amount?",
                    name: "amount",
                    type: "list",
                    choices: [1000, 2000, 5000, 20000]
                }
            ]);
            if (fastCash.amount <= myBalance) {
                let remaining = myBalance -= fastCash.amount;
                console.log(`Your balance is : ${remaining}`);
            }
            else {
                console.log("insuficient balance");
            }
        }
    }
}
else {
    console.log("You entered wrong pin");
}
