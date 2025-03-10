// real time use of js
// const student = {
//     name:"satish",
//     age:18,
//     cgpa:9.0,
//     ispass:true
// };

// const product ={
//     name:"ball pen",
//     rating:4,
//     offer:50,
//     price:100
// };

// const InstaProfile ={
//     username:"@mr_satish_9545",
//     followers:12000,
//     following:200,
//     isfollow:false
// };

// arithmatic operators
// let a=10;
// let b=10;
// console.log("a=10");
// console.log("b=10");
// console.log("a+b: " ,a+b);
// console.log("a-b: " ,a-b);
// console.log("a*b: " ,a*b);
// console.log("a/b: " ,a/b);
// console.log("a%b: " ,a%b);
// console.log("a**b: " ,a**b);


// asignment operator
// let a= 10;
// let b= 5;
// console.log("a+=: ",a+=5);
// console.log("a-=: ",a-=5);
// console.log("a*=: ",a*=5);
// console.log("a/=: ",a/=5);
// console.log("a%=: ",a%=5);

// comparisn operators
// let a = 5;
// let b = 4;
// console.log("a==b",a==b);
// console.log("a!=b",a!=b);
// console.log("a===b",a===b);
// console.log("a!==b",a!==b);
// console.log("a===b",a===b);
// console.log("a<b",a<b);
// console.log("a>b",a>b);
// console.log("a>=sb",a>=b);
// console.log("a<=b",a<=b);

// Conditional statements
// let mode= "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log("mode is :"+color);

// Ternary operators 
// let age=21;
// console.log(age>18?"adult":"not adult");

// explore MDN docs for more information

// promp and alert
// let num = prompt("enter a number ");
// if (num % 5 == 0) {
//     console.log("number multiple by 5 ");
// }
// else{
//     console.log("number not multiple by 5");
// }

// let num1 = prompt("enter a number 1 ");
// let num2 = prompt("enter a number 2 ");
// console.log("addition of two number is :",num1 + num2);

// let per = prompt("enter your percentage");
// if (per >= 85 && per <=100){
//     console.log("cogratuation your grade is A"+per);
// }
// else if (per >= 70 && per <=85){
//     console.log("cogratuation your grade is B"+per);
// }
// else if (per >= 55 && per <=70){
//     console.log("cogratuation your grade is C"+per);
// }
// else if (per >= 35 && per <=55){
//     console.log("cogratuation your grade is D"+per);
// }
// else{
//     console.log("sorry your fail better luck next time");
// }

// looping
// 1.for loop
// for(let i = 1; i <=5; i++){
//     console.log("akanksha jadhav");
// }
// console.log("loop ended");

// sum of first n numbers using for loop
// let sum = 0;
// for (let i = 1; i <=5; i++) {
//     sum+=i;
// }
// console.log(sum);

// while loop 
// let i = 1;
// while(i<=5){
//     console.log(i);
// }

// for-of loop
// let str = "akankshaSatishJadhav";
// for(let i of str){
//     console.log(i);
// }

// practice que
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// practice que2
// let gameNum =10;
// let userNum=prompt("Guess the enter number  : ");
// while(userNum != gameNum){
//     userNum = promp("you entered wrong number. Guess again : ");
// }
// console.log("congratulations....! you entered right number");

// String in js
// let str = "     satish jadhav   ";
// console.log(str);
// console.log(str.length);
// console.log(str[3]);
// console.log("satish \n jadhav");
// console.log(str.substring());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(0,4));
// console.log(str.concat());

// practice que
// let fullname = prompt("enter your full name");
// console.log("@"+fullname+fullname.length);

// arrays in js
// let heroes =["hulk","ironman","antman","captain","streng"];
// console.log(heroes);

// let marks = [90.76,90,76,80,80,80];
// console.log(marks);

// let info=["satish",20,"kolhapur"];
// console.log(info[0]);

