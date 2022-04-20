//ASYNCHRONOUS JAVASCRIPT

//synchrono

// const sayHello = (userName) => {
//     console.log("Hi " + userName);
// };
// const getUserName = (callback) => {
//     let userName = prompt("Please, enter your name: ");
//     callback(userName)
// };
// getUserName(sayHello)

//es un ejemplo donde complicamos algo sencillo para ver un callback. Es una función que
//se le pasa a otra función cuando termina la segunda, devuelve el control a la primera
//. Si es asíncrono esperará a que haya un evento para que el
//callback actúe. Así no se bloquean entre ellas

//asynchronous callback
// const countDown = () => {
//     console.log("Ready?");
//     let start = 0;
//     let end = 0;
//     // let count = 3;
//     for (let i = 5, count = 1;  i >= 0; i--, count++) {
//         start = new Date().getTime();
//         console.log(start);
//         setTimeout(() => {
//             end = new Date().getTime();
//             console.log(i===0 ? "GO!" : i);
//             console.log(count);
//             console.log(end-start, " ms");
//         }, count * 1000);
//     }
// };
// countDown()
// console.log("Steady")

//Callback hell

// const countDownHell = () => {
//     let start =5;
//     setTimeout(()=> {
//         console.log(start--);
//         setTimeout(()=> {
//             console.log(start--);
//             setTimeout(()=> {
//                 console.log(start--);
//                 setTimeout(()=> {
//                     console.log(start--);
//                     setTimeout(()=> {
//                         console.log(start--);
//                         setTimeout(()=> {
//                             console.log(start--);
//                             setTimeout(()=> {
//                                 console.log("Running");
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000)
//     },1000);
//     };
// countDownHell();

//Promises
//esquema de una promesa.

// let doSomeAsyncSTuff = () =>
// new Promise((resolve,reject) => {
//     if (done) {
//         //fullfilled
//         resolve(console.log("success"));
//     }else{
//         //rejected
//         reject(err.message)
//     }
// });

//Promise (resolved)

// let successPromise = new Promise((resolve, reject) => resolve("success!"));
// setTimeout(console.log, 0, successPromise)

// // Promise (rejected)

// let errorPromise = new Promise((resolve, reject) => reject(new Error("something went wrong.")));
// setTimeout(console.log, 0 , errorPromise)

//Promise (pending)

// let promise = new Promise(() => {});
// setTimeout(console.log, 0, promise)

//Promises - chaining with then()

// //without then()
// let promise1 = fetch("/api/movies");
// //promise 1 , task 1
// let promise2 = promise1.then(callback1);
// //promise 2, task 2
// let promise3 = promise2.then(callback2);

//chaining promises
// const onResolved = (id) => {
//     setTimeout(console.log, 0, id, "resolved");
// };
// const onRejected = (id) => {
//     setTimeout(console.log, 0, id, "rejected")
// };

// let promise1 = new Promise((resolve,reject) => setTimeout(resolve, 1000));
// let promise2 = new Promise((resolve,reject) => setTimeout(reject, 2000));
// promise1.then(
//     () => onResolved("promise1"),
//     () => onRejected("promise1")
// );
// promise2.then(
//     () => onResolved("promise2"),
//     () => onRejected("promise2")
// );

// //catching promises

// let promise = new Promise((resolve, reject) => setTimeout(reject(new Error("catching the error")),1000)
// );
// promise.then(() => alert("promise solved")).catch(error => console.log(error));

//-------
//ASYNC/AWAIT
//-------

//lo mismo más clásico

// async function getNumber(n) {
//     console.log(n);
// };
// const getNumber = async function (n) {
//     console.log(n);
// };

//opción más moderna

// const getNumber = async () => {
//     console.log(1);
//     console.log(2)
//     return 4;
// };
// getNumber().then(console.log);
// console.log(3);

//async/await

//Can't catch rejected promises

// const getNumber = async () => {
//     console.log(1);
//     Promise.reject(3);
// };
// //Uncaught (in promise) 3
// getNumber().catch(console.log);
// console.log(2);

//Now the rejected promises can be catched

// const getNumber = async () => {
//     console.log(1);
//     await Promise.reject(3);
// };
// getNumber().catch(console.log);
// console.log(2);

//Not allow

// const sayHello = async () => {
//     const sayHelloWorld = () => {
//         return await Promise.resolve("Hello");
//     };
//     console.log(sayHelloWorld());
// };

//working as synchronous

// const count = async () => {
//     console.log(2);
// };
// console.log(1);
// count();
// console.log(3);

// await make asynchronous the code

// const count = async () => {
//     console.log(2);
//     await null;
//     console.log(4);
// };
// console.log(1);
// count();
// console.log(3);

//-------
//NETWORKING
//-------

//Networking (fetch() + JSON Server)

// window.addEventListener("load", () => {
//     //Get all posts
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then((response) => response.json())
//     .then((json) => console.log("trying get: ", json));
//     //Get a specific post
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     //Insert a new post
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             title: "foo",
//             body: "bar",
//             userId: 1,
//         }),
//         headers: {
//             "content-type":
//             "application/json; charset=UTF-8",
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => {
//         console.log("trying post: ", json)
//     });
//     //Update a post
//     fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "POST",
//         body: JSON.stringify({
//             title: "foo",
//             body: "bar",
//             userId: 1,
//         }),
//         headers: {
//             "content-type":
//             "application/json; charset=UTF-8",
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => {
//         console.log("trying put: ", json);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//     });
//     //deleting a post
//     fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "DELETE",
//     });
// });

//Deeping into response object

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//     console.log(response);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.ok);
//     //another way to read the contents of a response
//     response.text().then((data) => {
//         console.log(JSON.parse(data));
//     });
// });

//Full example

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => {
//     if(
//         response.ok &&
//         response.headers.get("Content-Type") === "application/json; charset=utf-8"
//         ){
//             return response.json();
//          }else {
//              console.log(response.headers.get("Content-Type"));
//              throw new Error(`Unexpected status ${response.status} or content type`);
//          }
// })
// .then((data) => console.log(data))
// .catch((error) => console.log(error));
