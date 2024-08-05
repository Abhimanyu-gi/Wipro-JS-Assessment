// resolved, reject, processing 
/*
const myPromise = new Promise(function (resolve, reject) 
{ 
    let x = 1; if(x == 0) { resolve("ok") } 
    else { reject("error") } 
});
     // Consume 
     myPromise.then((res) => console.log(res), err => console.log(err));

// setTimeout 
// setTimeout(() => console.log("ok"), 3000); // 3 sec 
// setInterval(() => { console.log("ok") }, 1000);

// setTimeout(() => console.log("Enter your name"),2000)
// setInterval(() => { console.log("Enter your name") }, 2000);

*/
const myPromise = new Promise(function(resolve, reject)
{
    let a="Printing name ...";
    if(a == "Printing name ...")
    {
        setInterval(() => {resolve(console.log(a))},2000);
    }
    else{
        reject("error");
    }
})