// let info=[1,2,3,4,5];
// for(let i=0; i<=5;i++) {
// console.log(info[i]);
// }

// let info=[1,2,3,4,5];
// for(let val of info) {
//     console.log(val);
// }

// for a given array with marks of students 90,87,85,78,90 find avg for all students
// let marks = [90,87,85,78,90];
// let sum = 0;
// for(let i=0; i<marks.length; i++) {
//  sum += marks[i];
// }

// let avg =0;
// avg=sum/marks.length;
// console.log("the average of all students is :",avg);

/* for given array with 5 ms 250,650,300,900,50 all item have offer of 10% change array and store final price 
applied to offer */
// let item = [250,650,300,900,50];
// for(let i=0; i<item.length; i++) {
//     let offer = item[i]/10;
//     item[i]=item[i] - offer;
// }
// console.log(item);

// push and pop
// let item = [250,650,300,900,50];
// item.push(100);
// console.log(item);
// item.pop();
// console.log(item);

// array concat
// let marvel =["tony","captain","spidy","antman","hulk","thor"];
// let xman=["superman","batman","aquaman"];
// console.log(marvel.concat(xman));

// shipt and unshipt
// let marvel =["tony","captain","spidy","antman","hulk","thor"];
// marvel.unshift("hitman");
// console.log(marvel);

// let marvel =["tony","captain","spidy","antman","hulk","thor"];
// marvel.shift();
// console.log(marvel);

// create an array to store company bloomberg , microsoft,uber,google,ibm,netflix find some operations
// let company=[ "bloomberg","microsoft","uber","google","ibm","netflix" ];
// company.shift();
// console.log(company);
// company.splice(2,1,"ola");
// console.log(company);
// company.push( "amazon");
// console.log(company);

// functions in js 
// function myFunction(){
//     console.log("iam easy to learn js");
// }

// function myFunction(){
//     console.log("iam easy to learn js");
//     console.log("start learning js");
// }
// myFunction();

// function addition(a,b) {
//     console.log(a+b);
// }
// addition(3,4);

// let addition = (a,b) => {
//     console.log(a+b);
// }
// addition(3,4);


// function vowelCount(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowelCount("satish");

// using arrow function .
// const vowelCount =(str)=>{
//     let count = 0;
//         for(const char of str){
//             if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//                 count++;
//             }
//         }
//         console.log(count);
//     }
//     vowelCount("apna collage");

// for each loop in array 
//  let array = [1,2,3,4,5];
//  array.forEach((val) => {
//     console.log(val);
//  })

// let num =[2,3,4,5,6];
// num.forEach((num) => {
//     console.log(num*num);
// })

// map method
// let num =[2,3,4,5,6];
// num.map((val) => {
//     console.log(val);
// });

