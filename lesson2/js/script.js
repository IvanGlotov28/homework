// // // // Задача 0. Обчислити значення виразів
// // // // S1=a+12+b
// // // 
// let a =parseInt( prompt(`Введіть значення a`))
// let b =parseInt( prompt(`Введіть значення b`))
// let sum1 = a + 12 + b
// alert (`Сума 1: ${sum1.toFixed(2)}`)
// 
// // S2= √(a+b) / 2*a 
// 
// let sumDivision = (a + b) / (2 * a)
// let sum2 = Math.sqrt(sumDivision)
// alert (`Сума 2: ${sum2.toFixed(2)}`)
// // S3= 3*(√(a+b)*c)
// 
// let c =parseInt( prompt(`Введіть значення c`))
// let sumMultiplication = (a + b) * c 
// let sumPov = Math.sqrt(sumMultiplication)
// let sum3 = Math.pow(sumPov, 3)
// alert (`Сума 3: ${sum3.toFixed(2)}`)
// // S4 = sin(a / -b)
//  let sumDivision1 = a/ --b
//  let sum4 = Math.sin(sumDivision1)
//  alert (`Сума 4: ${sum4.toFixed(2)}`)
// 
// //  Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
// 
// let x = parseFloat( prompt(`Введіть значення x`))
// let y = parseFloat( prompt(`Введіть значення y`))
// 
// let sum = x + y
// let product = x * y
// let fraction = x / y
// 
// document.write(`
// <table border="1px">
// <tr>
// <td>
//     Сума
// </td>
// <td>
//     ${sum}
// </td>
// </tr>
// <tr>
// <td>
//     Добуток
// </td>
// <td>
//     ${product}
// </td>
// </tr>
// <tr>
// <td>
//     Частка
// </td>
// <td>
//     ${fraction}
// </td>
// </tr>
// 
// </table>
// 
// `)
// 
//  
// 
// 
// // // Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
// 
// let birthYear = parseInt( prompt(`Введіть рік народження`))
// let currentYear = parseInt( prompt(`Введіть поточний рік`))
// let age = currentYear - birthYear
// alert(`Вік: ${age}`)
// 
// // // Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// // 
// let price = parseFloat( prompt(`Введіть вартість товару`))
// let number = parseInt( prompt(`Введіть кількість товару`))
// let totalPrice1 = price * number
// alert(`Загальна вартість: ${totalPrice1}`)
// let pdv = 5 / 100 * totalPrice1
// alert(`ПДВ: ${pdv}`)
// 
// 
// // // Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
// // 
// let lengthSm = parseFloat( prompt(`Введіть довжину у сантиметрах`))
// let lengthM = lengthSm * 0.01 
// alert(`Метрів: ${lengthM}`)
// 
// let lengthKm = lengthSm * 0.00001 
// alert(`Кілометрів: ${lengthKm}`)
// 
// 
// // Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// 
// let second = parseInt( prompt(`Введіть кількість секунд`))
// 
// let hour = second / 3600
// 
// let minute = second / 60
// 
// alert(`Годин: ${hour.toFixed(2)}; Хвилин: ${minute.toFixed(2)}`)
// 
// 
// // Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// 
// let ware1Price = parseFloat(prompt(`Введіть вартість першого товару`))
// let ware1Number = parseInt(prompt(`Введіть кількість першого товару`))
// let ware1TotalPrice = ware1Price * ware1Number
// 
// let ware2Price = parseFloat(prompt(`Введіть вартість другого товару`))
// let ware2Number = parseInt(prompt(`Введіть кількість другого товару`))
// let ware2TotalPrice = ware2Price * ware2Number
// 
// let ware3Price = parseFloat(prompt(`Введіть вартість третього товару`))
// let ware3Number = parseInt(prompt(`Введіть кількість третього товару`))
// let ware3TotalPrice = ware3Price * ware3Number
// let totalPrice = ware1TotalPrice + ware2TotalPrice + ware3TotalPrice
// 
// document.write(
//     `<table border="1px">
//     <tr>
//     <td>Кількість першого товару: ${ware1Number}</td>
//     <td>Вартість першого товару: ${ware1Price}</td>
//     <td>Загальна вартість першого товару: ${ware1TotalPrice}</td>
//     </tr>
// 
//     <tr>
//     <td>Кількість другого товару: ${ware2Number}</td>
//     <td>Вартість другого товару: ${ware2Price}</td>
//     <td>Загальна другого першого товару: ${ware2TotalPrice}</td>
//      </tr>
//  
//      <tr>
//      <td>Кількість третього товару: ${ware3Number}</td>
//      <td>Вартість третього товару: ${ware3Price}</td>
//      <td>Загальна вартість третього товару: ${ware3TotalPrice}</td>
//      <td>Загальна вартість всього товару: ${totalPrice}</td>
//      </tr>
//  
//      </table>`
//  )
//  
//   
// // // Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6)
// 
// let min = 1, max= 12
// let monthNumber = min + Math.floor(Math.random() * (max - min + 1))
// 
// let min1 = 0, max1 = 6
// let dayNumber = min1 + Math.floor(Math.random() * (max1 - min1 + 1))
// 
// let sumDayMonth = monthNumber + dayNumber
// 
// document.write(`
//     Cума випадкового номера місяця та випадкового номера дня = ${sumDayMonth}
// `)
// 
// // Додатково
// // 1 Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину елементів, які повинні бути відображені у цьому рядку. 
// 
// let screenWidth = parseInt(prompt(`Введіть ширину екрану`))
// let elementNumber = parseInt(prompt(`Введіть кількість елементів`))
// let elementWidth = screenWidth / elementNumber 
// console.log(`Ширина одного елементу: ${elementWidth}`)
// 
// 
// // 3 З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.
// 
// let priceItem1 = parseFloat(prompt(`Введіть вартість першого товару`))
// let numberItem1 = parseInt(prompt(`Введіть кількість першого товару`))
// 
// let priceItem2 = parseFloat(prompt(`Введіть вартість другого товару`))
// let numberItem2 = parseInt(prompt(`Введіть кількість другого товару`))
// 
// let totalPriceItem1 = priceItem1 * numberItem1
// let totalPriceItem2 = priceItem2 * numberItem2
// 
// let totalPriceItems = totalPriceItem1 + totalPriceItem2
// 
// console.log(`Загальна вартість першого товару: ${totalPriceItem1}`)
// console.log(`Загальна вартість другого товару: ${totalPriceItem2}`)
// console.log(`Загальна вартість усього товару: ${totalPriceItems}`)
// 
// 
// // 4 З клавіатури вводиться вік дитини. Вивести на екран через скільки років вона буде відвідувати садочок, піде у школу, закінчить школу, вступить і закінчить 
// 
// let ageChild = parseInt(prompt(`Введіть вік дитини`))
// 
// let yearStartGarden = 2 - ageChild
// let yearStartSchool = 6 - ageChild
// let yearFinishSchool = 17 - ageChild
// let yearStartUniversity = 18 - ageChild
// let yearFinishUniversity = 22 - ageChild
// console.log(`Через скільки років піде у садок: ${yearStartGarden}`);
// console.log(`Через скільки років піде у школу: ${yearStartSchool}`);
// console.log(`Через скільки років закінчить школу: ${yearFinishSchool}`);
// console.log(`Через скільки років вступить до університету: ${yearStartUniversity}`);
// console.log(`Через скільки років закінчить університет: ${yearFinishUniversity}`);
// 
// 
// 
// // 5 Визначити, яку платню одержить на фірмі сумісник за виконану роботу, якщо йому нараховано S грн., а податок становить 20%.
// 
// let s = parseInt(prompt(`Введіть суму, що буде нарахована суміснику`))
// let tax = 20 / 100 * s
// let salary = s - tax
// console.log(`Платня: ${salary}`)

// 6 Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.

let a = 1
let b = 2
let c = 3
let d = a
a = b
b = c
c = d
 


console.log(a)
console.log(b)
console.log(c)
