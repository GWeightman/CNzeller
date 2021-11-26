let D = 20
let M = 3
let Y = 1984


const dayOfWeek = (X) => {
    if(X == 1){
        console.log("Monday")
    }
    else if(X == 2){
        console.log("Tuesday")
    }
    else if(X == 3){
        console.log("Wednesday")
    }
    else if(X == 4){
        console.log("Thursday")
    }
    else if(X == 5){
        console.log("Friday")
    }
    else if(X == 6){
        console.log("Saturday")
    }
    else if(X == 7){
        console.log("Sunday")
    }
    else{
        console.log("Outside of Time and Space")
    }
}

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

