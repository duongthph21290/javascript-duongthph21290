const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2 ;
const bmiJohn = weightJohn / (heightJohn * heightJohn);

const mark = bmiMark.toFixed(2);
const john = bmiJohn.toFixed(2);

console.log("Chỉ số BMI của Mark là :",mark);
console.log("Chỉ số BMI của John là :",john);

if(bmiMark > bmiJohn){
    console.log(`Chỉ số BMI của Mark (${mark}) cao hơn của John (${john}) !`)
}else{
    console.log(`Chỉ số BMI của John (${john}) cao hơn của Mark (${mark}) !`)
}