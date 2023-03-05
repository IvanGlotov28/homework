// 1 // З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести на екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
// 
// const nameChildOne = prompt('Введіть ім`я першої дитини') 
// let   numberCandiesChildOne = parseInt(prompt('Введіть кількість цукерок першої дитини') )
// const nameChildTwo = prompt('Введіть ім`я другої дитини') 
// let   numberCandiesChildTwo = parseInt(prompt('Введіть кількість цукерок другої дитини') )
// 
// if(numberCandiesChildOne > numberCandiesChildTwo) 
//     document.write(nameChildOne)
// if(numberCandiesChildTwo > numberCandiesChildOne && numberCandiesChildTwo!= numberCandiesChildOne) document.write(nameChildTwo)
// if(numberCandiesChildOne === numberCandiesChildTwo) document.write(Кількість цукерок однакова)

// 2 // З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

// let productPrice = parseFloat(prompt(`Введіть ціну товару`))
//         let moneyAmount = parseFloat(prompt(`Введіть кількість грошей`))
//         const lotteryPrice = 4
// 
// if (productPrice > moneyAmount) document.write(`У покупці відмовлено`)
// else if (moneyAmount - productPrice >= lotteryPrice) document.write(`Купіть ще лотерейку за 4 гривні`)
// else document.write(`Покупка дозволена`)

// 3 // Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// let min = 1, max = 5
// let randomNumber = min + Math.floor(Math.random() * (max - min + 1))
// console.log(randomNumber)
// 
// let attemptOne = parseInt(prompt(`Перша спроба`))
// let attemptTwo = parseInt(prompt(`Друга спроба`))
// if(randomNumber === attemptOne || randomNumber === attemptTwo) document.write('Ви вгадали')
// 
// else document.write(`Ви не вгадали`)
// 
// 

// 4 // З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

// let userAge = parseInt(prompt(`Введіть Ваш вік`))
// const ageStartKinderGarten = 2
// const ageStartSchool = 7
// const ageStartUniversity = 18
// const ageStartWork = 22
// const ageStartPension = 65
// 
// if(userAge >= ageStartKinderGarten && userAge < ageStartSchool) document.write(`Ви дитина у садочку`)
//     
//     else if (userAge >= ageStartSchool && userAge < ageStartUniversity) document.write(`Ви школяр`)
//    
//     else if(userAge >= ageStartUniversity && userAge <= ageStartWork) document.write(`Ви студент`)
//    
//     else if(userAge >= ageStartWork && userAge < ageStartPension) document.write(`Ви працівник`)
//     else if (userAge >= ageStartPension) document.write(`Ви пенсіонер`)



// 5 // З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

// let driveCategory = prompt(`Введіть вашу водійську категорію`)
// const motorcycle = 'A'
// const car = 'B'
// const truck = 'C'
// 
// if(driveCategory == motorcycle) document.write('Мотоцикл')
//     else if (driveCategory == car) document.write('Легковий автомобіль')
//     else if (driveCategory == truck) document.write('Вантажний автомобіль')
// 


// 6 // З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

// let weekDayNumber = parseInt(prompt(`Введіть номер дня тижня`))
// 
// const monday = `Понеділок`
// const tuesday = `Вівторок`
// const wednesday = `Середа`
// const thursday = `Четвер`
// const friday = `П'ятниця`
// const saturday = `Субота`
// const sunday = `Неділя`
// 
// if(weekDayNumber == 1) document.write(monday)
// else if(weekDayNumber == 2) document.write(tuesday)
// else if(weekDayNumber == 3) document.write(wednesday)
// else if(weekDayNumber == 4) document.write(thursday)
// else if(weekDayNumber == 5) document.write(friday)
// else if(weekDayNumber == 6) document.write(saturday)
// else if(weekDayNumber == 7) document.write(sunday)


// 7 // З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

// let monthNumber = parseInt(prompt(`Введіть номер місяця`))
// 
// if(monthNumber == 1 || monthNumber == 2 || monthNumber == 12) document.write(`Зима`)
//  else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) document.write(`Весна`)
//  else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) document.write(`Літо`)
//  else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) document.write(`Осінь`)

