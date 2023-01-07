const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Hóa đơn là ${bill}, tiền boa là ${tip} và tổng giá trị là ${bill + tip}
`)