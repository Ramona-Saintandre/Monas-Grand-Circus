// Declare the variables

let eventType = prompt ("what kind of event are you going to ?","casual,semi-formal,formal");

let tempFahr = prompt ("What is the tempature outside?" , "Fahrenheit tempature");

// Clothing recommendation based on eventType

if (eventType === 'casual'){
    let clothingType = 'something comfy';
}else if (eventType === 'semi-formal') {
    let clothingType = "a polo";
}else if (eventType === 'formal') {
    let clothingType = 'a suit';
};

// Clothing recommendation based on the tempature 

if (tempFahr <54){
    let tempClothType = 'a coat';
}else if (tempFahr >=54 && tempFahr <=70 ){
    let tempClothType = 'a jacket';
}else if (tempFahr >= 71){
    let tempClothType = 'no jacket';
};

// output  

//template literal concatenation is not working 
// let result = `Since it is $(tempFahr) degrees and you are going to a $(eventType) event, you should wear $(clothingType + tempClothType)`;

//string concatenation 
let result = "Since it is " + tempFahr + "degrees and you are going to a " + eventType + " event, you should wear" + clothingType + ".";

console.log (result);