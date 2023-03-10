/*
let arr=['a','b','c','d','e'];
//Slice
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(2,-1));
console.log(arr.slice());
console.log(...arr);

//splice

// console.log(arr.splice(2));
arr.splice(-1)
console.log(arr);
arr.splice(1,2)
console.log(arr);

//Reverse : Đảo ngược

arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','k']
console.log(arr2.reverse());
console.log(arr2);

//concat : Cộng thêm 
const letters=arr.concat(arr2);
console.log(letters); 

// join: nối mảng thàng chuỗi

console.log(letters.join('-'));


const arr=[23,11,64]
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Jonas'.at(-1));


const movements= [200, -200, 340, -300, -20, 50, 400, -460];

movements.forEach(function(movement,i){
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
      } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
      }
});


//Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
console.log(currencies);
currencies.forEach(function(vaule,key,map){
  console.log(`${key}:${vaule}`);
});

//Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(vaule,key,map){
    console.log(`${key}:${vaule}`);
  });

*/
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = 0;
  movements.forEach(
    function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
        } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements)


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
  console.log(balance);
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

const createUserNames = function (accs) {
  accs.forEach((acc) => {
    acc.userName = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
}
createUserNames(accounts);
console.log(accounts);

//Lab4.1

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements)
    calcDisplaySummary(currentAccount.movements);
  }
});

//Lab4_2

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(currentAccount);
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount);
  console.log(receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log(currentAccount);
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements)
    calcDisplaySummary(currentAccount.movements); 
  }
});


btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//Codding 1
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd=1.1;
const movementsUSD= movements.map((movement)=>{
   return movement*eurToUsd;
})
console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

*/
//fillter
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits=movements.filter((mov)=>{
   return mov>0;
})
console.log(movements);
console.log(deposits);
*/
//reduce()
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balane= movements.reduce((acc,cur,i,arr)=>{
  console.log(`${i}:${acc}:${cur}`);
   return acc+cur;
},0);
console.log(balane);

*/
//Codding 2
/*
const calcAverageHumanAge=function(ages){
  const humanAges=ages.map((age)=>(age<=2?2*age:16+age*4))
  const adults=humanAges.filter((age)=>{
    return age>=18;
  })
  console.log(adults);
  const average=adults.reduce((acc,age)=>acc+age,0)/adults.length;
  return average;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
/*
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsUSD = movements.filter((mov) => mov < 0).map((mov) => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

*/
//Codding3

/*

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal=movements.find((mov)=>mov<0)
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account=accounts.find((acc)=>acc.owner==='Jessica Davis');
console.log(account);








