console.log("write a program of calculator");
const prompt = require("prompt-sync")();

//------------------Calculator Function --------------//

function calculatorFunc(){
    console.log("------------Calulator -----------------");
    console.log("1. for Addition");
    console.log("2. for Subtraction");
    console.log("3. for Multiplication");
    console.log("4. for Division");
    console.log("5. to exit this program");
    console.log("---------------------------------------");
    const choice = prompt("Enter your choice: ");
    switch (choice){
        case '1':
            const a = parseInt(prompt("Enter First Number: "));
            const b = parseInt(prompt("Enter Second number: "));
            let result = a + b;
            console.log("Addition of "+a+" and "+b+" is "+ result);
            break;

        case '2':
            const a1 = parseInt(prompt("Enter First Number: "));
            const b1 = parseInt(prompt("Enter Second number: "));
            let result1 = 0;
            if (a1 > b1){
                result1 = a1 - b1;
            }else{
                result1 = b1 - a1;
                console.log("b1 >"); 
            }
            console.log(`Subtration of ${a1} and ${b1} is ${result1}`);
            break;  
            
        case '3':
                const a2 = parseInt(prompt("Enter First Number: "));
                const b2 = parseInt(prompt("Enter Second number: "));
                let result2 = a2 * b2;
                console.log(`Multiplication of ${a2} and ${b2} is ${result2}`);
                break;  
                
        case '4':
                const a3 = parseInt(prompt("Enter First Number: "));
                const b3 = parseInt(prompt("Enter Second number: "));
                let result3 = 0;
                if (a3 > b3){
                    result3 = a3 / b3;
                }else{
                    result3 = b3 / a3;
                }
                
                console.log(`Division of ${a3} and ${b3} is ${result3}`);
                break; 
                
        case "5":
                loopcondition = false;
                console.log("Thanks for using is function . . .")
                break;        
                
        default:
                console.log("Bad choice");        
    }

}
var loopcondition = true;
while(loopcondition){
    calculatorFunc();
}