// Додаткові

// 1 //Задача 1. На екран виводиться меню:
// 1. Веселий
// 2. Сумний
// 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла. 
// 
// let userChoice = parseInt(prompt(`Оберіть емоцію (число від 1 до 3)`))
// const funny = 1
// const sad = 2
// const indignant = 3
// // 
// if(userChoice === 1) document.write(`
// <img src="img/funny.jfif" alt="">
// `)
// else if(userChoice === 2) document.write(`
// <img src="img/sad.jfif" alt="">
// `)
// else if(userChoice === 3) document.write(`
// <img src="img/angry.jfif" alt="">
// `)
// else document.write(`Введіть коректне значення`)
// 

// 2 // 
// Задача 2. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.
// 
// let min = 1, max = 100
// let finishInterval =   Math.floor(Math.random() * (100 - 1)) + 1
// let startInterval =   Math.floor(Math.random() * (finishInterval - 1))+1
// 
// console.log(`Початок інтервалу ${startInterval}`);
// console.log(`Кінець інтервалу ${finishInterval}`);
// 
// let leftSide = startInterval - 10
// let rightSide = finishInterval + 10
// console.log(`leftSide ${leftSide}`)
// console.log(`rightSide ${rightSide}`)
// 
// let userChoice = parseInt(prompt(`Введіть число від одного до ста`))
// 
// const messageWin = `Ви вгадали!`
// const messageLoose = `Ви програли`
// 
// if(leftSide <= userChoice && rightSide >= userChoice) document.write(messageWin)
//     else document.write(messageLoose)
// 
//  

// 3 // Задача 3. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

// let min =1 , max = 10
// let randomNumber = min + Math.floor(Math.random() * (max - min + 1))
// 
// const userOneChoice = parseInt(prompt(`Число користувача 1`))
// const userTwoChoice = parseInt(prompt(`Число користувача 2`))
// 
// console.log(`randomNumber ${randomNumber}`); 
// console.log(`userOneChoice ${userOneChoice}`);  
// console.log(`userTwoChoice ${userTwoChoice}`); 
// 
// 
// if(randomNumber - userOneChoice  > randomNumber - userTwoChoice  ) document.write(`Переміг Користувач 1`)
// else if(randomNumber - userTwoChoice > randomNumber - userOneChoice) document.write(`Переміг Користувач 2`)

// 4 // Задача 4. Морський бій. Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на річці. 

// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами: 
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

//  const numberSquares = parseInt(prompt(`Введіть кількість квадратів`))
//  let min =1 , max = numberSquares
//  let shipPosition = min + Math.floor(Math.random() * (max - min + 1))
//  console.log(numberSquares);
//  console.log(shipPosition);
// 
// let userShoot =  parseInt(prompt(`Введіть номер квадрату, по якому стріляти`))
// 
// 
// 
// if(userShoot === shipPosition ) document.write(`Корабль потоплено`)
// else if(userShoot - shipPosition === 1 || shipPosition - userShoot === 1) userShoot = parseInt(prompt(`Корабль пошкоджено, Ви маєте ще один постріл, Введіть номер квадрату, по якому стріляти`))
// else if(userShoot !== shipPosition) userShoot = parseInt(prompt(`Ви маєте ще один постріл, Введіть номер квадрату, по якому стріляти`))
// else if(userShoot === shipPosition|| userShoot - shipPosition === 1 || shipPosition - userShoot === 1 ) document.write(`Корабль потоплено`)
// else document.write(`Ви програли`)


