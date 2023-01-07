const mediumDolphin = (97 + 112 + 101) / 3;
const mediumKoala = (109 + 95 + 123) / 3;
    console.log("Điểm tb cá : ",mediumDolphin,"Điểm tb gấu : ",mediumKoala);
if (mediumDolphin > mediumKoala && mediumDolphin >= 100){
    console.log("Điểm trung bình của cá heo lớn hơn")
} else if (mediumDolphin < mediumKoala && mediumKoala >= 100) {
    console.log("Điểm trung bình của gấu túi lớn hơn")
}else if(mediumDolphin === mediumKoala && mediumKoala >= 100 && mediumKoala >= 100){
    console.log("Điểm trung bình của 2 đội bằng nhau")
}else{
    console.log("Không có đội nào chiến thắng")

}