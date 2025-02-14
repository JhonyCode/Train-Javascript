// console.log("Working");

// let [start, ...rest] = "Hello";
// console.log(start);
// console.log(rest);

// Desestructuracion de arrays

// let numbers = [1, 2, 3, 4, 5];
// [a, b,...parcial] = numbers;
// console.log(parcial);
// [a,b,,,,...h] = [2,4,6,8,10,12,14];
// let elemento15 = numbers[15]
// console.log(a,b, h);

// Desestructuracion de objetos multiples

// const hero = {
//   character: "Doctor Strange",
//   name: "Benedict Cumberbatch",
//   powers: {
//     artifacts: ["Eye of Agamotto", "Book of the Vishanti", "Orb of Agamotto"],
//     skills: ["judo", "magically conjured weapons"],
//   },
// };
// const { name, powers:{skills} } = hero;
// console.log(name);
// console.log(skills[0]);
// console.log(otherPowers);
// console.log(otherHeroInfo);

// JSON serialization and parsing
let person = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john@google.com",
};
let jsonText = JSON.stringify(person);
// console.log(typeof jsonText);
// console.log(person);

// create a new object
let anotherPerson = JSON.parse(jsonText);
anotherPerson.first_name = "Jane";
anotherPerson.last_name = "Bone";
// console.log(person);
// console.log(anotherPerson);

// Web Storage
// localStorage
// let userName = prompt("Please enter your name:");
// let userLastName = prompt("Please enter your last name:");
// let phone = prompt("Please enter your phone:");
// save info
// localStorage.name = userName;
// localStorage.LastName = userLastName;
// localStorage.phone = phone;
// query info
// console.log(localStorage.name);
// console.log(localStorage.LastName);
// console.log(localStorage.phone);
// localStorage.clear();
// remove all properties of a storage object

// save and query objectss
// let data = { userName, phone };
// localStorage.data = JSON.stringify(data);
// console.log(JSON.parse(localStorage.data));
// getItem(), setItem(), and removeItem() methods are also available
// to manage data
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c2";
// localStorage.setItem("token", token);
// console.log(localStorage.getItem("token"));
// localStorage.removeItem("token");
// console.log(localStorage.getItem("token"));

// saving dates
// let loginDate = new Date().toString();
// localStorage.loginDate = loginDate;

// console.log(new Date(Date.parse(localStorage.loginDate)));
// // check application tab in dev tools

// sessionStorage
// let date = new Date();
// let logginTime =
// date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// sessionStorage.setItem("loggedAt",logginTime);
// console.log(sessionStorage.getItem("loggedAt"));

// Asynchronous JavaScript
// Callbacks
// Synchronous callback
// const sayHello = (userName) => {
//   console.log("Hi " + userName);
// };
// const getUserName = (callback) => {
//   let userName = prompt("Please, enter your name: ");
//   callback(userName);
// };
// getUserName(sayHello);

// Asynchronous callback
// const countDown = () => {
//   console.log("Ready?");
//   let start = 0;
//   let end = 0;
//   //   let count = 3;
//   for (let i = 5, count = 1; i >= 0; i--, count++) {
//     start = new Date().getTime();
//     console.log(start);
//     setTimeout(() => {
//       end = new Date().getTime();
//       console.log(i === 0 ? "GO!" : i);
//       console.log(count);
//       console.log(end - start, " ms");
//     }, count * 1000);
//   }
// };
// countDown();
// console.log("Steady");

// const countDownHell = () => {
//   let start = 5;
//   setTimeout(() => {
//     console.log(start--);
//     setTimeout(() => {
//       console.log(start--);
//       setTimeout(() => {
//         console.log(start--);
//         setTimeout(() => {
//           console.log(start--);
//           setTimeout(() => {
//             console.log(start--);
//             setTimeout(() => {
//               console.log("Running!");
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// countDownHell();

// Promise structure
let doSomeAsyncStuff = () =>
  new Promise((resolve, reject) => {
    if (done) {
      // fullfilled (resuelto con éxito)
      resolve(console.log("success"));
    } else {
      // error, rejected (rechazado)
      reject(err.message);
    }
  });

// Promise (resolved)
// let successPromise = new Promise((resolve, reject) => resolve("success!"));
// setTimeout(console.log, 0, successPromise);
// Promise (rejected)
let errorPromise = new Promise((resolve, reject) =>
  reject(new Error("something went wrong."))
);
setTimeout(console.log, 0, errorPromise);
