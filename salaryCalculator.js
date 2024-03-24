// Prompt user to input gross pay 
const prompt = require("prompt-sync")({ sigint: true });
const grossPay = parseFloat(prompt("Enter your gross salary(in ksh):"));
// Create a function to calculate the paye
const paye = function(grossPay){
    if (grossPay <= 24000){ 
        return 0.1 * grossPay
} else if (grossPay >= 24001 && grossPay <= 32333){
    return 0.25 * grossPay
} else if (grossPay >= 32334 && grossPay <= 500000){
    return 0.3 * grossPay
} else if (grossPay >= 500002 && grossPay <= 800000){
    return 0.325 * grossPay
} else if (grossPay > 800000){
    return 0.35 * grossPay
}
}()
// Create a function to calculate NHIF deduction
const nhifDeduction = function(grossPay){
    if (grossPay <= 5999){
        return 150
    } else if (grossPay >= 6000 && grossPay <= 7999){
        return 300
    } else if (grossPay >= 8000 && grossPay <= 11999){
        return 400 
    } else if (grossPay >= 12000 && grossPay <= 14999){
        return 500 
    } else if (grossPay >= 15000 && grossPay <= 19999){
        return 600
    } else if (grossPay >= 20000 && grossPay <= 24999){
        return 750
    } else if (grossPay >= 25000 && grossPay <= 29999){
        return 850
    } else if (grossPay >= 30000 && grossPay <= 34999){
        return 900
    } else if (grossPay >= 35000 && grossPay <= 39999){
        return 950
    } else if (grossPay >= 40000 && grossPay <= 44999){
        return 1000
    } else if (grossPay >= 45000 && grossPay <= 49999){
        return 1100
    } else if (grossPay >= 50000 && grossPay <= 59999){
        return 1200
    } else if (grossPay >= 60000 && grossPay <= 69999){
        return 1300
    } else if (grossPay >= 70000 && grossPay <= 79999){
        return 1400
    } else if (grossPay >= 80000 && grossPay <= 89999){
        return 1500
    } else if (grossPay >= 90000 && grossPay <= 99999){
        return 1600
    } else if (grossPay >= 100000){
        return 1700
    }
}()
// Create a function to calculate NSSF deduction
const nssfDeduction = (grossPay * 0.06)
// Calculate total deductions
const deductions = function(paye, nhifDeduction, nssfDeduction){
    return paye + nhifDeduction + nssfDeduction
}()
// Calculate the net pay which is gross minus deductions
const netPay = function(grossPay, deductions){
    console.log(`Your net pay is,` + `${grossPay - deductions}!`)
}
netPay()
