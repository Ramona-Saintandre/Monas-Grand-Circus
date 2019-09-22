// Declare the variables

var eventType = prompt ("what kind of event are you going to ? will it be casual, semi-formal, formal");
var tempFahr = prompt ("What is the tempature outside? , Fahrenheit tempature Please");
var clothingType;
var tempClothType;

//define the variable 

// Clothing recommendation based on eventType

if (eventType === 'casual'){
    var clothingType = 'something comfy';
}else if (eventType === 'semi-formal') {
    var clothingType = "a polo";
}else if (eventType === 'formal') {
    var clothingType = 'a suit';
};

// Clothing recommendation based on the tempature 

if (tempFahr <54){
    var tempClothType = 'a coat';
}else if (tempFahr >=54 && tempFahr <=70 ){
    var tempClothType = 'a jacket';
}else if (tempFahr >= 71){
    var tempClothType = 'no jacket';
};


// output  

//template literal concatenation 
 var result = `Since it is $(tempFahr) degrees and you are going to a $(eventType) event, you should wear $(clothingType + tempClothType)`;

//string concatenation 
// var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + clothingType + " and " + tempClothType + ".";

console.log (result);
alert(result);



