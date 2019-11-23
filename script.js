/*
var colors;

colors = ["red"," blue"," green"," yellow"];

document.write("before changes", colors);


// the length property is used to define the length of the array
document.write("the length of this array is ", colors.length);

//reverse the array
colors.reverse();
document.write(" After changes ", colors);

//remove the first value of an array
colors.shift();
document.write(colors);

//remove the last value of an array
colors.pop();
document.write(colors);

//add values to an array
colors.unshift("purple","brown");
document.write(colors);

//add values to an array end
colors.push("purple","brown ");
document.write(colors);
document.write(colors.length);

//remove a value from the middle of an array
colors.splice(1,2);
document.write(colors.length);

function findthebignumber(a,b)
{
    //code is written here to be executed
    if (a<b){
        document.write("a is lesser: ", a);
        
        }
    else{
        document.write("b is lesser: ", b)
    }
}

var firstnumber = 1014540;
var secondnumber = 25230;

findthebignumber(firstnumber,secondnumber); //this is the function call
findthebignumber(11.34, 19.03);
findthebignumber(-12.3467, 0.8976);

*/
//var a = 34;
//var b = 45;
/*

var goBig = function(a,b){
    var answer;
    if(a > b){
        answer=("a: " + a);
    }
    else
        {
            answer=("b: "+ b);
        }
    return answer;
}

document.write(goBig(23, 23));
*/
/*

//global and local variables
var lavaGirl= "Selena Gomez"; //global variable
function catGirl (){
     var lavaGirl= "Seeeelena Gomez";//local variable
    document.write(lavaGirl);
    
}

catGirl();

//Variable ends after the function ends...noted
document.write(lavaGirl);*/

//

//ECMA2015 CONSTANT AND LET

/*const MYnumber = 5;
document.write(MYnumber);*/

//LET is a block scope variable
/*
function letVariable () {
    var newVar = 2;
    
    if (newVar){
        let newVar = "I am a number ";
        console.log("block scope is limited and :", newVar);
        //document.write("block scope is limited and: ", newVar);
    }
    console.log("function scope newVar: ", newVar);
    //document.write("function scope newVar: ", newVar);
    
}

letVariable();*/

/*

//objects in javascript
var human = new Object();
/*
human.age = 23;
human.name = "daniel obiero";
human.weight = 34*/
/*
var human = {
    age: 23,
    name: "Daniel Obiero",
    weight: 34,
    
    bodyweight: function(){
    return ++human.weight;
}
}

console.log(human.weight);
human.bodyweight();
console.log(human.weight);
*/
/*

function Human(name,age, gender, weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.bodyweight = function(){
        return ++this.weight * 10;
    }
}

var human1 = new Human("daniel obiero", 47, "Male", 160);
var human2 = new Human("Selena gomez", 24, "Female", 160);
console.log(human1);
console.log(human2);

var humans = [new Human("daniel obiero", 47, "Male", 160), new Human("Selena gomez", 24, "Female", 160)] ;

console.log(humans[0].bodyweight());
console.log(humans[1].bodyweight());
console.log(humans[1].name);
console.log(humans[0].name);*/

//closure in javascript
/*
function letsaddSomething(){
    var a = 4;
    var b = 5;
    
    function letsmultiply(){
        var Answer = a*b;
        return Answer;
    }
    return letsmultiply();
}

var theAnswer = letsaddSomething();
console.log(theAnswer);*/

function convertToems (pixels){
    var pixelValue = 16;
    
    function convertNow (){
        return pixels/pixelValue;
    }
    
    return convertNow;
}

var small = convertToems(12);
var medium = convertToems(18);
var large = convertToems(24);

console.log("small em value from pixels is : ", small());
console.log("small em value from pixels is : ", medium());
console.log("small em value from pixels is : ", large());

window.open();