// switch (shipPosition) {
//     case userShoot : document.write(`Корабль потоплено`)
//          break;
//     case  userShoot + 1 : alert(`Корабль пошкоджено, Ви маєте ще один постріл`)
//     userShoot =  parseInt(prompt(`Введіть номер квадрату, по якому стріляти`))
//          break;
//     case userShoot - 1 : alert(`Корабль пошкоджено, Ви маєте ще один постріл`)
//     userShoot =  parseInt(prompt(`Введіть номер квадрату, по якому стріляти`))
//          break;
//     // case !shipPosition : alert(`Ви маєте ще один постріл`)
//     userShoot =  parseInt(prompt(`Введіть номер квадрату, по якому стріляти`))
//          break;
//     case userShoot : document.write(`Корабль потоплено`)
//          break;
//     case  userShoot + 1 : document.write(`Корабль потоплено`)
//         break
//     case userShoot - 1 : alert(`Корабль потоплено`)
//         break
//     //  case !userShoot || !userShoot  : document.write('Ви програли')
//      case userShoot + 2 || userShoot - 2 || userShoot + 2 || userShoot - 2  : document.write('Ви програли')
//     
// }
// switch(shipPosition){
// case secondShoot : document.write(`Корабль потоплено`)
//          break;
//     case  secondShoot + 1 : document.write(`Корабль потоплено`)
//      break
//     case secondShoot - 1 : document.write(`Корабль потоплено`)
//     break
//     //  case !firstShoot || !secondShoot  : document.write('Ви програли')
//      default : document.write('Ви програли')
//          break;
// 
// }



// Задача 6 // Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців.
// 
// За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів. 

// let hareColumn = 1
// let hareRow = 1
// 
// 
// const min = 1 , max = 2
// hareColumn = min + Math.floor(Math.random() * (max - min + 1))
// hareRow =  min + Math.floor(Math.random() * (max - min + 1))
// console.log(hareColumn);
// console.log(hareRow);
// 
// 
// let trapColumn = parseInt(prompt(`Введіть номер колонки`))
// let trapRow = parseInt(prompt(`Введіть номер рядка`))
// 
// if(hareColumn ===trapColumn && hareRow === trapRow) document.write(`Ви піймали зайця та заробили 100 балів (але відпустіть його бумласка)`)
// else if (hareColumn !== trapColumn && hareRow !== trapRow) {alert(`Спробуйте ще раз`); let trapColumn = parseInt(prompt(`Введіть номер колонки`)); let trapRow = parseInt(prompt(`Введіть номер рядка`))}
// else if (hareColumn ===trapColumn && hareRow === trapRow) alert(`Ви піймали зайця та заробили 50 балів (але відпустіть його бумласка)`)
// else document.write(`Ви програли`)


// // Задача 7. // Гра в кості. Правила гри:
// // 1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок);
// // 2) якщо випадає парне число, то кількість балів збільшується на це число;
// // 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// // 4) виграє той, у кого кількість балів більша.
// 
// const min = 1 , max = 6
// let scoreUserOne
// let scoreUserTwo
// const consent =`так`
// const refusal = `ні`
// let secondAttemptUserOne
// let firstattemptUserOne =  min + Math.floor(Math.random() * (max - min + 1))
// 
// if (firstattemptUserOne%2 === 0) scoreUserOne = firstattemptUserOne  
// else scoreUserOne = 0
// alert(`У першого гравця випало = ${firstattemptUserOne}, Кількість балів першого гравця = ${scoreUserOne}`)
//     scoreUserOne = firstattemptUserOne
//    let requestSecondAttempt = prompt(`Кидаєте кості ще раз? (1 гравець)`)
// 
// switch (requestSecondAttempt) {
//    case consent:  
//          secondAttemptUserOne = min + Math.floor(Math.random() * (max - min + 1))
//    if(secondAttemptUserOne%2 === 0) 
//          {scoreUserOne += secondAttemptUserOne 
//          alert(`У першого гравця випало= ${secondAttemptUserOne}, Кількість балів 1 гравця = ${scoreUserOne}`)}
//    else {scoreUserOne -=  secondAttemptUserOne  
//          alert(`У першого гравця випало= ${secondAttemptUserOne}, Кількість балів 1 гравця = ${scoreUserOne}`)} 
//       break;
//      case refusal: alert(`Кількість балів 1 гравця = ${scoreUserOne}`)
//       break;
// }
//    
// 
//   let firstAttemptUserTwo =  min + Math.floor(Math.random() * (max - min + 1))
//         if (firstAttemptUserTwo%2 === 0) scoreUserTwo = firstAttemptUserTwo 
//         else scoreUserTwo = 0
//         alert(`У другого гравця випало = ${firstAttemptUserTwo} Кількість балів другого гравця = ${scoreUserTwo}`)
//  
//       prompt(`Кидаєте кості ще раз? (2 гравець)`)
// 
//    switch (requestSecondAttempt) {
//       case consent: 
//          let secondAttemptUserTwo = min + Math.floor(Math.random() * (max - min + 1))
//          if(secondAttemptUserTwo %2 === 0){
//             scoreUserTwo += secondAttemptUserTwo
//             alert(`У другого гравця випало = ${secondAttemptUserTwo} Кількість балів другого гравця = ${scoreUserTwo}`)}
//          else {scoreUserTwo -= secondAttemptUserTwo
//             alert(`У другого гравця випало = ${secondAttemptUserTwo} Кількість балів другого гравця = ${scoreUserTwo}`)}
//          break;
//       case refusal:  alert(`Кількість балів 2 гравця = ${scoreUserTwo}`)
//          break;
//    }
// 
//    if (scoreUserOne > scoreUserTwo) alert(`Переміг гравець 1`)
//    else if (scoreUserOne === scoreUserTwo) alert(`Нічия`)
//    else alert(`Переміг гравець 2`)






