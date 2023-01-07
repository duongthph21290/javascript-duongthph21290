function bmi(a,b){
    let bmi = a/b**2;
    return bmi;
}
const john = {
    name: "John Smith",
    width: 78,
    height: 1.69,
    bmi:bmi(79,1.69),
}
const mark = {
    name: "Mark Miller",
    width: 92,
    height: 1.95,
    bmi:bmi(92,1.95),
}
console.log(john,mark);
if(john.bmi>mark.bmi){
    console.log(john.name,john.bmi,"có chỉ số BMI lớn hơn",mark.name,mark.bmi);
}else if(john.bmi<mark.bmi){
    console.log(john.name,john.bmi,"có chỉ số BMI nhỏ hơn",mark.name,mark.bmi);
}else{
    console.log("Hai thằng đều có chỉ số BMI bằng nhau");
}