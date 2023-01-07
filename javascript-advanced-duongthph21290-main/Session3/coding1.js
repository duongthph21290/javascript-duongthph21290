const dtb = (a,b,c) => (a+b+c)/3;
let dtbCa = dtb(44,23,71);
let dtbGau = dtb(65,54,49);
console.log("dtb cá:",dtbCa,"dtb gấu:",dtbGau);
function checkWin(dtbCa,dtbGau){
    if(dtbCa>= 2*dtbGau){
        console.log("Cá heo win");
    }else if(2* dtbCa <= dtbGau){
        console.log("Gấu win");
    }else{
        console.log("ko ai win");
    }
}
checkWin(dtbCa,dtbGau);
dtbCa = dtb(85,54,41);
dtbGau = dtb(34,23,27);
console.log("dtb cá:",dtbCa,"dtb gấu:",dtbGau);
checkWin(dtbCa,dtbGau);
