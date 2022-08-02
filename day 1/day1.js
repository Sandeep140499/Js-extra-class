console.log("connecting");

//Vijay classess:-----------------------------
//Question1:what is Javascript?
//Javascript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

//Question2:what is the javascript run time environment?
//A runtime environment is where your program will be executed. 
//The JavaScript engine works inside an environment, which provides additional features to your scripts that you can use at runtime.
//JRE is responsible for making JavaScript asynchronous.


//Question3:what is execution context?
//Execution context is basically abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
//Execution context has two types :1.Global Execution Context and 2.Functional Execution Context.
//This is the default or base execution context. The code that is not inside any function is in the global execution context.
//Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context called functional execution conetext.


//Question4:what is javascript Engine?
//JavaScript is not understandable by computer but the only browser understands JavaScript. 
//So, we need a program to convert our JavaScript program into computer-understandable language. 
//Hencw,A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.


//Question5:flow of data in engine?
//The environment needs to have an engine, which takes the JS code that's written in human-readable syntax and turns it into machine code.
//The engine uses a parser to go through the code line by line and check if the syntax is correct. If there are any errors, code will stop executing and an error will be thrown.


console.log("---------------------------------------------------------------------------------------");
//sharat classes:----------------------------------

//Question1:Difference between “ == “ and “ === “ operators.

// == Operator:
//1.Double equals (==) is a comparison operator.
//2.Double equals named as Equality Operator.
//3.Double equals first convert the operands into the same type and then compare i.e comparison would perform once both the operands are of the same type. This is also known as type coercion comparison.

// === operators:
//1.Triple equals (===) is also a comparison operator.
//2.Triple equals named as Identity / Strict equality Operator.
//3.triple equals do not perform any type of conversion before comparison and return true only if type and value of both operands are exactly the same.

//e.g
let a = 1;
let b = 'Arpana';
let c = 1;

console.log(a == c);//True
console.log(a == b);//false
console.log(a === b);//False

//Question2:What is the spread operator?
//The spread operator is used to expand or spread an iterable or an array.
//synatx: (...array1)
//e.g

let array1 = [1,2,3];
console.log(...array1);//1 2 3

//Question3:What are the differences between var, let and const?
//var:we can declare the variable name in one line and initialize it on another line.
//    Two variable with same name are possible with var.
//    var is global scope.
//    var supports hoisting.

var x;
x = 2;
console.log(x);//2

var x = 4;
x = 9;
console.log(x);//4

//let:we can decalare the variable name in one line and initialize it on another line or in the same line itself.
//    Two variables with same name are not possible with let.
//    It is blocked scoped.
//    It doesn't support hoisting.

let y;
y = 5;
console.log(y);

//not possible:let w = 7


//const:we have to declare the variable and initialized in the same line itself.
//      Two variables with same name aren't possible with const.
//      It is blocked scoped.
//      It doesn't support hoisting.

//Not possible
// const z;
// z = 5

const z = 9;
console.log(z);


//Question4:What is execution context?
//Execution context is basically abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
//Execution context has two types :1.Global Execution Context and 2.Functional Execution Context.
//This is the default or base execution context. The code that is not inside any function is in the global execution context.
//Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context called functional execution conetext.


//Question5:What is creation phase and execution phase?
//The execution context is created in two phases: 1.Creation Phase and 2.Execution Phase.
//Creation phase:
//In the first run,it pick all function declarations and stores them in memory with their reference.
//In the second run, It picks all variables and assign undefined to them. 
//In the event of a conflict between variable and function declaration name then that variable is ignored.

//Execution phase:
//In first call,Variables assigned with their true values.
//And then,Functions executed.

//Question6:What are closures? Give an example of closure?
//closure makes a function remember all the variables that existed in the function birth place initially.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`The count of the passenger are ${passengerCount}`);
    }
}

const bookie = ticketBooking();
bookie();
