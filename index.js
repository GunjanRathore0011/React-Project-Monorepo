// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

// import fs from 'fs';

// fs.readFile('test.txt', ()=>{
//     console.log("readFile 1...");
// })

// process.nextTick(()=>console.log("next tick 1"));

// Promise.resolve().then(()=>console.log("Promise resolved"));

// fs.readFile('test.txt', ()=>{
//     console.log("readFile 2...");
// })

// setTimeout(()=>console.log("set Timeout"),0);


// fs.readFile('test.txt', ()=>{
//     console.log("readFile 3...");
// })
// setImmediate(()=>console.log("set Immediate"));

// process.nextTick(()=>console.log("next tick 2"));


process.nextTick(()=>console.log("next tick"));
Promise.resolve().then(()=>console.log("Promise resolved"));