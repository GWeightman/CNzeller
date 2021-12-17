import inquirer from "inquirer"

let dates = [
    {
        type: "number",
        name: "day",
        message: "Enter the day you were born"
    },
    {
        type: "number",
        name: "month",
        message: "Enter the month you were born"
    },
    {
        type: "number",
        name: "year",
        message: "Enter the year you were born"
    }
]
const dayOfWeek = (X) => {
    if(X == 1){
        console.log("You were born on a Monday")
    }
    else if(X == 2){
        console.log("You were born on a Tuesday")
    }
    else if(X == 3){
        console.log("You were born on a Wednesday")
    }
    else if(X == 4){
        console.log("You were born on a Thursday")
    }
    else if(X == 5){
        console.log("You were born on a Friday")
    }
    else if(X == 6){
        console.log("You were born on a Saturday")
    }
    else if(X == 0){
        console.log("You were born on a Sunday")
    }
    else{
        console.log("Outside of Time and Space")
    }
}

const step1 = (D, M, Y) =>{
    if (M < 3) {
        M = M+12
        Y = Y-1
        let F = parseInt(Y/100)
        let L = Y-100*F
        let S = parseInt((2.6*M)-5.39) + parseInt(L/4) + parseInt(F/4) + D + L - (2*F)
        let X = S-(7*parseInt(S/7))
        dayOfWeek(X)
    }
    else{
        let F = parseInt(Y/100)
        let L = Y-100*F
        let S = parseInt((2.6*M)-5.39) + parseInt(L/4) + parseInt(F/4) + D + L - (2*F)
        let X = S-(7*parseInt(S/7))
        dayOfWeek (X)
    }
}
const zeller = async() => {
    let response = await inquirer.prompt(dates)
    step1(response.day, response.month, response.year)
}

zeller ()