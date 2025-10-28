//dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate1 = new Date(2023, 0, 23)
// let myCreateDate2 = new Date(2023, 0, 23, 5, 3)
// let myCreateDate3 = new Date("2023-01-14")
// let myCreateDate4 = new Date("01-14-2023");
// console.log(myCreateDate4.toLocaleString());

let myTimeStamp = date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate1.getTime());
// console.log(myCreateDate2.getTime());
// console.log(myCreateDate3.getTime());
// console.log(myCreateDate4.getTime());
// console.log(Math.floor(date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);


newDate.toLocaleString(`default`, {
    weekday: "long",
});




