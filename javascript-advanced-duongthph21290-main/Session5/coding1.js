const data1 =[17,20,36];
console.log("...",data1[0],"Độ C","...",data1[1],"Độ C","...",data1[2],"Độ C");
const printForecast = function(arr){
    let count = "";
    for(let i=0;i<arr.length;i++){
        count = count + arr[i] +" Độ C trong " +(i+1)+" ngày        |        " ;


    }console.log(count);
}
printForecast(data1);
