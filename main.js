let btnNum = document.querySelectorAll(".num")
let btnOp = document.querySelectorAll(".op")
let equals = document.querySelector(".equals")
let dltBtn = document.querySelector(".delete")

let inputDiv = document.querySelector("#input")

let calculation = {
    num1: "",
    operator: "",
    num2: "",
}

btnNum.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let input = e.target.innerText;
        if(!calculation["num1"]){
            calculation["num1"] += input;
        }
        else if(!calculation["operator"]){
            calculation["num1"] += input;
        }
        else if(calculation["operator"]){
            calculation["num2"] += input;
        }
        let newInput = `${calculation.num1}${calculation.operator}${calculation.num2}`
        ChangeInput(newInput);
    });
});

btnOp.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let input = e.target.innerText;
        if(!calculation["num1"]&&input=="-"){
            calculation["num1"] += "-";
        }
        else if(!calculation["num2"]&&calculation["num1"]!="-"){
            calculation["operator"] = input;
        }
        let newInput = `${calculation.num1}${calculation.operator}${calculation.num2}`
        ChangeInput(newInput)
    });
});

let add = (n1, n2) => {
    return n1 + n2
}
let subtract = (n1,  n2) => {
    return n1-n2
}
let multiply = (n1, n2) => {
    return n1*n2
}
let divide = (n1, n2) => {
    return n1/n2
}

equals.addEventListener("click", () => {
    let sol = "";
    if(calculation["num1"]&&calculation["operator"]=="+"){
        sol = add(+calculation["num1"], +calculation["num2"]) 
    }
    else if(calculation["num1"]&&calculation["operator"]=="-"){
        sol = subtract(+calculation["num1"], +calculation["num2"])
    }
    else if(calculation["num1"]&&calculation["operator"]=="*"){
        sol = multiply(+calculation["num1"], +calculation["num2"])
    }
    else if(calculation["num1"]&&calculation["operator"]=="/"){
        sol = divide(+calculation["num1"], +calculation("num2"))
    }
    finishCalc(sol)
  
})


let finishCalc = (sol) => {
    calculation["num1"] = sol.toString();
    calculation["num2"] = "";
    calculation["operator"] = "";
    let newInput = `${calculation.num1}${calculation.operator}${calculation.num2}`;
    ChangeInput(newInput);
}

let deleteLast = () => {
    if(calculation.num2){
        calculation.num2 = calculation.num2.split("").slice(0, -1).join("")
    }
    else if(calculation.operator){
        calculation.operator = calculation.operator.split("").slice(0, -1).join("")
    }
    else if(calculation.num1){
        calculation.num1 = calculation.num1.split("").slice(0, -1).join("")

        console.log(calculation.num1)
    }
        let newInput = `${calculation.num1}${calculation.operator}${calculation.num2}`
    ChangeInput(newInput)
}

dltBtn.addEventListener("click", deleteLast)

//changes Input when User clicks numbers...
let ChangeInput = (input) => {
    inputDiv.innerText = input;
}