//////////////////////////////////////////////////////
   // if (requestSecondAttempt === consent) {
   //  secondAttemptUserOne = min + Math.floor(Math.random() * (max - min + 1))
   //  if(secondAttemptUserOne%2 === 0){scoreUserOne = secondAttemptUserOne + scoreUserOne
   //    alert(`У першого гравця випало= ${secondAttemptUserOne}, Кількість балів 1 гравця = ${scoreUserOne}`)}
   //     else {scoreUserOne -=  secondAttemptUserOne  
   //       alert(`У першого гравця випало= ${secondAttemptUserOne}, Кількість балів 1 гравця = ${scoreUserOne}`)
   //    } }
   // 
   // else if (requestSecondAttempt === refusal) alert(`Кількість балів 1 гравця = ${scoreUserOne}`)


// Задача 8. // З клавіатури вводиться кількість сторін багатокутника. Необхідно вивести назву фігури («трикутник», «чотирикутник», «п’ятикутинк», «шестикутник»).


// const numberSide = parseInt(prompt(`Введіть кількість сторін багатокутника` , `1`))
// 
// const triangle = 3
// const quadrangle = 4
// const pentagon = 5
// const hexagon = 6
// 
// switch (numberSide) {
//     case triangle: document.write(`Трикутник`)
//         break;
//         case quadrangle: document.write(`Чотирикутник`)
//         break;
//         case pentagon: document.write(`П’ятикутинк`)
//         break;
//         case hexagon: document.write(`Шестикутник`)
//         break;
//     default: document.write(`Спробуйте ще`)
//         break;
// }

// Задача 9. // З клавіатури вводиться перша літера розширення файлу («html», «doc», «jpeg», «mp3», «xls»). Вивести на екран назву програми, яка може відкрити цей тип файлу.

// const firstLetterFileExtension = prompt(`Введіть першу літеру розширення файлу з переліку : «html», «doc», «jpeg», «mp3», «xls»`)
// 
// const opera = `h`
// const word = `d`
// const gallery = `j`
// const spotify = `m`
// const excel = `x`
// 
// switch (firstLetterFileExtension) {
//     case opera: document.write(`Opera`)
//         break;
//         case word: document.write(`Word`)
//         break;
//         case gallery: document.write(`Gallery`)
//         break;
//         case spotify: document.write(`Spotify`)
//         break;
//         case excel: document.write(`Excel`)
//         break;
//     default: document.write(`Error`)
//         break;
// }