// filter method 
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let newArray = array.filter((val) => {
//     console.log(val % 2 == 0);
// });

// reduce method
// let array = [1,2,3,4,5,6,7,8,9];
// const output = array.reduce((res, curr) =>{
// let result = res + curr;
// })
// console.log(output);

// practice que,
// let marks = [90,88,87,65,89,90,98,93];
// let toppers = marks.map((marks) =>{
//     console.log(marks>90);
// });

// practice que.2
// const n = prompt("enter your choice");
// let array = [];
// for (let i = 1; i <= n; i++) {
//     array[i-1]= i;
// }
// console.log(array);

// practice quw 3



// event in js
// let btn = document.querySelector("button");
// btn.onclick = () =>{
//     console.log("button clicked");
// };

// let modebtn = document.querySelector("#mode");
// let currentMode = "light";
// modebtn.onclick = ("click",() =>{
//     if(currentMode === "light"){
//         currentMode ="dark";
//         document.body.classList.add("dark");
//     }
//     else{
//         currentMode ="light";
//         document.body.classList.add("light");
//     }
//     console.log(currentMode);
// })


// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function demoWait() {
//     console.log("Start");
//     await wait(15000); 
//     console.log("15 seconds waited ⏳");
//     await wait(10000); 
//     console.log("1 more 10 second waited ⏳");
//     console.log("End");
//   }
  
//   demoWait();
  

// function fakeApiCall() {
//     return new Promise(resolve => {
//       setTimeout(() => resolve("🎉 Data fetched successfully!"), 15000);
//     });
//   }
  
//   async function fetchDataDemo() {
//     console.log("Fetching data...");
//     let data = await fakeApiCall();
//     console.log(data); // 🎉 Data fetched successfully!
//   }
  
//   fetchDataDemo();
  

// function task(name, time) {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(`${name} completed ✅`), time);
//     });
//   }
  
//   async function serialTasks() {
//     console.log("🔵 Starting serial tasks...");
//     console.log(await task("Task 1", 3000));
//     console.log(await task("Task 2", 3000));
//     console.log(await task("Task 3", 3000));
//     console.log("🔵 Serial tasks completed!");
//   }
  
//   async function parallelTasks() {
//     console.log("🟢 Starting parallel tasks...");
//     let results = await Promise.all([
//       task("Task 1", 3000),
//       task("Task 2", 3000),
//       task("Task 3", 3000)
//     ]);
//     console.log(results); // सर्व task एकत्र पूर्ण
//     console.log("🟢 Parallel tasks completed!");
//   }
  
//   serialTasks();
//   setTimeout(parallelTasks, 4000); // तुलनासाठी थोडा delay
  
// async function loadJoke() {
//     const jokePara = document.getElementById("joke");
//     jokePara.textContent = "Loading joke... ";

//     try {
//       let response = await fetch("https://icanhazdadjoke.com/", {
//         headers: { Accept: "application/json" }
//       });
//       let data = await response.json();
//       jokePara.textContent = data.joke;
//     } catch (error) {
//       jokePara.textContent = "Failed to fetch joke ";
//     }
//   }

// object and classes in js 
// const Student ={
//   name: "akku jadhav",
//   age: 22,
//   grade: 85,
//   printinfo: function () {
//     console.log("name is ",name);
//   }
// }

// class ToyotaCar{
//   start(){
//     console.log("Car started");
//   }
//   stop(){
//     console.log("Car stopped");
//   }
// }

// let fortuner = new ToyotaCar();

// class person{
//   eat(){
//     console.log("Person eating");
//   }
//   sleep(){
//     console.log("Person sleeping");
//   }
// }
// class engineer extends person{
//   work(){
//     console.log("solving problem and build something useful");
//   }
// }

// let akku = new engineer();

// let data = "secret data";
// class user{
//   constructor(name , email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData(){
//     console.log(data);
//   }
// }
// class Admin extends user{
//   editdata(){
//    data ="admin can edit data"
//   }
// }
// let student1 = new user("akku","akku@gmail.com");
// let student2 = new user("sattu","sattu@gmail.com");

// let admin1 = new Admin("admin","admin@collage.com");

// function hello(){
//   console.log("hello");
// }
// setTimeout(hello, 15000);

// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("hello");
// },10000)
// console.log("three");
// console.log("four");

// async function myFunction() {
//   return "hello world";
// }
// myFunction().then(console.log);

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = [1, 2, 3, 4, 5];
//       resolve(data);
//     }, 10000);
//   });
// }
// async function fetchData(){
//   console.log('Fetching data...');
//   let result = await getData();
//   console.log('Data fetched:', result);
// }

// fetchData();

async function getUserdata(resource) {
  try {
    let url = `https://dummyjson.com/${resource}/?limit=10&skip=5`;

    let response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("Error fetching data:", e);
  }
}

// 🔹 कोणताही resource fetch करण्यासाठी:
getUserdata("products");  // प्रॉडक्ट डेटा आणेल
getUserdata("users");     // युजर डेटा आणेल
getUserdata("posts");     // पोस्ट डेटा आणेल

